/** @format */

import { Link } from "react-router";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Result() {
	const query = localStorage.getItem("lastQuery") || "Hashtag Dummy";

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-grow bg-gray-50 pt-20 px-6">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-3xl font-bold text-indigo-700 mb-6">
						Hasil Analisis
					</h1>
					<div className="bg-white p-6 rounded-lg shadow mb-6">
						<h2 className="text-xl font-semibold mb-2">
							Query: <span className="text-indigo-600">{query}</span>
						</h2>
						<p className="mb-4">
							Skor Risiko: <span className="font-bold text-red-500">82%</span>
						</p>
						<p>
							Sentimen:{" "}
							<span className="font-bold text-green-600">Positif</span>
						</p>
					</div>

					<div className="flex gap-4">
						<Link
							to="/report"
							className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-500"
						>
							Simpan ke Report
						</Link>
						<Link
							to="/action"
							className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-500"
						>
							Block / Report
						</Link>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
