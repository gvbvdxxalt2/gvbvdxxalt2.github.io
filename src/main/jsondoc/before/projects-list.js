module.exports = [
	{
		element: "div",
		className: "projectsSide",
		gid: "projectsContainer",
		//This text was here for the development
	    //textContent: "🧑‍💻 Project list is coming soon! 🛠",
		children: [
			
			{
				element: "div",
				className: "projectsSideProjectsAndSearch",
				children: [
					
					...require("./project-search.js"),

					{
						element: "div",
						className: "projectsList",
						gid: "projectsListDiv"
					},
					
				]
			}
			
		]
	},

	...require("./project-information.js")
];
