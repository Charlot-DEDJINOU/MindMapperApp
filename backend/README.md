# Mind Mapper App — Backend

This directory contains the Python FastAPI backend for the Mind Mapper App. It provides user authentication, personality/question management, and response tracking using MongoDB.

## Key features

- FastAPI application in `backend/main.py`
- MongoDB connection via `backend/database/base.py`
- CORS enabled for frontend integration
- REST routes for authentication, users, questions, personalities, and responses
- Static files served from `backend/static`

## Installation

1. Create and activate a Python virtual environment:

```bash
python -m venv .venv
.\.venv\Scripts\activate
```

2. Install dependencies:

```bash
pip install -r requirements.txt
```

## Configuration

Create a `.env` file in `backend/` with at least:

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>/<dbname>
```

## Run the backend

```bash
uvicorn main:app --reload
```

The FastAPI docs are available at:

- http://127.0.0.1:8000/docs

## Project structure

- `main.py` — FastAPI app factory and route registration
- `database/` — MongoDB connection setup
- `models/` — MongoDB document models
- `routes/` — API route definitions
- `schemas/` — Pydantic request/response schemas
- `services/` — business logic and database operations
- `static/` — static assets mounted at `/static`

## Notes

The backend is designed to work with the React frontend and a separate Node API layer for authentication or other services.


