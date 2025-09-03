/** @format */

import { useState } from "react";

import { useNavigate } from "react-router";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Input() {
	const [query, setQuery] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Simpan ke localStorage / dummy state (biar result bisa baca)
		localStorage.setItem("lastQuery", query);
		navigate("/processing");
	};

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-grow pt-20 px-6 bg-gray-50">
				<div className="max-w-xl mx-auto bg-white p-6 shadow rounded-lg">
					<h1 className="text-2xl font-bold text-indigo-700 mb-4">
						Input Data Analisis
					</h1>
					<form onSubmit={handleSubmit} className="space-y-4">
						<input
							type="text"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							placeholder="Masukkan akun atau hashtag..."
							className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
						/>
						<button
							type="submit"
							className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500"
						>
							Jalankan Analisis
						</button>
					</form>
				</div>
			</main>
			<Footer />
		</div>
	);
}
