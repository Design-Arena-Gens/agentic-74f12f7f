from fastapi import APIRouter, Request, status
from datetime import datetime
from app.models import ContactRequest

router = APIRouter()

@router.post("/contact", status_code=status.HTTP_201_CREATED)
async def create_contact_request(contact: ContactRequest, request: Request):
    contact_dict = contact.model_dump()
    contact_dict["created_at"] = datetime.utcnow()
    contact_dict["status"] = "pending"

    result = await request.app.database["contacts"].insert_one(contact_dict)
    contact_dict["_id"] = str(result.inserted_id)

    return {"message": "Contact request submitted successfully", "id": contact_dict["_id"]}

@router.get("/contacts")
async def get_contacts(request: Request):
    contacts = []
    cursor = request.app.database["contacts"].find({}).sort("created_at", -1)
    async for contact in cursor:
        contact["_id"] = str(contact["_id"])
        contacts.append(contact)
    return contacts
