/** @format */

export default function StaticGraph() {
	return (
		<div className="h-72 bg-gray-100 flex items-center justify-center rounded shadow">
			<svg viewBox="0 0 300 300" className="w-full h-full">
				{/* Links */}
				<line
					x1="150"
					y1="50"
					x2="80"
					y2="120"
					stroke="gray"
					strokeWidth="1.5"
				/>
				<line
					x1="150"
					y1="50"
					x2="220"
					y2="120"
					stroke="gray"
					strokeWidth="1.5"
				/>
				<line
					x1="80"
					y1="120"
					x2="50"
					y2="200"
					stroke="gray"
					strokeWidth="1.5"
				/>
				<line
					x1="220"
					y1="120"
					x2="250"
					y2="200"
					stroke="gray"
					strokeWidth="1.5"
				/>
				<line
					x1="80"
					y1="120"
					x2="150"
					y2="200"
					stroke="gray"
					strokeWidth="1.5"
				/>
				<line
					x1="220"
					y1="120"
					x2="150"
					y2="200"
					stroke="gray"
					strokeWidth="1.5"
				/>
				<line
					x1="50"
					y1="200"
					x2="100"
					y2="260"
					stroke="gray"
					strokeWidth="1.5"
				/>
				<line
					x1="250"
					y1="200"
					x2="200"
					y2="260"
					stroke="gray"
					strokeWidth="1.5"
				/>
				<line
					x1="150"
					y1="200"
					x2="100"
					y2="260"
					stroke="gray"
					strokeWidth="1.5"
				/>
				<line
					x1="150"
					y1="200"
					x2="200"
					y2="260"
					stroke="gray"
					strokeWidth="1.5"
				/>

				{/* Nodes */}
				<circle cx="150" cy="50" r="18" fill="#6366F1" />
				<circle cx="80" cy="120" r="14" fill="#F43F5E" />
				<circle cx="220" cy="120" r="14" fill="#10B981" />
				<circle cx="50" cy="200" r="12" fill="#F59E0B" />
				<circle cx="150" cy="200" r="16" fill="#3B82F6" />
				<circle cx="250" cy="200" r="12" fill="#8B5CF6" />
				<circle cx="100" cy="260" r="10" fill="#EC4899" />
				<circle cx="200" cy="260" r="10" fill="#14B8A6" />
			</svg>
		</div>
	);
}
