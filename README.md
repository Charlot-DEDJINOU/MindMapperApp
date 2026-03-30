# Mind Mapper App

This repository contains three main application parts for the Mind Mapper App:

- `backend/` — Python FastAPI backend with MongoDB support
- `frontend/` — React + Vite frontend application
- `node/` — Node.js Express API for authentication and lightweight API routing

## Overview

- The `backend` folder contains the main FastAPI server and data models used by the application.
- The `frontend` folder contains the user interface and client-side app logic.
- The `node` folder contains an Express server that provides registration and login endpoints.

## How to use this repository

### Backend

```bash
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Node API

```bash
cd node
npm install
node server.js
```

## Notes

- The FastAPI backend exposes interactive API documentation at `http://127.0.0.1:8000/docs`
- The React frontend uses Vite for fast development refresh and Tailwind CSS for styling
- The Node API is ready for auth endpoints and can be extended with additional routes

## Structure

- `backend/` — Python backend, models, routes, schemas, services
- `frontend/` — React app, components, views, services
- `node/` — Express API, controllers, middleware, routes

If you need to run only a specific part of the project, open that directory and follow its README.
