/** @format */

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Report() {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-grow bg-gray-50 pt-20 px-6">
				<div className="max-w-5xl mx-auto">
					<h1 className="text-3xl font-bold text-indigo-700 mb-6">
						Report Tersimpan
					</h1>
					<table className="w-full border-collapse bg-white shadow rounded-lg">
						<thead className="bg-gray-100">
							<tr>
								<th className="border px-4 py-2">Query</th>
								<th className="border px-4 py-2">Skor Risiko</th>
								<th className="border px-4 py-2">Sentimen</th>
								<th className="border px-4 py-2">Tanggal</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="border px-4 py-2">#Dummy</td>
								<td className="border px-4 py-2 text-red-500 font-bold">82%</td>
								<td className="border px-4 py-2 text-green-600">Positif</td>
								<td className="border px-4 py-2">03/09/2025</td>
							</tr>
						</tbody>
					</table>
				</div>
			</main>
			<Footer />
		</div>
	);
}
