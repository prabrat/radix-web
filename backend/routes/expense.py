from flask import Blueprint, request, jsonify
from services.mail_service import send_email

expense_bp = Blueprint("expense", __name__)

@expense_bp.route("/submit-expense", methods=["POST"])
def submit_expense():
    try:
        data = request.json

        required_fields = ['child-name', 'parent-name', 'phone', 'email', 'from-date', 'to-date']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'Error': f'{field} is required'}), 400

        email_body = f"""
        Child Name(s): {data.get('child-name')}
        Parent Name: {data.get('parent-name')}
        Phone Number: {data.get('phone')}
        Email: {data.get('email')}
        From Date: {data.get('from-date')}
        To Date: {data.get('to-date')}
        Message: {data.get('message')}
        """

        send_email(
            subject='New Expense Statement Request',
            body=email_body
        )

        return jsonify({'message': 'Expense Statement Request Submitted'}), 200

    except Exception as e:
        print(f'Error: {e}')
        return jsonify({'Error': 'Something went wrong!'}), 500
