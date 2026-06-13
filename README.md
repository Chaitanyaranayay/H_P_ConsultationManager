# Consultation Recording Manager

A lightweight web application for managing consultation recordings, client information, and consultation notes.

## Features

### Dashboard
- View total clients
- View total recordings
- View total consultation notes
- Recent activity overview
- Latest recording summary

### Client Management
- Add new clients
- View client directory
- Search clients
- Delete clients

### Recording Management
- Add consultation recordings
- Track recording details
- Search recordings
- Delete recordings

### Consultation Notes
- Store consultation notes
- Save transcripts
- Track follow-up actions
- Search notes
- Delete notes

## Tech Stack

- React.js
- Vite
- React Router DOM
- Local Storage
- CSS

## Architecture

The application follows a component-based architecture.

```text
src
├── components
│   └── Sidebar.jsx
│
├── pages
│   ├── Dashboard.jsx
│   ├── Clients.jsx
│   ├── Recordings.jsx
│   └── Notes.jsx
│
├── App.jsx
└── main.jsx
```

## Data Storage

For simplicity and rapid prototyping, browser Local Storage is used for data persistence.

Stored collections:
- clients
- recordings
- notes

## Assumptions

- Single-user application
- No authentication required
- Data persistence handled through browser local storage
- Recordings are represented through metadata rather than actual audio uploads

## Future Improvements

- Authentication & Authorization
- Backend API using Node.js/Express
- MongoDB/PostgreSQL database
- Audio file uploads
- Cloud storage integration
- Speech-to-text transcription
- AI-generated consultation summaries
- Role-based access control

## Setup

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

## Deployment

Deployed using Vercel.
