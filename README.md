
# Smart Inventory — Full Stack Inventory Management System

A full‑stack inventory management application built using **Angular**, **.NET Web API**, and **PostgreSQL**, organized inside a clean **monorepo structure**.  
This project demonstrates real‑world backend development, database integration, and API consumption from a modern frontend.

---

## 🚀 Tech Stack

### Backend (C# / .NET)
- .NET 8 Web API  
- Entity Framework Core  
- PostgreSQL  
- Swagger API documentation  
- Repository-style project structure  
- Thunder Client / Postman API testing  

### Frontend (Angular)
- Angular 17  
- Nx Monorepo Workspace  
- TypeScript  
- Angular Services for API communication  

### Database
- PostgreSQL  
- pgAdmin  
- EF Core Migrations  

---

## 📁 Monorepo Structure

smart-inventory-monorepo/
│
└── apps/
├── backend-dotnet-api/
│   └── BackendApi/
│       ├── Controllers/
│       ├── Data/
│       ├── Models/
│       ├── Program.cs
│       ├── appsettings.json
│       └── BackendApi.csproj
│
└── frontend-angular/
└── (Angular workspace)

Code

---

## 🔧 Backend Setup

### 1. Navigate to backend folder
```bash
cd apps/backend-dotnet-api/BackendApi
## 🔧 Backend Setup Instructions

### Install EF Core packages
```bash
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
dotnet add package Swashbuckle.AspNetCore

## Run migrations
dotnet ef migrations add InitialCreate
dotnet ef database update


### 2. Install dependencies
bash
dotnet restore


### 3. Run the API
bash
dotnet run
# API will start at:

Code
http://localhost:<port>/swagger
### 🗄 Database Setup (PostgreSQL) ###
Update your appsettings.json:

json
"ConnectionStrings": {
  "DefaultConnection": "Host=localhost;Port=5432;Database=inventorydb;Username=postgres;Password=P@ssw0rd"
}


## 📡 API Endpoints
#GET — Fetch all inventory items
GET /api/Inventory

#POST — Add a new item
POST /api/Inventory

#Body: json
{
  "name": "Laptop",
  "quantity": 10
}

🧪 Testing (Thunder Client / Postman)
Open VS Code → Thunder Client

Create GET request:
http://localhost:<port>/api/Inventory

Create POST request with JSON body

Verify database updates in PostgreSQL

🎯 Features
- Add inventory items

- View inventory list

- Persistent database storage

- Clean monorepo architecture

- Fully working backend API

- Ready for frontend integration

📌 Future Improvements
- Add PUT (update item)

- Add DELETE (remove item)

- Add authentication (JWT)

- Add role-based access

- Add UI dashboard in Angular

- Deploy backend to Azure / AWS

