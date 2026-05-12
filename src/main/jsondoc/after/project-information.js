var elements = require("../../../gp2/elements.js");
var projectInformationContainer = elements.getGPId("projectInformationContainer");

var content = require("../../content");
var allProjects = content.projects;

var activeProject = null;

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

    var arr = [projectImageObj,projectNameObj];
    elements.setInnerJSON(projectInformationContainer, arr);
}

function handleProjectClick(event, project) {
    renderProjectInformation(project);
}

module.exports = {
    renderProjectInformation,
    handleProjectClick
};