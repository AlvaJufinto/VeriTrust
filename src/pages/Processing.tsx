/** @format */

import { useEffect } from "react";

import { useNavigate } from "react-router";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Processing() {
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => {
			const query = localStorage.getItem("lastQuery") || "#Dummy";

			// Dummy kategori
			const categories = [
				"Propaganda Politik",
				"Manipulasi Isu Keamanan",
				"Disinformasi Ekonomi",
				"Narasi Organik",
			];

			const result = {
				query,
				score: Math.floor(Math.random() * 60) + 40, // 40–100
				category: categories[Math.floor(Math.random() * categories.length)],
				narratives: [
					{ text: "TNI lemah menghadapi ancaman luar negeri", count: 120 },
					{ text: "Narasi kebencian terhadap institusi X", count: 85 },
					{ text: "Promosi hashtag #ABC123", count: 60 },
				],
				ringleaders: [
					{ user: "@buzz123", note: "30x posting dalam 1 jam" },
					{ user: "@anon456", note: "Follower growth anomali" },
					{ user: "@spam789", note: "Retweet sinkron dengan 20 akun" },
				],
				date: new Date().toLocaleDateString("id-ID"),
			};

			const reports = JSON.parse(localStorage.getItem("reports") || "[]");
			reports.push(result);
			localStorage.setItem("reports", JSON.stringify(reports));

			navigate("/result");
		}, 3000);

		return () => clearTimeout(timer);
	}, [navigate]);

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-grow flex items-center justify-center bg-gray-100 pt-20">
				<div className="text-center">
					<div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-600 border-t-transparent mx-auto mb-4"></div>
					<p className="text-lg font-medium text-gray-700">
						Sedang menganalisis data...
					</p>
				</div>
			</main>
			<Footer />
		</div>
	);
}
