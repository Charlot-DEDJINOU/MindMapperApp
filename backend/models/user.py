from mongoengine import Document, StringField, EmailField, EnumField
import enum

class RoleEnum(enum.Enum):
    admin = "admin"
    manager = "manager"
    # Ajoutez d'autres rôles au besoin

class User(Document):
    username = StringField(max_length=50, unique=True, required=True)
    password = StringField(max_length=255, required=True)
    full_name = StringField(max_length=255, required=True)
    email = EmailField(unique=True, required=True)
    role = EnumField(RoleEnum, required=True)
    
    meta = {
        'indexes': [
            'username',
            'email'
        ]
    }
