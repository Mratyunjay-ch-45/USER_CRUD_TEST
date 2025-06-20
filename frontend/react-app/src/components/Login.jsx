import React, { useState } from "react";

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("http://localhost:8000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            const data = await res.json();

            if (res.ok) {
                setMessage("✅ Login successful");
                localStorage.setItem("userEmail", form.email);
                console.log(data);


                // Optional: Save token or redirect
                // localStorage.setItem("user", JSON.stringify(data));
                // navigate("/dashboard");
            } else {
                setMessage(`❌ ${data.message}`);
            }
        } catch (err) {
            console.error(err);
            setMessage("❌ Error connecting to server");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen w-full">
            {/* Left Section - Login Form */}
            <div className="w-1/2 h-full bg-blue-200 flex justify-center items-center">
                <div className="bg-white rounded-2xl p-10 w-[80%] h-[80vh] max-w-md shadow-md flex flex-col justify-center">
                    <h1 className="text-3xl font-bold mb-6 text-gray-800">Login</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={form.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-4 w-full bg-blue-200 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-2xl transition-colors"
                        >
                            Submit
                        </button>

                        {message && <p className="mt-4 text-sm text-center text-red-500">{message}</p>}
                    </form>
                </div>
            </div>

            {/* Right Section - Info */}
            <div className="w-1/2 h-full bg-blue-100 flex justify-center items-center">
                <div className="bg-white h-[80vh] w-[80vh] rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-md">
                    <h1 className="text-4xl font-bold mb-6">Welcome to our website</h1>
                    <p className="text-sm text-gray-600">
                    Log in to access your profile and manage your account with ease.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
