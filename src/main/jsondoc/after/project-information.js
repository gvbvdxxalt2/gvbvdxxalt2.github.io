var elements = require("../../../gp2/elements.js");
var projectInformationContainer = elements.getGPId("projectInformationContainer");

var content = require("../../content");
var allProjects = content.projects;

var activeProject = null;

function generateLinksForProject(project) {
    return project.links.map((link) => {
        return {
            element: "a",
            style: {
                all: "unset"
            },
            href: link.href,
            target: "_blank",
            children: [
                {
                    element: "div",
                    className: "projectInformationLink",
                    textContent: link.label
                }
            ]
        }
    });
}

function renderProjectInformation(project) {
    if (!activeProject) {
        projectInformationContainer.hidden = false; //This is hidden on load since we let the user pick the project they want to view.
    }
    activeProject = project;

    var projectImageObj = {
        element: "img",
        src: project.thumbnail,
        className: "projectInformationImage",
    };

    var projectNameObj = {
        element: "span",
        dangerouslySetInnerHTML: project.label,
        className: "projectInformationName",
    };

    
    var projectLinksHeaderObj = {
        element: "div",
        className: "projectInformationLinksHeader",
        textContent: "🔗 Links:"
    };

    var projectLinksObj = {
        element: "div",
        className: "projectInformationLinks",
        children: generateLinksForProject(project)
    };
    
    var projectLinksContainerObj = {
        element: "div",
        className: "projectInformationLinksContainer",
        children: [projectLinksHeaderObj,projectLinksObj]
    };

    var projectDescriptionObj = {
        element: "div",
        className: "projectInformationDescription",
        dangerouslySetInnerHTML: project.description
    };

    var arr = [projectImageObj,projectNameObj,projectLinksContainerObj,projectDescriptionObj];
    elements.setInnerJSON(projectInformationContainer, arr);
}

function handleProjectClick(event, project) {
    renderProjectInformation(project);
}

module.exports = {
    renderProjectInformation,
    handleProjectClick
};