from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os
from dotenv import load_dotenv

from database.base import connect_to_mongodb
from routes.user import  user_router



load_dotenv()

app = FastAPI()


# Middleware pour autoriser les requêtes CORS 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.mount("/static", StaticFiles(directory="static"), name="static")

@app.on_event("startup")
async def startup_event():
    mongogb= await connect_to_mongodb(os.getenv("DATABASE_NAME"))
    print("Connexion à MongoDB établie")
    


app.include_router(user_router)



if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="192.168.1.88", port=8000)

