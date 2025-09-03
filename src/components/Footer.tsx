/** @format */

import { Link } from "react-router";

export default function Footer() {
	return (
		<footer className="w-full bg-gray-900 text-gray-300 mt-10">
			<div className="max-w-7xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-4">
				{/* Brand */}
				<div>
					<h2 className="text-2xl font-bold text-white mb-4">VeriTrust</h2>
					<p className="text-sm leading-relaxed">
						Platform AI untuk melawan disinformasi terorganisir dengan analisis
						jaringan, NLP, dan visualisasi real-time.
					</p>
				</div>

				{/* Navigation */}
				<div>
					<h3 className="font-semibold text-white mb-3">Navigasi</h3>
					<ul className="space-y-2 text-sm">
						<li>
							<Link to="/" className="hover:text-yellow-400">
								Home
							</Link>
						</li>
						<li>
							<Link to="/dashboard" className="hover:text-yellow-400">
								Dashboard
							</Link>
						</li>
						<li>
							<Link to="/about" className="hover:text-yellow-400">
								About
							</Link>
						</li>
					</ul>
				</div>

				{/* Legal */}
				<div>
					<h3 className="font-semibold text-white mb-3">Legal</h3>
					<ul className="space-y-2 text-sm">
						<li>
							<a href="#" className="hover:text-yellow-400">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-yellow-400">
								Terms of Service
							</a>
						</li>
					</ul>
				</div>

				{/* Contact / Socials */}
				<div>
					<h3 className="font-semibold text-white mb-3">Contact</h3>
					<ul className="space-y-2 text-sm">
						<li>Email: support@veritrust.ai</li>
						<li>Phone: +62 812-3456-7890</li>
					</ul>
					<div className="flex space-x-4 mt-4">
						<a href="#" aria-label="Twitter" className="hover:text-yellow-400">
							🐦
						</a>
						<a href="#" aria-label="LinkedIn" className="hover:text-yellow-400">
							💼
						</a>
						<a href="#" aria-label="GitHub" className="hover:text-yellow-400">
							💻
						</a>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="border-t border-gray-700 text-center py-4 text-sm">
				© {new Date().getFullYear()} VeriTrust. All rights reserved.
			</div>
		</footer>
	);
}
