from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

class UserBase(BaseModel):
    email: EmailStr
    full_name: str
    phone: str

class UserCreate(UserBase):
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserInDB(UserBase):
    id: str = Field(alias="_id")
    hashed_password: str
    created_at: datetime
    is_active: bool = True

    class Config:
        populate_by_name = True

class UserResponse(UserBase):
    id: str = Field(alias="_id")
    created_at: datetime

    class Config:
        populate_by_name = True

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    company: Optional[str] = None
    message: str

class ContactInDB(ContactRequest):
    id: str = Field(alias="_id")
    created_at: datetime
    status: str = "pending"

    class Config:
        populate_by_name = True
