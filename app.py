from flask import Flask, render_template, request, jsonify
import re

app = Flask(__name__)

def check_password_strength(password):
    strength = 0
    feedback = []

    if len(password) >= 8:
        strength += 1
    else:
        feedback.append("Password should be at least 8 characters long.")

    if re.search(r"[A-Z]", password):
        strength += 1
    else:
        feedback.append("Include at least one uppercase letter.")

    if re.search(r"[a-z]", password):
        strength += 1
    else:
        feedback.append("Include at least one lowercase letter.")

    if re.search(r"\d", password):
        strength += 1
    else:
        feedback.append("Include at least one number.")

    if re.search(r"[!@#$%^&*(),.?\":{}|<>]", password):
        strength += 1
    else:
        feedback.append("Include at least one special character (!@#$%^&* etc.).")

    return strength, feedback

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/check", methods=["POST"])
def check():
    data = request.get_json()
    password = data.get("password", "")
    strength, feedback = check_password_strength(password)

    message = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"][strength-1] if strength > 0 else "Extremely Weak"

    return jsonify({"strength": strength, "message": message, "feedback": feedback})

if __name__ == "__main__":
    app.run(debug=True)
