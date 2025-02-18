// src/components/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';

function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [showUsers, setShowUsers] = useState(false);
    const [showFeedbacks, setShowFeedbacks] = useState(false);

    useEffect(() => {
        fetch('/api/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));

        fetch('/api/feedbacks')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setFeedbacks(data))
            .catch(error => console.error('Error fetching feedbacks:', error));
    }, []);

    const handleShowUsers = () => {
        setShowUsers(true);
        setShowFeedbacks(false);
    };

    const handleShowFeedbacks = () => {
        setShowUsers(false);
        setShowFeedbacks(true);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>
            <div className="flex justify-center mb-8">
                <button onClick={handleShowUsers} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mx-2">Registered Users</button>
                <button onClick={handleShowFeedbacks} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mx-2">Feedbacks</button>
            </div>
            
            {showUsers && (
    <div>
        <h2 className="text-2xl font-semibold mb-4">Registered Users</h2>
        <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="py-3 px-4 border border-gray-300">ID</th>
                    <th className="py-3 px-4 border border-gray-300">Username</th>
                    <th className="py-3 px-4 border border-gray-300">Email</th>
                    <th className="py-3 px-4 border border-gray-300">Password</th>
                    <th className="py-3 px-4 border border-gray-300">Created At</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id} className="border-t border-gray-300">
                        <td className="py-2 px-4 border border-gray-300 text-center">{user.id}</td>
                        <td className="py-2 px-4 border border-gray-300 text-center">{user.username}</td>
                        <td className="py-2 px-4 border border-gray-300 text-center">{user.email}</td>
                        <td className="py-2 px-4 border border-gray-300 text-center">{user.password}</td>
                        <td className="py-2 px-4 border border-gray-300 text-center">{new Date(user.created_at).toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)}

{showFeedbacks && (
    <div>
        <h2 className="text-2xl font-semibold mb-4">Feedbacks</h2>
        <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-800 text-white">
                <tr>
                    <th className="py-3 px-4 border border-gray-300">ID</th>
                    <th className="py-3 px-4 border border-gray-300">User  ID</th>
                    <th className="py-3 px-4 border border-gray-300">Feedback</th>
                    <th className="py-3 px-4 border border-gray-300">Category</th>
                    <th className="py-3 px-4 border border-gray-300">Priority</th>
                    <th className="py-3 px-4 border border-gray-300">Created At</th>
                </tr>
            </thead>
            <tbody>
                {feedbacks.map(feedback => (
                    <tr key={feedback.id} className="border-t border-gray-300">
                        <td className="py-2 px-4 border border-gray-300 text-center">{feedback.id}</td>
                        <td className="py-2 px-4 border border-gray-300 text-center">{feedback.user_id}</td>
                        <td className="py-2 px-4 border border-gray-300 text-center">{feedback.feedback}</td>
                        <td className="py-2 px-4 border border-gray-300 text-center">{feedback.category}</td>
                        <td className="py-2 px-4 border border-gray-300 text-center">{feedback.priority}</td>
                        <td className="py-2 px-4 border border-gray-300 text-center">{new Date(feedback.created_at).toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)}
        </div>
    );
}

export default AdminDashboard;
