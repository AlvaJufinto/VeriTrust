/** @format */

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";

import Action from "./pages/Action";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Input from "./pages/Input";
import Processing from "./pages/Processing";
import Report from "./pages/Report";
import Result from "./pages/Result";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/input" element={<Input />} />
				<Route path="/processing" element={<Processing />} />
				<Route path="/result" element={<Result />} />
				<Route path="/report" element={<Report />} />
				<Route path="/action" element={<Action />} />
				<Route path="*" element={<div>404 Not Found</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
