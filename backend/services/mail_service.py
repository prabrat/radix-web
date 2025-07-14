from flask_mail import Message, Mail
from flask import current_app 

def send_email(subject, body): 
    mail = current_app.extensions['mail']
    msg = Message ( 
        subject=subject, 
        sender=current_app.config['MAIL_USERNAME'], 
        recipients=[current_app.config['MAIL_USERNAME']], 
        body=body
    )
    mail.send(msg)