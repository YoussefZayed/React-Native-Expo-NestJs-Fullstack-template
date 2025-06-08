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

(Backend details to be added)
