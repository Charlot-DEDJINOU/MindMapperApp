from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    firstname: str
    lastname: str
    email: EmailStr
    phone: str
    is_admin: str
    password: str


class UserLogin(BaseModel):
    email: str
    password: str
class UserCreate(UserBase):
    pass

class UserUpdate(UserBase):
    pass

class UserOut(BaseModel):
    id: int
    firstname: str
    lastname: str
    email: EmailStr
    phone: str
    is_admin: str
    full_name: str

    class Config:
        orm_mode = True
