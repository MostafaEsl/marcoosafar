# Marco Osafar

A full-stack starter for marcoosafar.com using Django for the backend and React (Vite) for the frontend.

## Backend (Django)

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The API is available at `http://127.0.0.1:8000/api/overview/`.

## Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173`.
