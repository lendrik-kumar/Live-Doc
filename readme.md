# Live-Doc: Real-Time Collaborative Whiteboard 📝

##Deployed At https://live-doc-kappa.vercel.app/

Live-Doc is a real-time collaborative whiteboarding application that allows multiple users to join a shared room and draw together simultaneously.  
It's built with a modern tech stack including React for the frontend and Node.js with Socket.IO for the backend, providing a seamless and interactive experience.

---

## ✨ Features

- **Real-Time Collaboration**: Changes made by one user are instantly visible to all other users in the same room.
- **Room-Based Sessions**: Users can create a new room with a unique ID or join an existing one.
- **User Presence**: See a live list of all users currently connected to the room.
- **Persistent User Info**: Remembers your username and the last Room ID you used, making it easier to rejoin sessions.
- **Copy Room ID**: Easily share the room link with others with a single click.
- **Toast Notifications**: Get notified when users join or leave the room.
- **Responsive Design**: A clean and modern UI that works well on different screen sizes.

---

## 🛠️ Tech Stack

### **Frontend**
- **React** – JavaScript library for building user interfaces.
- **Tldraw** – Powerful open-source library for creating infinite canvas applications.
- **Socket.IO Client** – Handles real-time, bidirectional communication with the server.
- **Zustand** – Small, fast, and scalable state-management solution.
- **React Router** – For client-side routing and navigation.
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development.
- **React Hot Toast** – For clean and simple notifications.

### **Backend**
- **Node.js** – JavaScript runtime environment for the server.
- **Express** – Minimal and flexible Node.js web application framework.
- **Socket.IO** – Enables real-time, event-based communication.
- **Nodemon** – Automatically restarts the Node.js server on file changes.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### **Prerequisites**
- Node.js (v14 or later)
- npm or yarn package manager

---

### **Installation & Setup**

#### 1️⃣ Clone the repository
```bash
git clone https://github.com/lendrik-kumar/Live-Doc.git
cd Live-Doc

2️⃣ Setup the Backend
cd backend
npm install


Create a .env file inside the backend directory:

PORT=8000


Start the backend server:

npm start


The backend will be running at: http://localhost:8000

3️⃣ Setup the Frontend
cd ../frontend
npm install


Create a .env.local file inside the frontend directory:

VITE_NODE_URL=http://localhost:8000


Start the frontend development server:

npm run dev


The application will be available at: http://localhost:5173
(or another port if 5173 is busy)

📂 Project Structure
Live-Doc/
├── backend/
│   ├── node_modules/
│   ├── package.json
│   └── index.js        # Main server file
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/ # Reusable React components
    │   ├── lib/        # Socket.IO client setup
    │   ├── pages/      # Page components (Home, Editor)
    │   ├── utils/      # Zustand store
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js


🤝 Contributing

Contributions are welcome! 🎉
If you have suggestions for improvements or want to fix a bug, feel free to create an issue or submit a pull request.

Fork the project

Create your Feature Branch

git checkout -b feature/AmazingFeature


Commit your changes

git commit -m "Add some AmazingFeature"


Push to the branch

git push origin feature/AmazingFeature


Open a Pull Request

📄 License

This project is licensed under the MIT License – see the LICENSE file for details.

🙏 Acknowledgments

Made with ❤️ by Sanket
Inspired by the need for simple, real-time collaboration tools.


---

If you want, I can also make this **GitHub-friendly with badges** and a **preview screenshot**
