/** @format */

import { Link } from "react-router";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NetworkGraph from "../components/NetworkGraph";

export default function Result() {
	const reports = JSON.parse(localStorage.getItem("reports") || "[]");
	const latest = reports[reports.length - 1];

	if (!latest) {
		return <div>Belum ada hasil analisis.</div>;
	}

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-grow bg-gray-50 pt-20 px-6">
				<div className="max-w-6xl mx-auto space-y-8">
					<h1 className="text-3xl font-bold text-indigo-700">Hasil Analisis</h1>

					{/* Skor Risiko */}
					<div className="bg-white p-6 rounded-lg shadow">
						<h2 className="text-xl font-semibold mb-4">Ringkasan</h2>
						<p className="mb-2">
							Query:{" "}
							<span className="font-bold text-indigo-600">{latest.query}</span>
						</p>

						<div className="mb-4">
							<p className="font-semibold">Skor Risiko:</p>
							<div className="w-full bg-gray-200 rounded-full h-4 mt-1">
								<div
									className={`h-4 rounded-full ${
										latest.score > 70
											? "bg-red-500"
											: latest.score > 50
											? "bg-yellow-500"
											: "bg-green-500"
									}`}
									style={{ width: `${latest.score}%` }}
								/>
							</div>
							<span className="font-bold">
								{latest.score}%{" "}
								{latest.score > 70
									? "(Tinggi)"
									: latest.score > 50
									? "(Sedang)"
									: "(Rendah)"}
							</span>
						</div>

						<p className="mb-2">
							Kategori Narasi:{" "}
							<span className="font-bold text-purple-600">
								{latest.category}
							</span>
						</p>
						<p className="text-sm text-gray-600">
							Tanggal analisis: {latest.date}
						</p>
					</div>

					{/* Narasi Teridentifikasi */}
					<div className="bg-white p-6 rounded-lg shadow">
						<h2 className="text-xl font-semibold mb-4">
							Narasi yang Teridentifikasi
						</h2>
						<ul className="space-y-2">
							{latest.narratives.map((n: any, i: any) => (
								<li
									key={i}
									className="flex justify-between border-b pb-2 text-gray-700"
								>
									<span>{n.text}</span>
									<span className="font-semibold text-red-500">
										🔥 {n.count} akun
									</span>
								</li>
							))}
						</ul>
					</div>

					{/* Akun Kunci */}
					<div className="bg-white p-6 rounded-lg shadow">
						<h2 className="text-xl font-semibold mb-4">Akun Kunci</h2>
						<div className="grid md:grid-cols-3 gap-4">
							{latest.ringleaders.map((r: any, i: any) => (
								<div key={i} className="p-3 border rounded bg-gray-50">
									<p className="font-bold text-indigo-700">{r.user}</p>
									<p className="text-sm text-gray-600">{r.note}</p>
								</div>
							))}
						</div>
					</div>

					{/* Graph Placeholder */}
					<div className="bg-white p-6 rounded-lg shadow">
						<h2 className="text-xl font-semibold mb-4">Visualisasi Jaringan</h2>
						<NetworkGraph />
					</div>

					{/* Actions */}
					<div className="flex gap-4">
						<Link
							to="/report"
							className="px-6 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-500"
						>
							📑 Lihat Semua Report
						</Link>
						<Link
							to="/action"
							className="px-6 py-3 bg-red-600 text-white rounded hover:bg-red-500"
						>
							🚫 Block / Report
						</Link>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
