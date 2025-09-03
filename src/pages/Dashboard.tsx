/** @format */

import { Link } from "react-router";

import Footer from "../components/Footer";
/** @format */
import Navbar from "../components/Navbar";

export default function Dashboard() {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />

			<main className="flex-grow bg-gray-50 pt-20 px-6">
				<div className="max-w-7xl mx-auto">
					<h1 className="text-3xl font-bold text-indigo-700 mb-6">
						Dashboard VeriTrust
					</h1>

					{/* Quick actions */}
					<div className="grid gap-6 md:grid-cols-3">
						<div className="p-6 bg-white shadow rounded-lg">
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

						<div className="p-6 bg-white shadow rounded-lg">
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

						<div className="p-6 bg-white shadow rounded-lg">
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
				</div>
			</main>

			<Footer />
		</div>
	);
}
