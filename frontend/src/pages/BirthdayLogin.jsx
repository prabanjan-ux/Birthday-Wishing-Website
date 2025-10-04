import React, { useState } from "react";

export default function BirthdayLogin({ onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "Praba"; // password to unlock

  const handleLogin = (e) => {
    e.preventDefault();
    // Case-insensitive & trim spaces
    if (password.toLowerCase().trim() === correctPassword.toLowerCase()) {
      onSuccess(); // unlock App
    } else {
      setError("Oops! Try again my love ❤️");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-white/80 backdrop-blur-lg">
        <h1 className="text-2xl font-bold text-center text-pink-600 mb-6">
          Welcome My Girl 💕
        </h1>
        <p className="text-center text-gray-600 mb-4">
          Answer this to enter your surprise 🌸
        </p>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <label className="text-gray-700 font-medium">
            What’s your favorite dish? 🍽️
          </label>
          <input
            type="password"
            placeholder="Type here..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="mt-2 bg-pink-500 text-white py-2 rounded-xl font-semibold hover:bg-pink-600 transition"
          >
            Unlock 💝
          </button>
        </form>
      </div>
    </div>
  );
}
