# React Native Expo & NestJS Fullstack Template

This repository contains a template for building a full-stack application using [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/) for the frontend and [NestJS](https://nestjs.com/) for the backend.

---

## Frontend (youssefs-frontend-template)

The frontend is a modern, robust, and scalable mobile application built with Expo and TypeScript. It comes pre-configured with a powerful stack for styling, state management, data fetching, and environment handling.

### Core Technologies

| Technology | Version | Description |
| :--- | :--- | :--- |
| **Expo SDK** | `~51.0.21` | A framework and platform for universal React applications. |
| **React Native** | `0.74.3` | The core framework for building native apps using React. |
| **TypeScript** | `~5.3.3` | A typed superset of JavaScript that compiles to plain JavaScript. |
| **PNPM** | `~10.12.1`| A fast, disk space-efficient package manager. |

### Included Libraries & Features

#### Styling: NativeWind
*   **Library:** [NativeWind v4](https://www.nativewind.dev/)
*   **Description:** Allows you to use [Tailwind CSS](https://tailwindcss.com/) utility classes directly in your React Native components. This provides a fast, consistent, and powerful way to style your application.
*   **Configuration:** The setup follows the latest NativeWind v4 documentation, using a `metro.config.js` and a `global.css` file to process the utility classes.

#### State Management: Zustand
*   **Library:** [Zustand](https://github.com/pmndrs/zustand)
*   **Description:** A small, fast, and scalable state-management solution. It's much simpler than Redux but provides powerful features for managing global app state.
*   **Implementation:** A sample `user-store.ts` is provided in `src/store` to demonstrate creating and using a store for user authentication state.

#### Data Fetching: TanStack Query (React Query)
*   **Library:** [TanStack Query v5](https://tanstack.com/query/latest)
*   **Description:** A powerful library for fetching, caching, synchronizing, and updating server state. It handles loading states, errors, refetching, and caching out of the box.
*   **Implementation:** A custom hook `useExampleQuery` is set up in `src/api` to demonstrate fetching data from a `/health` endpoint. The client is configured in `src/lib/react-query.ts`.

#### Environment Variables: react-native-dotenv
*   **Library:** [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv)
*   **Description:** Used to load environment variables from a `.env` file, allowing you to keep sensitive information like API keys and URLs out of your source code.
*   **Implementation:** The configuration in `babel.config.js` and the type definition in `types/env.d.ts` allow you to import variables directly (e.g., `import { API_URL } from '@env'`).

### Project Structure

The `Frontend` directory is structured to be scalable and maintainable:

```
Frontend/
├── src/
│   ├── api/          # For data fetching hooks (React Query)
│   │   └── index.ts
│   ├── lib/          # For library initializations (QueryClient)
│   │   └── react-query.ts
│   └── store/        # For global state management (Zustand)
│       └── user-store.ts
├── types/            # For global TypeScript type definitions
│   └── env.d.ts
├── .env.example      # Example environment variables file
├── App.tsx           # Main application entry point
├── babel.config.js   # Babel configuration
├── global.css        # Global CSS for NativeWind
├── metro.config.js   # Metro bundler configuration for NativeWind
├── tailwind.config.js# Tailwind CSS configuration
└── tsconfig.json     # TypeScript configuration
```

### Getting Started

#### 1. Navigate to the Frontend Directory
```bash
cd Frontend
```

#### 2. Create Your Environment File
Create a `.env` file in the `Frontend` directory by copying the example.
```bash
cp .env.example .env
```
Or, create the file manually and add the following content. This URL should point to your backend API.
```
API_URL=http://localhost:3000/api
```

#### 3. Install Dependencies
This project uses `pnpm`. Install all dependencies with:
```bash
pnpm install
```

#### 4. Fix Package Versions (If Necessary)
Expo sometimes requires specific versions of certain packages. If you see warnings after installing, use the versions suggested by Expo. For example:
```bash
pnpm install react-native-reanimated@~3.17.4 react-native-safe-area-context@5.4.0
```

#### 5. Start the Application
```bash
pnpm start
```
This will start the Metro bundler. You can then open the app on an Android emulator, iOS simulator, or in your web browser.

### How the Example App Works
The `App.tsx` file demonstrates all the integrated libraries working together:
*   **API URL Display:** Shows the `API_URL` loaded from your `.env` file.
*   **API State Card:** Uses TanStack Query to fetch data. It will show a "Network Error" until your backend is running, proving the data fetching logic is working. The "Refetch API" button allows you to manually trigger a new request.
*   **Zustand State Card:** Demonstrates a simple user authentication state managed by Zustand. You can "Set User" to a mock user object or "Logout" to clear it.

---

## Backend

The backend is a robust and scalable application built with [NestJS](https://nestjs.com/) and TypeScript. It follows a modern, type-safe architecture designed for maintainability and performance.

### Core Technologies

| Technology | Description |
| :--- | :--- |
| **NestJS** | A progressive Node.js framework for building efficient, reliable, and scalable server-side applications. |
| **TypeScript** | A typed superset of JavaScript that enhances code quality and maintainability. |
| **PNPM** | A fast, disk space-efficient package manager. |

### Included Libraries & Features

#### Type-Safe API Contracts: ts-rest
*   **Library:** [ts-rest](https://ts-rest.com/)
*   **Description:** Enables the creation of end-to-end type-safe APIs. We define a single "contract" for each module, which is then shared between the frontend and backend, ensuring that requests and responses always match the defined schema. This eliminates a common source of bugs in full-stack development.

#### Database ORM & Query Builder
*   **Prisma:** Used only for database schema migrations. It simplifies database schema management and ensures that our database schema is always in sync with our code. It is not used for runtime queries.
*   **Kysely:** A type-safe SQL query builder for TypeScript. It's used for all runtime database queries, connecting directly to the PostgreSQL database. This provides a fully type-safe way to interact with the database, catching errors at compile time instead of runtime.

#### Validation: Zod
*   **Library:** [Zod](https://zod.dev/)
*   **Description:** A TypeScript-first schema declaration and validation library. It is used in two key places:
    1.  **Environment Variables:** Ensures that the application starts only when all required environment variables are present and correctly formatted.
    2.  **API Contracts:** Defines the shape of API request bodies, query parameters, and responses within `ts-rest`, providing automatic validation.

#### Logging: nestjs-pino
*   **Library:** [nestjs-pino](https://github.com/iamolegga/nestjs-pino)
*   **Description:** Provides structured, high-performance logging based on the popular Pino logger. It automatically logs incoming requests, responses, and unhandled exceptions.

#### API Documentation: Swagger (OpenAPI)
*   **Library:** [@nestjs/swagger](https://docs.nestjs.com/openapi/introduction)
*   **Description:** Automatically generates interactive API documentation from the NestJS controllers. This makes it easy to explore and test the API endpoints.

### Project Structure

The `Backend` directory is structured around modules, with each module following a clear architectural pattern:

```
Backend/
├── prisma/
│   └── schema.prisma # Prisma schema for database models
├── src/
│   ├── main.ts       # Application entry point
│   ├── app.module.ts # Root application module
│   ├── health/       # Example module
│   │   ├── health.contract.ts # ts-rest API contract
│   │   ├── health.controller.ts # Controller implementing the contract
│   │   ├── health.service.ts    # Business logic
│   │   ├── health.repository.ts # Database interaction layer (Kysely)
│   │   └── health.module.ts     # Module definition
│   └── ...           # Other modules
├── .env.example      # Example environment variables file
└── tsconfig.json     # TypeScript configuration
```
The flow for a request is: `Contract` -> `Controller` -> `Service` -> `Repository`.

### Getting Started

#### 1. Navigate to the Backend Directory
```bash
cd Backend
```

#### 2. Create Your Environment File
Create a `.env` file in the `Backend` directory by copying the example.
```bash
cp .env.example .env
```
You will need to add a `DATABASE_URL` for your PostgreSQL database.
```
DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
```

#### 3. Install Dependencies
This project uses `pnpm`. Install all dependencies with:
```bash
pnpm install
```

#### 4. Run Database Migrations
Use Prisma to apply the database schema.
```bash
pnpm prisma migrate dev
```

#### 5. Start the Application
```bash
pnpm run start:dev
```
The backend server will start on `http://localhost:3000`. You can access the Swagger API documentation at `http://localhost:3000/api`.
