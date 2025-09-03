/** @format */
import { Link } from "react-router";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Dashboard() {
	const reports = JSON.parse(localStorage.getItem("reports") || "[]");
	const lastReport = reports[reports.length - 1];

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />

			<main className="flex-grow bg-gray-50 pt-20 px-6">
				<div className="max-w-7xl mx-auto space-y-10">
					{/* Header */}
					<h1 className="text-3xl font-bold text-indigo-700">
						Dashboard VeriTrust
					</h1>

					{/* Stats Overview */}
					<div className="grid md:grid-cols-3 gap-6">
						<div className="p-6 bg-white shadow rounded-lg text-center">
							<p className="text-gray-500 text-sm">Total Report</p>
							<p className="text-3xl font-bold text-indigo-700">
								{reports.length}
							</p>
						</div>
						<div className="p-6 bg-white shadow rounded-lg text-center">
							<p className="text-gray-500 text-sm">Query Terakhir</p>
							<p className="text-lg font-semibold text-gray-800">
								{lastReport ? lastReport.query : "-"}
							</p>
						</div>
						<div className="p-6 bg-white shadow rounded-lg text-center">
							<p className="text-gray-500 text-sm">Skor Risiko Terakhir</p>
							<p
								className={`text-2xl font-bold ${
									lastReport
										? lastReport.score > 70
											? "text-red-600"
											: lastReport.score > 50
											? "text-yellow-600"
											: "text-green-600"
										: "text-gray-400"
								}`}
							>
								{lastReport ? `${lastReport.score}%` : "-"}
							</p>
						</div>
					</div>

					{/* Quick Actions */}
					<div className="grid gap-6 md:grid-cols-3">
						<div className="p-6 bg-indigo-50 border border-indigo-200 rounded-lg shadow hover:shadow-md transition">
							<h2 className="font-bold text-lg mb-2">Analisis Baru</h2>
							<p className="text-sm text-gray-600 mb-4">
								Mulai analisis hashtag atau akun media sosial.
							</p>
							<Link
								to="/input"
								className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
							>
								+ Input Data
							</Link>
						</div>

						<div className="p-6 bg-gray-100 border border-gray-300 rounded-lg shadow hover:shadow-md transition">
							<h2 className="font-bold text-lg mb-2">Report Tersimpan</h2>
							<p className="text-sm text-gray-600 mb-4">
								Lihat hasil analisis sebelumnya yang sudah disimpan.
							</p>
							<Link
								to="/report"
								className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
							>
								📑 Lihat Report
							</Link>
						</div>

						<div className="p-6 bg-red-50 border border-red-200 rounded-lg shadow hover:shadow-md transition">
							<h2 className="font-bold text-lg mb-2">Aksi Sosial Media</h2>
							<p className="text-sm text-gray-600 mb-4">
								Lakukan tindakan block/report ke akun mencurigakan.
							</p>
							<Link
								to="/action"
								className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
							>
								🚫 Go to Action
							</Link>
						</div>
					</div>

					{/* Recent Reports */}
					<div className="bg-white shadow rounded-lg p-6">
						<h2 className="text-xl font-bold text-indigo-700 mb-4">
							Recent Reports
						</h2>
						{reports.length === 0 ? (
							<p className="text-gray-600">Belum ada report tersimpan.</p>
						) : (
							<ul className="divide-y">
								{reports
									.slice(-3)
									.reverse()
									.map((r, idx) => (
										<li key={idx} className="py-3 flex justify-between">
											<div>
												<p className="font-semibold text-gray-800">{r.query}</p>
												<p className="text-sm text-gray-500">{r.date}</p>
											</div>
											<span
												className={`font-bold ${
													r.score > 70
														? "text-red-600"
														: r.score > 50
														? "text-yellow-600"
														: "text-green-600"
												}`}
											>
												{r.score}%
											</span>
										</li>
									))}
							</ul>
						)}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
