document.addEventListener('DOMContentLoaded', LoadInitialElements())

function LoadInitialElements() {
	let scale_factor = 2.5;
	const portals = [
		["Web-Development", [116,0]], ["Encryption", [42,65]], ["Distributed-Systems", [116,84]], ["Multi-Processing", [190,66]],
		["Human-Computer", [0,167]], ["Computer-Networks", [116,175]], ["Operating-Systems", [190,160]], ["Input-Output", [116,265]],
		["Imperative", [259,16]], ["Declarative", [319,16]], ["Functional", [379,16]], ["Object-Oriented", [439,16]],
		["Compilation", [356,142]], ["Markov-Process", [418,244]], ["Linear-Regression", [338,368]], ["Computer-Architecture", [148,360]],
		["Automata-Theory", [239,376]], ["Logic-Gates", [239,460]], ["Digital-Logic", [239,537]],
		["Memory", [399,659]], ["Limbic-Resonance", [98,537]],
		["Backpropagation", [437,368]], ["Tensors", [502,368]], ["Neat-Algorithm", [567,368]], 
		["Perceptrons", [518,481]], ["KR2", [369,510]], ["Project-Evolution", [429,510]]
	];
	const portal_edges = [["Web-Development", ["Distributed-Systems"]], ["Distributed-Systems", ["Computer-Networks"]],
		["Encryption", ["Computer-Networks"]], ["Computer-Networks", ["Input-Output"]], ["Multi-Processing", ["Operating-Systems"]],
		["Operating-Systems", ["Input-Output", "Computer-Architecture"]], ["Human-Computer", ["Input-Output", "Limbic-Resonance"]], 
		["Computer-Architecture", ["Logic-Gates"]], ["Imperative", ["Compilation"]], ["Declarative", ["Compilation"]],
		["Functional", ["Compilation"]], ["Object-Oriented", ["Compilation"]], ["Imperative", ["Compilation"]],
		["Compilation", ["Computer-Architecture", "Automata-Theory"]], ["Input-Output", ["Computer-Architecture"]], 
		["Markov-Process", ["Automata-Theory"]], ["Automata-Theory", ["Logic-Gates"]], ["Logic-Gates", ["Digital-Logic"]],
		["Limbic-Resonance", ["Memory"]], 
		["Linear-Regression", ["KR2"]], ["Backpropagation", ["Perceptrons"]], ["Tensors", ["Perceptrons"]], 
		["Neat-Algorithm", ["Perceptrons"]], ["KR2", ["Memory"]], ["Project-Evolution", ["Memory"]], ["Perceptrons", ["Memory"]]
	]
	LoadPortals(portals, scale_factor)
	LoadPortalEdges(portal_edges, scale_factor)
	SetInitialView()
};

function LoadPortals(portals, scale_factor) {
	// create portal
	for (const portal of portals) {
		// portal is an <img> with a portal description <p>
		var img = document.createElement('img');
		img.setAttribute('src', '/Assets/images/portals/' + portal[0] + '.png');
		var p = document.createElement('b');
		p.classList.add('portal-description');
		p.innerText = portal[0]
		// within a div
		var div = document.createElement('div');
		div.classList.add('home-portal');
		div.id = portal[0];
		div.style.left = portal[1][0] * scale_factor;
		div.style.top = portal[1][1] * scale_factor;
		// within a link
		var link = document.createElement('a');
		link.setAttribute('href', '/documents/' + portal[0] + '.html');
		// nest, then add to DOM
		div.append(img);
		div.append(p);
		link.append(div);
		document.getElementById('portal_frame').append(link);
	}
};


function LoadPortalEdges(portal_edges, scale_factor) {
	var svg = document.getElementById("portal_edges");
	portal_edges.forEach(function(element) {
		let source = element[0];
		let destinations = element[1];
		let source_rect = document.getElementById(source).getBoundingClientRect();
		for (const destination of destinations) {
			let dest_rect = document.getElementById(destination).getBoundingClientRect();
			AddPath(svg, source_rect.x + Math.floor(source_rect.width / 2), source_rect.y + source_rect.height,
			dest_rect.x + Math.floor(dest_rect.width / 2), dest_rect.y);
		}			
	});
	// draw root of tree
	let root_coord = [scale_factor*354, scale_factor*787]
	let root = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	root.setAttribute("stroke", "#FFFFFF");
	root.setAttribute("fill", "none");
	root.setAttribute("stroke-width", "1");
	root.setAttribute("cx", root_coord[0]);
	root.setAttribute("cy", root_coord[1]);
	root.setAttribute("r", "7");
	svg.append(root);
	let root_rect = root.getBoundingClientRect();
	let root_child1 = document.getElementById("Digital-Logic").getBoundingClientRect();
	let root_child2 = document.getElementById("Memory").getBoundingClientRect();
	for (let root_child of [root_child1, root_child2]) {
		AddPath(svg, root_child.x + Math.floor(root_child.width / 2), root_child.y + root_child.height,
		root_coord[0], root_coord[1] - root_rect.width);
	}
};

function AddPath(svg, from_x, from_y, to_x, to_y) {
	// create path
	let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute("stroke", "#FFFFFF");
	path.setAttribute("fill", "none");
	path.setAttribute("stroke-width", "1");
	control = Math.floor((to_y - from_y) / 2)
	path.setAttribute("d", `M${from_x},${from_y} C ${from_x} ${from_y + control}, ${to_x} ${to_y - control}, ${to_x} ${to_y}`);
	svg.append(path)
};

function SetInitialView() {
	_dragElement = document.getElementById('portal_frame');
	_dragElement.style.top = '100px';
	_dragElement.style.left = '150px';
}