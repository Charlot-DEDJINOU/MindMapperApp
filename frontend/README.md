# Mind Mapper App — Frontend

This directory contains the React + Vite frontend for the Mind Mapper App. It implements the application UI, routing, authentication flow, and dashboard views.

## Key features

- React 18 with Vite
- React Router v6 for client-side routing
- Tailwind CSS for styling
- Axios for API communication
- Form validation with Formik and Yup
- Chart.js chart components and custom UI components

## Installation

```bash
cd frontend
npm install
```

## Run locally

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Project structure

- `src/App.jsx` — main app component and route definitions
- `src/main.jsx` — Vite entry file
- `src/components/` — reusable UI components and layout pieces
- `src/context/` — user session and auth context
- `src/services/` — API service wrappers
- `src/views/` — page views for home, login, dashboard, and error handling
- `src/styles/` — global CSS and Tailwind utilities

## Notes

The frontend expects the backend API to expose authentication endpoints and data endpoints for users, questions, personalities, and responses. Adjust the API base URL in `src/services/api.js` if needed.
