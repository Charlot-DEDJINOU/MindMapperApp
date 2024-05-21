import jwt
from datetime import datetime, timedelta
from typing import Optional
from models.user import User
import random
import string

SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def create_access_token(data: dict) -> str:
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def create_user(firstname: str, lastname: str, email: str, phone: str, password: str) -> User:
    user = User(
        firstname=firstname,
        lastname=lastname,
        email=email,
        phone=phone,
        password=password
    )
    user.save()
    return user

def login(email: str, password: str) -> Optional[User]:
    user = User.objects(email=email, password=password).first()
    if user:
        access_token = create_access_token({"user_id": str(user.id)})
        return {"user": user, "access_token": access_token}
    return None


def generate_verification_code(user: User) -> str:
    # Génération d'un code de vérification aléatoire de 6 chiffres
    code = ''.join(random.choices(string.digits, k=6))
    # Mise à jour du champ verification_code dans la base de données
    user.update(verification_code=code)
    return code

def send_verification_code_email(email: str, code: str) -> None:
    # Implémentez ici la logique pour envoyer le code de vérification par e-mail
    # Cette fonction pourrait utiliser un service d'e-mail comme SendGrid, SMTP, etc.
    # Par exemple, avec FastAPI, vous pouvez envoyer un e-mail en utilisant un package Python comme `smtplib`
    # Voici un exemple simple avec smtplib :
    import smtplib
    from email.mime.text import MIMEText
    from email.mime.multipart import MIMEMultipart

    sender_email = "your_email@example.com"
    receiver_email = email

    message = MIMEMultipart("alternative")
    message["Subject"] = "Your Verification Code"
    message["From"] = sender_email
    message["To"] = receiver_email

    text = f"Your verification code is: {code}"
    html = f"""\
    <html>
      <body>
        <p>Your verification code is: <strong>{code}</strong></p>
      </body>
    </html>
    """

    part1 = MIMEText(text, "plain")
    part2 = MIMEText(html, "html")

    message.attach(part1)
    message.attach(part2)

    with smtplib.SMTP("smtp.example.com", 587) as server:
        server.starttls()
        server.login(sender_email, "your_password")
        server.sendmail(sender_email, receiver_email, message.as_string())
