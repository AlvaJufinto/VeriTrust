/** @format */

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Report() {
	const reports = JSON.parse(localStorage.getItem("reports") || "[]");

	const handleClear = () => {
		localStorage.removeItem("reports");
		window.location.reload();
	};

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-grow bg-gray-50 pt-20 px-6">
				<div className="max-w-6xl mx-auto space-y-8">
					{/* Header */}
					<div className="flex flex-col md:flex-row justify-between md:items-center">
						<h1 className="text-3xl font-bold text-indigo-700">
							Report Tersimpan
						</h1>
						{reports.length > 0 && (
							<div className="flex gap-3 mt-4 md:mt-0">
								<button
									onClick={handleClear}
									className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
								>
									🗑️ Hapus Semua
								</button>
								<button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500">
									⬇️ Export PDF (Dummy)
								</button>
							</div>
						)}
					</div>

					{/* Empty State */}
					{reports.length === 0 ? (
						<div className="bg-white shadow rounded-lg p-10 text-center">
							<img
								src="https://dummyimage.com/300x200/eee/aaa.png&text=No+Data"
								alt="empty"
								className="mx-auto mb-4"
							/>
							<p className="text-gray-700 mb-2">Belum ada report tersimpan.</p>
							<p className="text-sm text-gray-500">
								Jalankan analisis untuk menyimpan report pertama kamu.
							</p>
						</div>
					) : (
						<>
							{/* Grid Cards */}
							<div className="grid md:grid-cols-2 gap-6">
								{reports.map((r, idx) => (
									<div
										key={idx}
										className="bg-white rounded-lg shadow p-6 flex flex-col justify-between"
									>
										<div>
											<h2 className="text-lg font-bold text-indigo-700 mb-2">
												{r.query}
											</h2>
											{/* Skor Risiko */}
											<div className="mb-3">
												<p className="font-semibold text-sm">Skor Risiko</p>
												<div className="w-full bg-gray-200 rounded-full h-3 mt-1">
													<div
														className={`h-3 rounded-full ${
															r.score > 70
																? "bg-red-500"
																: r.score > 50
																? "bg-yellow-500"
																: "bg-green-500"
														}`}
														style={{ width: `${r.score}%` }}
													/>
												</div>
												<span className="text-sm font-bold">{r.score}%</span>
											</div>
											{/* Kategori */}
											<p className="mb-1">
												Kategori:{" "}
												<span
													className={`px-2 py-1 text-xs rounded font-semibold ${
														r.category === "Propaganda Politik"
															? "bg-purple-100 text-purple-700"
															: r.category === "Manipulasi Isu Keamanan"
															? "bg-red-100 text-red-700"
															: r.category === "Disinformasi Ekonomi"
															? "bg-yellow-100 text-yellow-700"
															: "bg-green-100 text-green-700"
													}`}
												>
													{r.category}
												</span>
											</p>
											<p className="text-xs text-gray-500">Tanggal: {r.date}</p>
										</div>
										<div className="mt-4">
											<button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-500">
												📑 Detail
											</button>
										</div>
									</div>
								))}
							</div>

							{/* Tabel Ringkasan */}
							<div className="bg-white shadow rounded-lg overflow-x-auto">
								<table className="w-full border-collapse">
									<thead className="bg-gray-100">
										<tr>
											<th className="border px-4 py-2">Query</th>
											<th className="border px-4 py-2">Skor</th>
											<th className="border px-4 py-2">Kategori</th>
											<th className="border px-4 py-2">Tanggal</th>
										</tr>
									</thead>
									<tbody>
										{reports.map((r, idx) => (
											<tr key={idx} className="text-center">
												<td className="border px-4 py-2">{r.query}</td>
												<td className="border px-4 py-2">{r.score}%</td>
												<td className="border px-4 py-2">{r.category}</td>
												<td className="border px-4 py-2">{r.date}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</>
					)}
				</div>
			</main>
			<Footer />
		</div>
	);
}
