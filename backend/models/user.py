from mongoengine import Document, StringField, EmailField, EnumField, IntField
import enum

class RoleEnum(enum.Enum):
    admin = "admin"
    manager = "manager"
    # Ajoutez d'autres rôles au besoin


class User(Document):
    id = IntField(primary_key=True, required=True)
    firstname = StringField(max_length=255, required=True)
    lastname = StringField(max_length=255, required=True)
    email = EmailField(unique=True, required=True)
    phone = StringField(max_length=20, required=True)
    code = StringField(max_length=10, required=True)
    is_admin = StringField(max_length=10, required=True, choices=['a5b1c4d3f2', 'v9w5x8y6z7'])
    password = StringField(max_length=255, required=True)
    
    meta = {
        'indexes': [
            'email',
            'phone'
        ]
    }

