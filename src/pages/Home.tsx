/** @format */

import { Link } from "react-router";

import HomeImg from "../assets/home-1.jpg";
import Footer from "../components/Footer";
import StaticGraph from "../components/Graph";
import Navbar from "../components/Navbar";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />

			{/* Hero Section */}
			<section className="flex-grow flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 pt-28 pb-16">
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
					{/* Text */}
					<div className="text-center md:text-left">
						<h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
							Lawan Disinformasi <br />
							dengan <span className="text-yellow-300">AI</span>
						</h1>
						<p className="text-lg md:text-xl mb-6">
							VeriTrust membantu mendeteksi akun terkoordinasi, analisis
							sentimen, dan memetakan jaringan buzzer secara real-time.
						</p>
						<div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-start">
							<Link
								to="/dashboard"
								className="bg-yellow-400 text-indigo-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-300 text-center"
							>
								Mulai Sekarang
							</Link>
							<Link
								to="/about"
								className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 text-center"
							>
								Pelajari Lebih Lanjut
							</Link>
						</div>
					</div>

					{/* Image */}
					<div className="flex justify-center">
						<StaticGraph />
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16 bg-white text-gray-800">
				<div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
					<div className="p-6 shadow rounded-lg">
						<h3 className="font-bold text-lg mb-2">Deteksi Jaringan</h3>
						<p>
							Identifikasi pola buzzer dan hubungan antar akun dengan analisis
							jaringan.
						</p>
					</div>
					<div className="p-6 shadow rounded-lg">
						<h3 className="font-bold text-lg mb-2">Analisis Sentimen</h3>
						<p>Pahami emosi di balik percakapan publik dengan NLP cerdas.</p>
					</div>
					<div className="p-6 shadow rounded-lg">
						<h3 className="font-bold text-lg mb-2">Visualisasi Real-Time</h3>
						<p>
							Eksplorasi data dengan dashboard interaktif untuk decision making
							cepat.
						</p>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
					<div>
						<h2 className="text-3xl font-bold text-indigo-700 mb-4">
							Mengapa VeriTrust?
						</h2>
						<p className="text-gray-700 mb-4">
							Media sosial kini dipenuhi operasi disinformasi terorganisir.
							VeriTrust hadir sebagai solusi AI yang mampu mendeteksi jaringan
							buzzer, menganalisis sentimen, dan memetakan narasi berbahaya
							secara real-time.
						</p>
						<p className="text-gray-700">
							Dengan pendekatan hybrid AI (Network Analysis + NLP + Machine
							Learning), VeriTrust memberikan lapisan pertahanan baru terhadap
							manipulasi informasi.
						</p>
					</div>
					<img
						src={HomeImg}
						alt="Ilustrasi VeriTrust"
						className="rounded-lg shadow h-128"
					/>
				</div>
			</section>

			{/* How It Works Section */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<h2 className="text-3xl font-bold text-indigo-700 mb-10">
						Cara Kerja
					</h2>
					<div className="grid gap-8 md:grid-cols-3">
						<div className="p-6 shadow rounded-lg">
							<h3 className="font-bold text-lg mb-2">1. Input Data</h3>
							<p>Masukkan akun atau hashtag yang ingin dianalisis.</p>
						</div>
						<div className="p-6 shadow rounded-lg">
							<h3 className="font-bold text-lg mb-2">2. Analisis AI</h3>
							<p>
								Sistem menjalankan analisis jaringan & NLP untuk mendeteksi pola
								buzzer.
							</p>
						</div>
						<div className="p-6 shadow rounded-lg">
							<h3 className="font-bold text-lg mb-2">3. Hasil Visual</h3>
							<p>
								Lihat skor risiko, tren narasi, dan peta jaringan interaktif.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* New: Use Cases Section */}
			<section className="py-16 bg-gray-50">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<h2 className="text-3xl font-bold text-indigo-700 mb-10">
						Untuk Siapa VeriTrust?
					</h2>
					<div className="grid gap-8 md:grid-cols-3">
						<div className="p-6 shadow rounded-lg">
							<h3 className="font-bold text-lg mb-2">Jurnalis</h3>
							<p>
								Membantu memverifikasi narasi dan menghindari penyebaran berita
								palsu.
							</p>
						</div>
						<div className="p-6 shadow rounded-lg">
							<h3 className="font-bold text-lg mb-2">Peneliti</h3>
							<p>
								Menyediakan data dan analisis untuk riset terkait buzzer &
								disinformasi.
							</p>
						</div>
						<div className="p-6 shadow rounded-lg">
							<h3 className="font-bold text-lg mb-2">Institusi</h3>
							<p>
								Melindungi citra organisasi dari serangan informasi
								terkoordinasi.
							</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
