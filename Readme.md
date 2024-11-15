# vtube(a feature rich video hosting website with tweet functionality)

Features
Video Hosting: Upload, stream, and share videos seamlessly.
Tweet-like Functionality: Share short, text-based posts with your followers.
User Authentication: Secure sign-up, login, and password recovery using JWT and bcrypt.
Interactive UI: Modern and responsive design using React.js.
Comments & Likes: Engage with videos and posts via comments and likes.
Real-time Notifications: Stay updated with the latest interactions using WebSocket.
Search & Filters: Find videos and posts with advanced search and category filters.
Profile Management: Edit and customize user profiles.

🛠️ Technologies Used
Frontend
React.js
Redux Toolkit (state management)
SCSS (styling)
Backend
Node.js
Express.js
MongoDB with Mongoose
Cloudinary (video hosting)
Socket.IO (real-time updates)
Others
JWT Authentication
Multer (file uploads)
📁 Project Structure
bash
Copy code
vtube/  
├── client/ # React frontend  
├── server/ # Node.js backend  
├── models/ # MongoDB schemas  
├── routes/ # API routes  
├── controllers/ # Business logic  
├── middleware/ # Auth and error handling  
└── config/ # Configuration files  
⚙️ Installation
Prerequisites
Node.js
MongoDB
Cloudinary account
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/vtube.git  
cd vtube  
Install dependencies for both backend and frontend:

bash
Copy code
cd server  
npm install  
cd ../client  
npm install  
Create a .env file in the server directory:

plaintext
Copy code
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
CLOUDINARY_CLOUD_NAME=your_cloud_name  
CLOUDINARY_API_KEY=your_api_key  
CLOUDINARY_API_SECRET=your_api_secret

🎯 Roadmap
Add video playlists.
Implement AI-based video recommendations.
Enable video monetization and subscriptions.
Integrate multi-language support.
