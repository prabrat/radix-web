from flask import Blueprint, request, jsonify 
from services.mail_service import send_email 

contact_bp = Blueprint("contact", __name__) 

@contact_bp.route("/contact", methods=["POST"])
def submit_contact(): 
    try: 
        data = request.json 

        required_fields = ['name', 'email', 'phone', 'message']
        for field in required_fields: 
            if not data.get(field): 
                return jsonify({'Error': f'{field} is required'}), 400 

        email_body = f"""
        Name: {data.get('name')}
        Email: {data.get('email')}
        Phone: {data.get('phone')}
        Message: {data.get('message')}
        """ 

        send_email(
            subject = 'New Child Care Inquiry', 
            body = email_body
        )

        return jsonify({'message': 'Thank you for contacting us, we will get back to you as soon as possible!'})

    except Exception as e: 
        print(f'Error: {e}')
        return jsonify({'Error': 'Something went wrong!'}), 500