// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            {/* Heading with transition effect */}
            <h1 className="text-6xl font-bold mb-4 text-white animate-fade-in">
                CLIENT_FEEDBACK_SYSTEM
            </h1>
            {/* Subheading with transition effect */}
            <h2 className="text-4xl font-semibold mb-8 text-white animate-slide-in">
                WELCOME TO ADMIN DASHBOARD
            </h2>
            {/* Button with hover and transition effects */}
            <Link 
                to="/admin" 
                className="bg-white text-blue-600 py-3 px-6 rounded-lg shadow-lg hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
                Go to Admin Dashboard
            </Link>
        </div>
    );
}

export default HomePage;