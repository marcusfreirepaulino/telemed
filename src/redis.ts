import Redis from 'ioredis';

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

const redis = new Redis(redisUrl, {
  maxRetriesPerRequest: 3,
  retryStrategy(times) {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
  reconnectOnError(err) {
    const targetError = 'READONLY';
    if (err.message.includes(targetError)) {
      return true;
    }
    return false;
  }
});

redis.on('connect', () => {
  console.log('Connected to Redis');
});

redis.on('error', (err) => {
  console.error('Redis connection error:', err);
});

export default redis;
