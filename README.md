# Password Strength Checker

This is a simple web-based Password Strength Checker built using Flask for the backend and JavaScript (jQuery) for the frontend. The application provides real-time feedback on password strength and offers additional features to improve user security.

## Features
- **Live Password Strength Checking:** Analyzes password strength dynamically.
- **Password Visibility Toggle:** Users can toggle between hidden and visible password input.
- **Password Generator:** Creates strong, random passwords.
- **Copy to Clipboard:** Users can copy generated passwords with a single click.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript (jQuery)
- **Backend:** Flask (Python)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/edadic/Password-Strength-Checker.git
   cd Password-Strength-Checker
   ```
2. Install dependencies:
   ```sh
   python3 -m venv venv
   source venv/bin/activate  # On Windows use 'venv\Scripts\activate'
   pip install flask
   ```
3. Run the Flask app:
   ```sh
   python app.py
   ```
4. Open your browser and go to:
   ```
   http://127.0.0.1:5000/
   ```