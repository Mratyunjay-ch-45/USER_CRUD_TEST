import React, { useState } from "react";

const Signup = () => {
    const [form, setForm] = useState({
        fname: "",
        lname: "",
        dob: "",
        email: "",
        password: "",
        gender: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            const data = await res.json();
            if (res.ok) {
                setMessage("✅ Signup successful!");
                console.log(data);
            } else {
                setMessage(`❌ ${data.message}`);
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("❌ An error occurred during signup.");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen w-full">
            <div className="w-full h-full bg-blue-100 flex justify-center items-center">
                <div className="flex h-full w-full bg-blue-200 justify-center items-center">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col p-10 h-[80vh] w-[80vh] bg-white rounded-2xl"
                    >
                        <h1 className="text-2xl font-semibold mb-6 text-start">Sign Up</h1>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                            <div>
                                <label htmlFor="fname" className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    id="fname"
                                    name="fname"
                                    type="text"
                                    value={form.fname}
                                    onChange={handleChange}
                                    placeholder="Enter your first name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                                />

                                <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mt-4">Date of Birth</label>
                                <input
                                    id="dob"
                                    name="dob"
                                    type="date"
                                    value={form.dob}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                                />

                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mt-4">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder="Set your password"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                                />

                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mt-4">Gender</label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={form.gender}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="lname" className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    id="lname"
                                    name="lname"
                                    type="text"
                                    value={form.lname}
                                    onChange={handleChange}
                                    placeholder="Enter your last name"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                                />

                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="p-2 w-40 h-10 bg-blue-100 items-center justify-center mt-10 rounded-2xl"
                        >
                            Submit
                        </button>

                        {message && <p className="mt-4 text-sm text-center text-red-500">{message}</p>}
                    </form>
                </div>
            </div>

            <div className="flex bg-blue-100 w-full h-full justify-center items-center">
                <div className="flex flex-col bg-white h-[80vh] w-[80vh] rounded-2xl justify-center p-2">
                    <h1 className="text-4xl mb-5 ml-5">Welcome to our website</h1>
                    <h2 className="text-sm text-gray-600 p-5">
                    Create your account to securely manage your personal profile, access exclusive features, and stay connected with our platform.
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Signup;
