import mongoengine as me
from mongoengine import Document, IntField, StringField, DateTimeField
from datetime import datetime

class Response(Document):
    id = IntField(primary_key=True, required=True)
    user_id = IntField(required=True)
    id_link = IntField(required=True)
    status = StringField(max_length=255, required=True)
    id_personality = IntField(required=True)
    id_statistique = IntField(required=True)
    date = DateTimeField(default=datetime.utcnow, required=True)
    
    # Génération dynamique des champs A1, A2, ..., I3
    for letter in 'ABCDEFGHI':
        for number in range(1, 11):
            locals()[f'{letter}{number}'] = StringField(max_length=255)

    meta = {
        'indexes': [
            'user_id',
            'id_link',
            'id_personality',
            'id_statistique',
            'date'
        ]
    }
