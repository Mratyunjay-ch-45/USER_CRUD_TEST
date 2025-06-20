import React, { useEffect, useState } from "react";

const GetUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const email = localStorage.getItem("userEmail");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`http://localhost:8000/api/auth/getuser?email=${email}`);
                const data = await res.json();

                if (res.ok) {
                    setUser(data.user);
                } else {
                    setError(data.message || "Failed to get user");
                }
            } catch (err) {
                setError("Something went wrong while fetching user");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (loading) return <div className="p-4 text-center">Loading...</div>;
    if (error) return <div className="p-4 text-red-500 text-center">{error}</div>;

    return (
        <div className="bg-blue-100 w-full h-screen flex justify-center items-center">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">User Profile</h2>
                <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-700">
                    <p className="font-medium text-start">First Name:</p>
                    <p className="text-left">{user.fname}</p>

                    <p className="font-medium text-start">Last Name:</p>
                    <p className="text-left">{user.lname}</p>

                    <p className="font-medium text-start">Email:</p>
                    <p className="text-left">{user.email}</p>

                    <p className="font-medium text-start">Date of Birth:</p>
                    <p className="text-left">{new Date(user.dob).toLocaleDateString()}</p>

                    <p className="font-medium text-start">Gender:</p>
                    <p className="text-left capitalize">{user.gender}</p>
                </div>
            </div>
        </div>
    );
};

export default GetUser;
