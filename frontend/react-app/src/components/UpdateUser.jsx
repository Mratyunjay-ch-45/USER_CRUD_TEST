import React, { useEffect, useState } from "react";

const UpdateUser = () => {
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        dob: "",
        email: "",
        gender: ""
    });
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(true);

    const email = localStorage.getItem("userEmail") || "john@example.com"; // Use email from login or fallback

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`http://localhost:8000/api/auth/getuser?email=${email}`);
                const data = await res.json();
                if (res.ok) {
                    setUser(data.user);
                } else {
                    setMessage(data.message || "User not found");
                }
            } catch (err) {
                setMessage("Error fetching user");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [email]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:8000/api/auth/updateuser?email=${email}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            const data = await res.json();
            if (res.ok) {
                setMessage("✅ User updated successfully");
            } else {
                setMessage(`❌ ${data.message}`);
            }
        } catch (err) {
            setMessage("❌ Error updating user");
        }
    };

    if (loading) return <div className="p-4 text-center">Loading user...</div>;

    return (
        <>        
        <div className="bg-blue-100 w-full h-screen flex justify-center items-center">
        <div className="max-w-md h-[70vh] mx-auto p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center">Update Profile</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
                <input
                    name="fname"
                    value={user.fname}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full p-2 border rounded"
                />
                <input
                    name="lname"
                    value={user.lname}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full p-2 border rounded"
                />
                <input
                    name="dob"
                    type="date"
                    value={user.dob.slice(0, 10)} // remove time part
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                />
                <select
                    name="gender"
                    value={user.gender}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                <input
                    name="email"
                    type="email"
                    value={user.email}
                    readOnly
                    className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
                />
                <div className="flex gap-5">
                <button type="submit" className="mt-4 bg-blue-200 text-white p-2 rounded w-full">
                    Update
                </button>
                <button
    type="button"
    onClick={async () => {
        const confirmDelete = window.confirm("Are you sure you want to delete your account?");
        if (!confirmDelete) return;

        try {
            const res = await fetch(`http://localhost:8000/api/auth/deleteuser?email=${user.email}`, {
                method: "DELETE",
            });

            const data = await res.json();
            if (res.ok) {
                alert("✅ User deleted successfully");
                // Optionally: redirect to homepage or login
                // localStorage.removeItem("userEmail");
                // window.location.href = "/";
            } else {
                alert("❌ " + data.message);
            }
        } catch (err) {
            console.error(err);
            alert("❌ Error deleting user");
        }
    }}
    className="mt-4 bg-red-500 text-white p-2 rounded w-full"
>
    Delete My Account
</button>
</div>

            </form>
            {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
        </div>
        </div>
        </>

    );

};

export default UpdateUser;
