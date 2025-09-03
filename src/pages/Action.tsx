/** @format */

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Action() {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-grow bg-gray-50 pt-20 px-6">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-3xl font-bold text-red-600 mb-4">
						Aksi Sosial Media
					</h1>
					<p className="mb-6">
						Lakukan block atau report akun mencurigakan langsung di platform
						sosial media.
					</p>
					<div className="flex justify-center gap-4">
						<a
							href="#"
							className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-400"
						>
							🔗 Buka Twitter
						</a>
						<a
							href="#"
							className="px-6 py-3 bg-pink-500 text-white rounded hover:bg-pink-400"
						>
							🔗 Buka Instagram
						</a>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
