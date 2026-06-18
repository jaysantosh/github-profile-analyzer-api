GitHub Profile Analyzer API
📌 Project Overview
The GitHub Profile Analyzer API is a backend service built using Node.js, Express.js, and MySQL that fetches public GitHub user data, analyzes key profile insights, and stores them in a database for future reference.
This application uses the GitHub Public REST API to extract useful information from a GitHub user profile and exposes RESTful APIs to manage and retrieve the analyzed data.

🎯 Objective

Fetch public GitHub profile details using a username
Analyze and extract useful insights
Store analyzed profile data in MySQL
Provide APIs to retrieve stored profile data


🧰 Tech Stack

Node.js
Express.js
MySQL
GitHub Public API


✨ Key Features

Fetch GitHub public profile data by username
Analyze and store useful insights such as:

GitHub username
Name
Bio
Public repository count
Followers count
Following count
Account creation date
Profile URL


Store analyzed data into a MySQL database
REST APIs to:

Fetch all stored analyzed profiles
Fetch a single analyzed profile by username


Error handling for invalid usernames and API failures


📁 Project Structure
github-profile-analyzer/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── githubController.js
│   ├── routes/
│   │   └── githubRoutes.js
│   ├── services/
│   │   └── githubService.js
│   ├── app.js
│   └── server.js
│
├── sql/
│   └── database.sql
│
├── .env
├── package.json
├── package-lock.json
└── README.md


🛠️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/github-profile-analyzer.git
cd github-profile-analyzer


2️⃣ Install Dependencies
npm install


3️⃣ Configure Environment Variables
Create a .env file in the root directory:
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_analyzer
GITHUB_API_BASE=https://api.github.com


4️⃣ Setup MySQL Database

Create a new database named github_analyzer
Import the SQL file from the sql folder:

source sql/database.sql;


5️⃣ Start the Server
For development:
npm run dev

For production:
npm start

Server will run at:
http://localhost:3000


📊 Database Schema
Table: github_profiles

















































Column NameTypeidINT (PK)usernameVARCHARnameVARCHARbioTEXTpublic_reposINTfollowersINTfollowingINTprofile_urlVARCHARcreated_atDATETIMEanalyzed_atTIMESTAMP

🔗 API Endpoints
➤ Analyze & Store GitHub Profile
POST /api/github/analyze/:username

Example:
POST http://localhost:3000/api/github/analyze/octocat


➤ Get All Analyzed Profiles
GET /api/github/profiles


➤ Get Single Profile by Username
GET /api/github/profiles/:username


🚀 Live Deployment

Live API URL: https://your-deployed-url.com
GitHub Repository: https://github.com/your-username/github-profile-analyzer

(Update these links after deployment)

🧪 Testing

APIs tested using Postman
Postman Collection: (Optional – attach if available)


🔮 Possible Enhancements

Add GitHub repository language analysis
Store most starred repository
Pagination for profile list API
Authentication & rate‑limit handling
Dockerize the application
Caching GitHub API responses

