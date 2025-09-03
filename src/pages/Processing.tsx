/** @format */

import { useEffect } from "react";

import { useNavigate } from "react-router";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Processing() {
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => {
			navigate("/result");
		}, 3000); // 3 detik dummy loading
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
