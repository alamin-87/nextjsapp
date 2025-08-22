# NextAuth Products

A full-stack web application built with **Next.js 15 (App Router)**, **NextAuth.js**, and **MongoDB**, allowing users to browse, add, and manage products with authentication via Google OAuth or email/password credentials.

---

## Features

### Public
- Landing page with hero section and product highlights
- Browse all products
- Product details page

### Authentication
- Google OAuth login
- Email/password login (Credentials provider)
- JWT-based sessions
- Protected dashboard routes

### Dashboard (Protected)
- Add new products
- View and manage products (optional future feature)
- Only authenticated users can access

### Misc
- Dark/light mode toggle
- Responsive UI using **Tailwind CSS**
- Persistent storage with **MongoDB**
- Easy deployment on **Vercel**

---

## Tech Stack

- **Frontend:** Next.js 15, React, Tailwind CSS
- **Backend:** Next.js API Routes, NextAuth.js, Node.js
- **Database:** MongoDB (Atlas)
- **Authentication:** NextAuth.js (Google + Credentials)
- **Deployment:** Vercel

---

## Environment Variables

Create a `.env` file in the root:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/nextjsapp?retryWrites=true&w=majority
NEXTAUTH_SECRET=<your-nextauth-secret>
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_BASE_URL=http://localhost:3000

GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>

CREDENTIALS_EMAIL=<your-email>
CREDENTIALS_PASSWORD_HASH=<bcrypt-hash-of-your-password>

Installation

git clone <your-repo-url>
cd nextjsapp
npm install

Run Locally
# Start development server
npm run dev

# Build for production
npm run build
npm start