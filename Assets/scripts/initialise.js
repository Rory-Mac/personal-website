document.addEventListener('DOMContentLoaded', LoadInitialElements())

function LoadInitialElements() {
	const portal_grid = [
		[[0,0,0,0,0,0,0,1,0], ["Org-Structs"]],
		[[1,2,3,4,0,0,5,6,7], ["Web-Development", "Distributed-Systems", "Object-Oriented", "Data-Structures", "Economics", "Neural-Networks", "Project-Evolution"]],
		[[0,1,0,0,2,0,3,0,4], ["Computer-Networks", "Computational-Complexity", "Probability-Theory", "Game-Theory"]],
		[[0,1,2,3,4,5,6,7,0], ["Operating-Systems", "Multi-Processing", "Compilation", "Calculus", "Geometry", "Topology", "Linear-Algebra"]],
		[[0,0,0,1,2,3,0,0,0], ["Computer-Architecture", "Graph-Theory", "Abstract-Algebra"]], 
		[[0,0,0,1,2,3,0,0,0], ["Digital-Circuits", "Set-Theory", "Category-Theory"]],  
		[[0,0,0,1,2,3,0,0,0], ["Electrostatics", "Formal-Logic", "Formal-Language", ]],
		[[0,0,1,2,0,0,0,0,0], ["Classical-Mechanics", "Wave-Mechanics"]],
		[[0,0,0,1,2,0,0,0,0], ["Perception", "Memory"]],
		[[0,0,0,0,1,0,0,0,0], ["Ontology"]]
	]

	const portal_edges = [
		["Org-Structs", "Project-Evolution"], ["Org-Structs", "Economics"],
		["Data-Structures", "Compilation"], ["Data-Structures", "Computational-Complexity"], ["Neural-Networks", "Linear-Algebra"], ["Neural-Networks", "Game-Theory"], ["Economics", "Probability-Theory"], ["Economics", "Game-Theory"], ["Project-Evolution", "Game-Theory"],
		["Web-Development", "Computer-Networks"], ["Distributed-Systems", "Computer-Networks"], ["Object-Oriented", "Compilation"], ["Computational-Complexity", "Calculus"], ["Probability-Theory", "Calculus"], ["Game-Theory", "Linear-Algebra"], 
		["Multi-Processing", "Computer-Architecture"], ["Operating-Systems", "Computer-Architecture"], ["Computer-Networks", "Operating-Systems"], ["Computer-Networks", "Multi-Processing"], ["Compilation", "Computer-Architecture"], 
		["Calculus", "Abstract-Algebra"], ["Linear-Algebra", "Abstract-Algebra"], ["Geometry", "Abstract-Algebra"], ["Topology", "Abstract-Algebra"], 
		["Computer-Architecture", "Digital-Circuits"], ["Graph-Theory", "Set-Theory"], ["Graph-Theory", "Category-Theory"], ["Abstract-Algebra", "Category-Theory"], ["Abstract-Algebra", "Set-Theory"], 
		["Digital-Circuits", "Electrostatics"], ["Digital-Circuits", "Formal-Logic"], ["Set-Theory", "Formal-Logic"], ["Category-Theory", "Formal-Logic"], ["Category-Theory", "Formal-Language"], 
		["Electrostatics", "Classical-Mechanics"], ["Electrostatics", "Wave-Mechanics"], ["Formal-Logic", "Memory"], ["Formal-Language", "Memory"],
		["Classical-Mechanics", "Perception"], ["Wave-Mechanics", "Perception"],
		["Perception", "Ontology"], ["Memory", "Ontology"]
	]

	LoadPortals(portal_grid)
	LoadPortalEdges(portal_edges)
	SetInitialView()
};

function create_portal(portal_name, top, left) {
	// portal is an <img> with a portal description <p>
	var img = document.createElement('img');
	img.setAttribute('src', '/Assets/images/portals/' + portal_name + '.png');
	var p = document.createElement('b');
	p.classList.add('portal-description');
	p.innerText = portal_name
	// within a div
	var div = document.createElement('div');
	div.classList.add('home-portal');
	div.id = portal_name;
	div.style.top = top;
	div.style.left = left;
	// within a link
	var link = document.createElement('a');
	link.setAttribute('href', '/documents/' + portal_name + '.html');
	// nest, then add to DOM
	div.append(img);
	div.append(p);
	link.append(div);
	document.getElementById('portal_frame').append(link);
}

function LoadPortals(portal_grid) {
	vt_gap_size = 75;
	hz_gap_size = 0;
	portal_size = 150;
	for (let i = 0; i < portal_grid.length; i++) {
		for (let j = 0; j < portal_grid[i][0].length; j++) {
			if (portal_grid[i][0][j] != 0) {
				portal_index = portal_grid[i][0][j] - 1
				portal_name = portal_grid[i][1][portal_index]
				create_portal(portal_name, i * (portal_size + vt_gap_size), j * (portal_size + hz_gap_size));
			}
		}
	}
};

function LoadPortalEdges(portal_edges) {
	var svg = document.getElementById("portal_edges");
	portal_edges.forEach((pair, _) => {
		let [s_id, d_id] = pair;
		let s_rect = document.getElementById(s_id).getBoundingClientRect();
		let d_rect = document.getElementById(d_id).getBoundingClientRect();
		AddPath(svg, s_rect.x + Math.floor(s_rect.width / 2), s_rect.y + s_rect.height,
			d_rect.x + Math.floor(d_rect.width / 2), d_rect.y);		
	});
};

function AddPath(svg, from_x, from_y, to_x, to_y) {
	// create path
	let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute("stroke", "#FFFFFF");
	path.setAttribute("fill", "none");
	path.setAttribute("stroke-width", "2");
	control = Math.floor((to_y - from_y) / 2)
	path.setAttribute("d", `M${from_x},${from_y} C ${from_x} ${from_y + control}, ${to_x} ${to_y - control}, ${to_x} ${to_y}`);
	svg.append(path)
};

function SetInitialView() {
	_dragElement = document.getElementById('portal_frame');
	_dragElement.style.top = '100px';
	_dragElement.style.left = '150px';
}