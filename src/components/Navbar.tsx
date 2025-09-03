/** @format */

import { Link } from "react-router";

export default function Navbar() {
	return (
		<nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
			<div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
				{/* Logo */}
				<Link to="/" className="text-xl font-bold text-indigo-600">
					VeriTrust
				</Link>

				{/* Menu Desktop */}
				<div className="hidden md:flex space-x-6">
					<Link to="/" className="text-gray-700 hover:text-indigo-600">
						Home
					</Link>
					<Link to="/dashboard" className="text-gray-700 hover:text-indigo-600">
						Dashboard
					</Link>
					<Link to="/about" className="text-gray-700 hover:text-indigo-600">
						About
					</Link>
				</div>

				{/* Mobile Button */}
				<button className="md:hidden p-2 rounded-md bg-indigo-600 text-white">
					☰
				</button>
			</div>
		</nav>
	);
}
