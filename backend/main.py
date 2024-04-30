from fastapi import FastAPI
from models.base import Base, engine
from fastapi.middleware.cors import CORSMiddleware
from routes.user import  user_router




def create_database():
    Base.metadata.create_all(bind=engine)
    


create_database()
app = FastAPI()


# Middleware pour autoriser les requêtes CORS 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router)



if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="192.168.1.88", port=8000)

