# Client Outreach Tracker

A private and responsive **Client Outreach CRM** built to manage freelance leads, track conversations, schedule follow-ups, and organize client outreach in one place.

## ✨ Features

* 🔐 Secure email/password authentication
* 👤 Protected dashboard
* ➕ Add new clients
* ✏️ Edit client information
* 🗑️ Delete clients with confirmation
* 👀 View complete client details
* 🔎 Search clients by name, company, or email
* 🎯 Filter by status, service, and outreach channel
* 📅 Track follow-ups for:

  * Overdue
  * Today
  * Tomorrow
* 📊 Dashboard statistics
* 📱 Fully responsive design
* ☁️ Cloud database with Supabase
* 🔒 Row Level Security (RLS)
* 💬 Success and error notifications with SweetAlert2

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router
* Lucide React

### Backend & Database

* Supabase Authentication
* Supabase PostgreSQL
* Supabase Row Level Security (RLS)

### Other

* SweetAlert2
* Git & GitHub
* Vercel

## 📋 Client Information

The CRM allows you to store:

* Name
* Company
* Website
* WhatsApp
* Email
* LinkedIn
* Instagram
* Facebook
* Business Type
* Location
* Service
* Outreach Channel
* Status
* Follow-up Date
* Notes

## 📌 Client Statuses

The outreach pipeline includes:

* New
* Contacted
* Replied
* Interested
* Client
* Not Interested

## 🎯 Purpose

This project was built as a practical CRM for managing freelance client outreach.

Instead of keeping leads across spreadsheets, notes, and different messaging platforms, the application provides a centralized workspace for tracking prospects and follow-ups.

## 🔐 Security

The application uses **Supabase Row Level Security (RLS)** to ensure authenticated users can only access their own client records.

Authentication is handled through Supabase Auth, and sensitive Supabase server keys are not exposed in the frontend.

## 📱 Responsive Design

The dashboard is designed to work across different screen sizes.

* Desktop → Data table
* Mobile → Client cards
* Responsive search and filters
* Responsive navigation
* Mobile-friendly follow-up sections

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/fareehaabbasi/CRM-.git
```

### 2. Navigate to the project

```bash
cd CRM-/CRM
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create environment variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_publishable_or_anon_key
```

### 5. Start the development server

```bash
npm run dev
```

The application will run locally using Vite.

## 📂 Project Structure

```text
CRM/
├── public/
├── src/
│   ├── components/
│   │   ├── ClientCard.jsx
│   │   ├── ClientDetails.jsx
│   │   ├── ClientModal.jsx
│   │   ├── ClientTable.jsx
│   │   ├── FollowUpSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── SearchFilter.jsx
│   │   └── StatsCards.jsx
│   │
│   ├── hooks/
│   │   └── useClients.js
│   │
│   ├── Lib/
│   │   └── supabase.js
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── Login.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── package.json
├── vercel.json
└── vite.config.js
```

## 🌐 Deployment

The application is deployed using **Vercel**.

The project uses Vercel rewrites so React Router routes work correctly after deployment.

## 🔮 Future Improvements

Possible future improvements include:

* 📈 Outreach conversion analytics
* 📊 More advanced dashboard charts
* 🔔 Automated follow-up reminders
* 📤 CSV import/export
* 🏷️ Custom lead tags
* 📝 Activity history for each client
* 📱 Progressive Web App support

## 👩‍💻 Author

**Fareeha Abbasi**

MERN Stack Developer focused on building responsive, conversion-focused websites and web applications for startups and small businesses.

### Tech Interests

React.js · Next.js · Tailwind CSS · MERN Stack · Supabase · Frontend Development

---

⭐ If you find this project useful, consider giving the repository a star.
