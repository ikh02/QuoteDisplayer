from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

QUOTES_DB = [
    {"id": 1, "text": "The only way to do great work is to love what you do."},
    {"id": 2, "text": "Innovation distinguishes between a leader and a follower."},
    {"id": 3, "text": "Your time is limited, so don’t waste it living someone else’s life."},
]

@app.get("/api/quote/random")
def get_random_quote():
    """
    This endpoint returns a single random quote from our database.
    """
    quote = random.choice(QUOTES_DB)
    return quote