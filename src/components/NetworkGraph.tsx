/** @format */
import ForceGraph2D from "react-force-graph-2d";

export default function NetworkGraph({ data }: { data?: any }) {
	const dummyData = data || {
		nodes: [
			{ id: "buzz123", group: 1, size: 12 },
			{ id: "anon456", group: 1, size: 10 },
			{ id: "spam789", group: 2, size: 10 },
			{ id: "akunNormal1", group: 3, size: 6 },
			{ id: "akunNormal2", group: 3, size: 6 },
			{ id: "akunNormal3", group: 3, size: 6 },
		],
		links: [
			{ source: "buzz123", target: "anon456" },
			{ source: "buzz123", target: "spam789" },
			{ source: "anon456", target: "akunNormal1" },
			{ source: "spam789", target: "akunNormal2" },
			{ source: "buzz123", target: "akunNormal3" },
		],
	};

	return (
		<div className="relative h-96 w-full rounded bg-gray-100 shadow overflow-hidden">
			<ForceGraph2D
				graphData={dummyData}
				width={1200}
				height={350}
				nodeAutoColorBy="group"
				linkColor={() => "rgba(99,102,241,0.4)"} // indigo semi transparan
				linkDirectionalArrowLength={4}
				linkDirectionalArrowRelPos={1}
				nodeCanvasObject={(node: any, ctx, globalScale) => {
					const label = node.id;
					const fontSize = 12 / globalScale;
					ctx.font = `${fontSize}px Sans-Serif`;

					// node
					ctx.beginPath();
					ctx.arc(node.x, node.y, node.size || 8, 0, 2 * Math.PI, false);
					ctx.fillStyle = node.color || "#6366F1";
					ctx.fill();

					// label dengan background putih biar kebaca
					ctx.fillStyle = "white";
					ctx.fillRect(
						node.x + 10,
						node.y - 6,
						ctx.measureText(label).width + 6,
						fontSize + 4
					);

					ctx.fillStyle = "black";
					ctx.fillText(label, node.x + 12, node.y + fontSize / 2);
				}}
			/>
		</div>
	);
}
