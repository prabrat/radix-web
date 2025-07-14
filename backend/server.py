from flask import Flask
from flask_cors import CORS 
from flask_mail import Mail
from backend.config import Config
from dotenv import load_dotenv
from backend.routes.expense import expense_bp
import os 

load_dotenv()

def create_app(): 
    app = Flask(__name__) 
    CORS(app) 
    app.config.from_object(Config)
    
    mail = Mail()
    mail.init_app(app)

    app.register_blueprint(expense_bp)
    return app

app = create_app() 

if __name__ == "__main__": 
    app.run(debug=True)