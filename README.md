# Telemed Server

A Hono + TypeScript + PNPM + Jest + Prisma server with PostgreSQL and Redis.

## Prerequisites

- Node.js (v18+)
- PNPM
- Docker and Docker Compose (recommended)

## Getting Started

### Option 1: Using Docker (Recommended)

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

   The default `.env` configuration works with Docker Compose out of the box:
   ```
   DATABASE_URL="postgresql://telemed:telemed123@localhost:5432/telemed?schema=public"
   REDIS_URL="redis://localhost:6379"
   PORT=3000
   ```

3. **Start PostgreSQL and Redis with Docker:**
   ```bash
   docker-compose up -d
   ```

4. **Run database migrations:**
   ```bash
   pnpm prisma:migrate
   ```

5. **Generate Prisma client:**
   ```bash
   pnpm prisma:generate
   ```

6. **Start the development server:**
   ```bash
   pnpm dev
   ```

The server will start on `http://localhost:3000`

### Option 2: Manual Setup

If you prefer to install PostgreSQL and Redis manually:

1. Install and start PostgreSQL and Redis on your system
2. Follow steps 1-2 from Option 1
3. Update the `.env` file with your PostgreSQL and Redis credentials
4. Continue with steps 4-6 from Option 1

## Docker Commands

- `docker-compose up -d` - Start PostgreSQL and Redis in the background
- `docker-compose down` - Stop and remove containers
- `docker-compose logs` - View container logs
- `docker-compose ps` - List running containers

## Available Scripts

- `pnpm dev` - Start development server with auto-reload
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm test` - Run Jest tests
- `pnpm test:watch` - Run Jest in watch mode
- `pnpm prisma:generate` - Generate Prisma client
- `pnpm prisma:migrate` - Run database migrations
- `pnpm prisma:studio` - Open Prisma Studio
- `pnpm db:push` - Push schema changes to database without migrations

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create a new user
