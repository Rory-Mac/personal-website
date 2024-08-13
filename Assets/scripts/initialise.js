document.addEventListener('DOMContentLoaded', LoadInitialElements())

function LoadInitialElements() {
	let scale_factor = 2.5;
	const portals = [
		["Web-Development", [82,0]], ["Object-Oriented", [252,0]], ["Functional", [326,0]], ["Encryption", [0,86]], ["Distributed-Systems", [82,86]],
		["Multi-Processing", [252,200]], ["Imperative", [252,86]], ["Declarative", [326, 86]], ["Project-Evolution", [450,86]],
		["Economics", [524, 86]], ["Human-Computer", [0,200]], ["Computer-Networks", [82,200]], ["Operating-Systems", [170,200]],
		["Compilation", [326,200]], ["Markov-Process", [450,200]], ["Game-Theory", [524,200]], ["Neat-Algorithm", [598,200]], 
		["Computer-Architecture", [170,359]], ["Automata-Theory", [252,359]], ["Perceptrons", [524,359]], ["Information-Theory", [82,465]],
		["Limbic-Resonance", [0,465]], ["Logic-Gates", [170,465]], ["Linear-Regression", [376,465]], ["Tensors", [450,465]], 
		["Propositional-Logic", [376,603]], ["Linear-Algebra", [450,603]], ["Calculus", [524,603]], ["Causality", [598,603]],
		["Physical-Science", [252,723]], ["Memory", [340, 723]], ["Ontology", [294,861]]
	];
	const portal_edges = [
		["Web-Development", ["Distributed-Systems"]], ["Object-Oriented", ["Imperative"]], ["Functional", ["Declarative"]],
		["Encryption", ["Computer-Networks"]], ["Distributed-Systems", ["Computer-Networks"]], ["Multi-Processing", ["Computer-Architecture"]],
		["Imperative", ["Compilation"]], ["Declarative", ["Compilation"]], ["Economics", ["Game-Theory"]], 
		["Human-Computer", ["Limbic-Resonance", "Computer-Architecture"]], ["Computer-Networks", ["Computer-Architecture", "Information-Theory"]], 
		["Operating-Systems", ["Computer-Architecture"]], ["Compilation", ["Computer-Architecture", "Automata-Theory"]],
		["Markov-Process", ["Automata-Theory"]], ["Game-Theory", ["Automata-Theory", "Perceptrons"]], ["Neat-Algorithm", ["Perceptrons"]],
		["Computer-Architecture", ["Logic-Gates"]], ["Automata-Theory", ["Propositional-Logic"]], ["Perceptrons", ["Calculus"]],
		["Limbic-Resonance", ["Memory"]], ["Project-Evolution", ["Game-Theory"]], ["Logic-Gates", ["Physical-Science", "Propositional-Logic"]],
		["Linear-Regression", ["Linear-Algebra"]], ["Tensors", ["Linear-Algebra"]], ["Propositional-Logic", ["Memory"]],
		["Linear-Algebra", ["Memory"]], ["Calculus", ["Memory"]], ["Causality", ["Memory"]], ["Physical-Science", ["Ontology"]],
		["Memory", ["Ontology"]], ["Information-Theory", ["Physical-Science"]],
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
	let root_coord = [(scale_factor*294)+68, scale_factor*950]
	let root = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	root.setAttribute("stroke", "#FFFFFF");
	root.setAttribute("fill", "none");
	root.setAttribute("stroke-width", "1");
	root.setAttribute("cx", root_coord[0]);
	root.setAttribute("cy", root_coord[1]);
	root.setAttribute("r", "7");
	svg.append(root);
	let root_rect = root.getBoundingClientRect();
	let root_child1 = document.getElementById("Ontology").getBoundingClientRect();
	for (let root_child of [root_child1]) {
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