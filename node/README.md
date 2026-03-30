# Mind Mapper App — Node API

This directory contains a lightweight Node.js Express API for Mind Mapper App features such as user registration and login.

## Key features

- Express server in `node/server.js`
- API routing in `node/src/routes/api.js`
- JSON request parsing and CORS enabled
- Authentication middleware in `node/src/middlewares/authMiddleware.js`
- User controller in `node/src/controllers/userController.js`
- Route map output via `express-routemap`

## Installation

```bash
cd node
npm install
```

## Run locally

```bash
cd node
node server.js
```

The server listens on port `8080` by default, or the value of `PORT` if set in the environment.

## Endpoints

- `POST /api/register` — register a new user
- `POST /api/login` — login and receive authentication data

## Notes

This Node API is separated from the Python FastAPI backend, and it can serve as an authentication layer or an alternate API endpoint provider. Update environment variables and controllers as needed for your database and auth implementation.
