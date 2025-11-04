from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from motor.motor_asyncio import AsyncIOMotorClient
from app.routers import auth, contact
from app.config import settings

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    app.mongodb_client = AsyncIOMotorClient(settings.MONGODB_URL)
    app.database = app.mongodb_client[settings.DATABASE_NAME]
    yield
    # Shutdown
    app.mongodb_client.close()

app = FastAPI(
    title="Agentic AI Agency API",
    lifespan=lifespan
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://agentic-74f12f7f.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["Authentication"])
app.include_router(contact.router, prefix="/api", tags=["Contact"])

@app.get("/")
async def root():
    return {"message": "Welcome to Agentic AI Agency API"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
