from fastapi import APIRouter, Depends, HTTPException, status, Request
from datetime import datetime
from app.models import UserCreate, UserLogin, Token, UserResponse
from app.security import get_password_hash, verify_password, create_access_token, get_current_user

router = APIRouter()

@router.post("/register", response_model=Token)
async def register(user: UserCreate, request: Request):
    # Check if user already exists
    existing_user = await request.app.database["users"].find_one({"email": user.email})
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )

    # Create new user
    user_dict = user.model_dump()
    user_dict["hashed_password"] = get_password_hash(user_dict.pop("password"))
    user_dict["created_at"] = datetime.utcnow()
    user_dict["is_active"] = True

    result = await request.app.database["users"].insert_one(user_dict)
    user_dict["_id"] = str(result.inserted_id)

    # Create access token
    access_token = create_access_token(data={"sub": user.email})

    return {"access_token": access_token, "token_type": "bearer"}

@router.post("/login", response_model=Token)
async def login(user_login: UserLogin, request: Request):
    # Find user
    user = await request.app.database["users"].find_one({"email": user_login.email})
    if not user or not verify_password(user_login.password, user["hashed_password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password"
        )

    # Create access token
    access_token = create_access_token(data={"sub": user["email"]})

    return {"access_token": access_token, "token_type": "bearer"}

@router.get("/me", response_model=UserResponse)
async def get_me(request: Request, current_user: str = Depends(get_current_user)):
    user = await request.app.database["users"].find_one({"email": current_user})
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )

    user["_id"] = str(user["_id"])
    return UserResponse(**user)
