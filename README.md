# Event App

A full-stack web application for managing events and activities. This application allows users to view, create, edit, and delete activities.

## Features

- **Activity Management**: Create, read, update, and delete activities.
- **Activity List**: View a list of all activities with details like title, date, description, category, city, and venue.
- **Detailed View**: View comprehensive details for a specific activity.
- **Form Validation**: robust form validation for creating and editing activities.

## Technologies Used

### Backend
- **.NET 9.0**: The core framework for the backend API.
- **ASP.NET Core Web API**: Used to build the RESTful API endpoints.
- **Entity Framework Core**: The Object-Relational Mapper (ORM) for data access.
- **SQLite**: The database engine used for development.

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Vite**: A build tool that provides a faster and leaner development experience.
- **MobX**: A library for simple, scalable state management.
- **Material UI (MUI)**: A popular React UI framework for building beautiful and accessible components.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests to the backend API.

## Prerequisites

Before running this application, ensure you have the following installed:

- [.NET 9.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)
- [Node.js](https://nodejs.org/) (LTS version recommended)

## Getting Started

Follow these steps to set up and run the application locally.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd EventApp
```

### 2. Backend Setup

Navigate to the API directory and start the backend server.

```bash
cd API
dotnet restore
dotnet run
```

The API server will start at `https://localhost:5001`.
On the first run, the database will be automatically created and seeded with sample data.

### 3. Frontend Setup

Open a new terminal window, navigate to the client directory, install dependencies, and start the development server.

```bash
cd client
npm install
npm run dev
```

The frontend application will be available at `http://localhost:3000` (or the port specified in the terminal).

## Project Structure

- **API**: Contains the ASP.NET Core Web API project.
- **Application**: Contains the application logic and CQRS handlers.
- **Domain**: Contains the domain entities.
- **Persistence**: Contains the database context and migrations.
- **client**: Contains the React frontend application.

## Usage

1.  Open your browser and navigate to `http://localhost:3000`.
2.  You will see a dashboard with a list of activities.
3.  Click on "Create Activity" to add a new event.
4.  Click "View" on an activity to see its details.
5.  Click "Edit" to modify an existing activity.
6.  Click "Delete" to remove an activity.
