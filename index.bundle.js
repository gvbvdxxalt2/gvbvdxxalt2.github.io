/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 596
(module) {

module.exports = ".contentMain {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100dvw;\n  height: 100dvh;\n  background: #6e6e6e;\n  display: flex;\n  flex-direction: row;\n  font-family: arial;\n  color: #d1d1d1;\n}\n\n.aboutMeLeft {\n  width: 30dvw;\n  min-width: 480px;\n  height: 100%;\n  flex-shrink: 0;\n  flex-grow: 0;\n  background: #5e5e5e;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  display: flex;\n  flex-direction: column;\n}\n\n.aboutMeProfileName {\n  display: flex;\n\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-direction: column;\n  flex-wrap: wrap;\n  gap: 20px;\n\n  height: fit-content;\n  box-sizing: border-box;\n  font-size: 20px;\n  width: 100%;\n  background: rgb(10, 10, 10);\n  color: rgb(255, 255, 255);\n  padding: 30px 20px;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n.aboutMeProfileTop {\n  display: flex;\n  flex-grow: 0;\n  flex-shrink: 0;\n  align-items: center;\n  flex-direction: row;\n  gap: 20px;\n}\n\n.aboutMeProfileLinks {\n  display: flex;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.profilePicture {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 1);\n  border-style: solid;\n  border-width: 3px;\n  border-color: rgba(170, 170, 170, 1);\n  filter: drop-shadow(4px 4px 3px rgba(255, 255, 255, 0.5));\n  /* turn off pointer events here since I don't want unexpected drags */\n  pointer-events: none;\n}\n\n.profileName {\n  font-weight: bold;\n  font-size: 30px;\n  filter: drop-shadow(4px 4px 3px rgba(255, 255, 255, 0.5));\n  /* turn off pointer events here since I don't want unexpected drags */\n  pointer-events: none;\n}\n\n.profileCategories {\n  width: 100%;\n  height: fit-content;\n  overflow: scroll;\n  box-sizing: border-box;\n  border-radius: 3px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-direction: row;\n  align-items: center;\n  display: flex;\n  gap: 2px;\n}\n\n.profileCategoryTab {\n\twidth: fit-content;\n\theight: 45px;\n\tpadding: 5px 5px;\n\tbox-sizing: border-box;\n\tborder-radius: 2px;\n\tfont-weight: bold;\n\tbackground: #474747;\n\tcolor: #9c9c9c;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: row;\n\tcursor: default;\n\ttext-decoration: unset;\n\tflex-wrap: none;\n\ttext-wrap: none;\n\tflex-shrink: 0;\n\tflex-grow: 0;\n}\n\n.profileCategoryTab:hover {\n\ttext-decoration: underline;\n\tcursor: pointer;\n}\n\n.profileCategoryTab[selected] {\n\tcursor: default;\n\tcolor: #d6d6d6;\n\tbackground: #8a8a8a;\n\ttext-decoration: unset;\n}\n\n.profileCategoryTab > span {\n\tuser-select: none;\n}\n\n.profileStoryContent {\n\tdisplay: block;\n\tflex-grow: 1;\n\tflex-shrink: 1;\n\twidth: 100%;\n\toverflow: auto;\n}\n\na {\n\tall: unset;\n\tcursor: default;\n\tfont-family: arial;\n\tcolor: #0092d1;\n}\n\na:hover {\n\tcursor: pointer;\n\ttext-decoration: underline;\n\tcolor: #00a6ed;\n}\n\n.creatorSocialLink {\n  all: unset;\n  display: block;\n  padding: 5px 5px;\n  border-radius: 5px;\n  height: 30px;\n  margin-right: 5px;\n  background: rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n}\n\n.creatorSocialLink > img {\n  user-select: none;\n  -moz-user-select: none;\n  -webkit-user-drag: none;\n  transition: 0.15s;\n}\n\n.creatorSocialLink:hover > img {\n  transform: scale(1.07);\n}\n\n.creatorSocialLink > img {\n\theight: 100%;\n}\n\n.creatorSocialLink:hover {\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.7);\n}\n\n\n.projectsSide {\n\tdisplay: flex;\n\tflex-grow: 1;\n\toverflow: auto;\n\tflex-direction: row;\n\tcolor: #e3e3e3;\n}\n\n.projectsSideProjectsAndSearch {\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\tflex-grow: 1;\n\toverflow: auto;\n\tflex-direction: column;\n}\n\n.searchProjectsContainer {\n\tdisplay: flex;\n\theight: fit-content;\n\tflex-shrink: 0;\n\tflex-grow: 0;\n\tflex-direction: row;\n\talign-items: center;\n\tbackground: rgba(0,0,0,0.5);\n\tfont-size: 15px;\n\tpadding: 2px 2px;\n\tborder-bottom-left-radius: 5px;\n\tborder-bottom-right-radius: 5px;\n}\n.searchProjectsInput {\n\tall: unset;\n\tcolor: rgb(0,0,0);\n\tbackground: rgb(255,255,255);\n\tborder-style: solid;\n\tborder-width: 2px;\n\tborder-color: rgb(100,100,100);\n\tpadding: 3px 3px;\n\tdisplay: flex;\n\tflex-grow: 1;\n\tbox-sizing: border-box;\n\tborder-radius: 5px;\n\ttransition: 0.2s border-color;\n}\n.searchProjectsInput:focus {\n\tborder-color: rgb(0,100,255);\n}\n\n.projectsList {\n\tposition: relative;\n\tdisplay: flex;\n\tflex-grow: 1;\n\tflex-direction: row;\n\tflex-wrap: wrap;\n\tgap: 2px;\n\toverflow: auto;\n}\n\n.projectContainer {\n\tdisplay: flex;\n}\n.project {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-grow: 1;\n\talign-items: center;\n\tbackground-color: #919191;\n\tjustify-content: center;\n\tgap: 2px;\n\tpadding: 5px 5px;\n\tborder-radius: 3px;\n\ttransition: 0.1s;\n\tmax-width: 500px;\n\tmax-height: 400px;\n\tborder-style: solid;\n\tborder-width: 4px;\n\tborder-color: rgba(0,0,0,0);\n}\n.project:hover {\n\tcursor: pointer;\n\tbackground-color: #dbdbdb;\n\tborder-color: rgba(0, 0, 0, 0.553);\n}\n\n.project > span {\n\tcolor: rgba(0,0,0,0.5);\n\tfont-weight: bold;\n\tuser-select: none;\n\tpointer-events: none;\n\tfont-size: 20px;\n}\n.project:hover > span {\n\tcolor: rgba(83, 83, 83, 0.5);\n}\n.project > img {\n\tmax-width: 350px;\n\theight: 250px;\n\tmin-width: 250px;\n\tobject-fit: contain;\n\tpointer-events: none;\n\tuser-select: none;\n\tborder-radius: 5px;\n}\n\n.projectInformation {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 2px 2px;\n\tmax-width: 400px;\n\tmin-width: 300px;\n\talign-items: center;\n\tbackground: rgba(0,0,0,0.5);\n\toverflow: auto;\n}\n\n.projectInformationName {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 2px 2px;\n\tfont-weight: bold;\n\tfont-size: 20px;\n}\n\n.projectInformationImage {\n\tmax-width: 350px;\n\theight: 250px;\n\tmin-width: 250px;\n\tobject-fit: contain;\n\tpointer-events: none;\n\tuser-select: none;\n\tborder-radius: 5px;\n}\n\n.projectInformationLinksContainer {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tmax-width: 100%;\n\twidth: fit-content;\n\theight: fit-content;\n\tgap: 3px;\n\tpadding: 5px 5px;\n\tbox-sizing: border-box;\n}\n\n.projectInformationLinksHeader {\n\tfont-weight: bold;\n\ttext-wrap: nowrap;\n}\n\n.projectInformationLinks {\n\tdisplay: flex;\n\tflex-grow: 1;\n\toverflow: auto;\n\tflex-direction: row;\n\tgap: 2px;\n}\n\n.projectInformationLink {\n\tdisplay: flex;\n\talign-items: center;\n\tbackground: rgb(36, 90, 161);\n\tcolor: rgba(255,255,255,0.8);\n\tborder-radius: 5px;\n\tfont-weight: bold;\n\tflex-grow: 0;\n\tflex-shrink: 0;\n\tpadding: 10px 10px;\n\tbox-sizing: border-box;\n\twidth: fit-content;\n\theight: fit-content;\n\tflex-wrap: nowrap;\n\ttext-wrap: nowrap;\n}\n\n.projectInformationLink:hover {\n\ttext-decoration: underline;\n\tbackground: rgb(64, 108, 165);\n\tcursor: pointer;\n}\n\n.projectInformationDescription {\n\tdisplay: block;\n\tfont-size: 15px;\n\twidth: 100%;\n\tflex-grow: 1;\n\tflex-shrink: 1;\n\toverflow: auto;\n}\n\n.noProjectsFoundError {\n\tposition: absolute;\n\ttransform: translate(-50%, -50%);\n\ttop: 50%;\n\tleft: 50%;\n\tbackground: rgba(255,255,255,0.5);\n\tcolor: rgb(0,0,0);\n\tpadding: 10px 10px;\n\tborder-radius: 5px;\n}\n\n.noProjectsFoundErrorHeader {\n\tfont-size: 20px;\n\tfont-weight: bold;\n}";

/***/ },

/***/ 255
(module) {

//Webpack compatible version of elements module from gvbvdxx-pack-2
//With some new updates as well.
var __GP_elements = {};
/**
 * Gets if the element is a DOM element.
 * @param {Element} Obj The object to check.
 * @returns {Boolean} `true` or `false`.
 */
function isDOM(Obj) {
  return Obj instanceof Element;
}

/**
 * elements library that was used in "gvbvdxx-pack-2", but modified for webpack.
 */
var elements = {
  /**
   * Appends all the Elements in the array to the specified Element
   * @param {Element} elm The Element to append the array of Elements.
   * @param {Array} appendArray The Array of Elements to append to the Element
   */
  appendElements: function (elm, appendArray) {
    for (var appendElm of appendArray) {
      elm.append(appendElm);
    }
  },
  
  /**
   * This gets an A element object with an "all: unset;" property, passable to the JSON the Element parser.
   * @param {Object} props Additional properties for the A element object.
   * @returns {Object} The A element object created
   */
  getStylelessAJSON(props = {}) {
    return {
      element: "a",
      style: {
        all: "unset",
      },
      ...props,
    };
  },

  /**
   * Removes all children from an Element, probably doesn't work for textContent or innerHTML.
   * @param {Element} elm The Element to remove children from.
   */
  removeAllChildren: function (elm) {
    Array.from(elm.children).forEach((elm) => elm.remove());
  },

  /**
   * Parses an array of JSON element objects into Elements, then appends them to the Element provided to the elm property.
   * Using the "gid" property on an JSON element object can store an parsed JSON element, and you can later call `getGPId` to get the element.
   * @param {Element} elm The target Element to do the action on.
   * @param {Array} appendJSONArray Array of JSON element objects to parse and append.
   * @returns {Array} Array of parsed JSON element objects that were appended.
   */
  appendElementsFromJSON: function (elm, appendJSONArray) {
    var elms = elements.createElementsFromJSON(appendJSONArray);
    elements.appendElements(elm, elms);
    return elms;
  },

  /**
   * Same as `appendElementsFromJSON`, but removes all the children of the target before appending the new parsed Elements.
   * Safer than setting innerHTML on an Element.
   * @param {Element} elm The target Element to do the action on.
   * @param {Array} appendJSONArray Array of JSON element objects to parse and append.
   * @returns {Array} Array of parsed JSON element objects that were appended.
   */
  setInnerJSON: function (elm, appendJSONArray) {
    elements.removeAllChildren(elm);
    var elms = elements.createElementsFromJSON(appendJSONArray);
    elements.appendElements(elm, elms);
    return elms;
  },

  /**
   * Parses an array of JSON element objects into Elements.
   * @param {Array} jsonelmArray Array of JSON element objects.
   * @returns {Array} Array of Elements.
   */
  createElementsFromJSON: function (jsonelmArray) {
    //converts an array of json's with element properties to a element list.
    function runElements(arry) {
      var myRealElms = [];
      for (var elm of arry) {
        if (!isDOM(elm)) {
          if (typeof elm == "object") {
            var realElm = document.createElement(elm.element);
            for (var attriName of Object.keys(elm)) {
              if (!(attriName == "element" || attriName == "children")) {
                var attributeValue = elm[attriName];
                var setattri = true;
                if (attriName == "gid") {
                  __GP_elements[attributeValue] = realElm;
                  setattri = false;
                }
                if (attriName == "style") {
                  for (var styleName of Object.keys(attributeValue)) {
                    var styleValue = attributeValue[styleName];
                    realElm.style[styleName] = styleValue;
                  }
                  setattri = false;
                }
                if (attriName == "styleProperties") {
                  for (var styleName of Object.keys(attributeValue)) {
                    var styleValue = attributeValue[styleName];
                    realElm.style.setProperty(styleName, styleValue);
                  }
                  setattri = false;
                }
                if (attriName == "dangerouslySetInnerHTML") {
                  realElm.innerHTML = attributeValue;
                  setattri = false;
                } else if (attriName == "innerHTML") {
                  console.trace(
                    'Warning: The "innerHTML" property is deprecated. ' +
                      'Please use "dangerouslySetInnerHTML" instead.',
                  );
                  realElm.innerHTML = attributeValue;
                  setattri = false;
                }
                if (attriName == "textContent") {
                  realElm.textContent = attributeValue;
                  setattri = false;
                }
                if (attriName == "src") {
                  realElm.src = attributeValue;
                  setattri = false;
                }
                if (attriName == "srcObject") {
                  realElm.srcObject = attributeValue;
                  setattri = false;
                }
                if (attriName == "value") {
                  realElm.value = attributeValue;
                  setattri = false;
                }
                if (attriName == "min") {
                  realElm.min = attributeValue;
                  setattri = false;
                }
                if (attriName == "max") {
                  realElm.max = attributeValue;
                  setattri = false;
                }
                if (attriName == "width") {
                  realElm.width = attributeValue;
                  setattri = false;
                }
                if (attriName == "height") {
                  realElm.height = attributeValue;
                  setattri = false;
                }
                if (attriName == "className") {
                  realElm.className = attributeValue;
                  setattri = false;
                }
                if (attriName == "hidden") {
                  if (attributeValue) {
                    realElm.hidden = true;
                  }
                  setattri = false;
                }
                if (attriName == "selected") {
                  if (attributeValue) {
                    realElm.selected = true;
                  }
                  setattri = false;
                }
                if (attriName == "eventListeners") {
                  if (Array.isArray(attributeValue)) {
                    for (var event of attributeValue) {
                      realElm.addEventListener(event.event, event.func);
                    }
                  }
                  setattri = false;
                }
                if (attriName == "GPWhenCreated") {
                  attributeValue.bind(realElm)(realElm); //This seems weird, but first realElm is the "this" value refrence, then the second realElm is for the function value, as well as calling the new binded function.
                  setattri = false;
                }
                if (setattri) {
                  if (typeof realElm[attriName] !== "undefined") {
                    realElm[attriName] = attributeValue;
                    setattri = false;
                  }
                }
                if (setattri) {
                  realElm.setAttribute(attriName, attributeValue);
                }
              }
            }

            if (elm.children) {
              var elmsToAppend = runElements(elm.children);
              for (var elmAppend of elmsToAppend) {
                realElm.append(elmAppend);
              }
            }
            myRealElms.push(realElm);
          } else {
            myRealElms.push(elm);
          }
        } else {
          if (elm) {
            myRealElms.push(elm);
          }
        }
      }
      return myRealElms;
    }
    return runElements(jsonelmArray);
  },

  /**
   * Function wrapper around `document.getElementById`.
   * @param {String} id The Elements to find.
   * @returns {Element} The Element found, but can return undefined or null if not found.
   */
  getById: function (id) {
    return document.getElementById(id);
  },

  /**
   * Stores an element without setting an ID property, this makes it harder to find in inspect, but also benefits with speed.
   * @param {Element} el The element to store.
   * @param {String} id The ID to store it as.
   * @returns {Element} The element that was stored.
   */
  setGPId: function (el, id) {
    __GP_elements[id] = el;
    return el;
  },

  /**
   * Unlinks an stored element's GPId, this doesn't remove the actual ID property from it or calls `remove()` on the element.
   * @param {*} id 
   */
  disposeGPId: function (id) {
    __GP_elements[id] = "";
    delete __GP_elements[id];
  },

  /**
   * Returns the element found that has an GPId set. On the parser, use the "gid" property to set to this, or call `setGPId` instead.
   * @param {String} id The GPId that was assigned to the element.
   * @returns {Element} Element or null if not found.
   */
  getGPId: function (id) {
    if (__GP_elements[id]) {
      return __GP_elements[id];
    }
    return null;
  },

  /**
   * Variable that holds `document.body`.
   */
  body: document.body,

  /**
   * Internal variable used for the GPId list.
   */
  __GP_elements: __GP_elements,
};


module.exports = elements;


/***/ },

/***/ 930
(module, __unused_webpack_exports, __webpack_require__) {

var xml = __webpack_require__(92);

//Everything will use innerHTML or getAttribute from the xml, just easiest way to write profiles without bloating the site with markdown parsers.

var profile = {
  name: "Name",
  picture: "favicon.png",
  links: [
    {
      name: "Link",
      logo: "favicon.png",
      href: "https://google.com", //Placeholder until data is read.
    },
  ],
	stories: [
		{
			label: "Index story",
			content: "Your intro here",
			default: true,
		}
	]
};

var projects = [];

function readProfileSection(p) {
  if (!p) {
    return;
  }
  var nameElement = p.querySelector("name");
  var pfpElement = p.querySelector("pfp");
  var bgElement = p.querySelector("bg");
  
  var name = nameElement ? nameElement.innerHTML : "(Unknown)";
  var pfp = pfpElement ? (pfpElement.getAttribute("src") || "favicon.png") : "favicon.png";
  var bg = bgElement ? bgElement.getAttribute("css") : "";

  profile.name = name;
  profile.picture = pfp;
  profile.cssBg = bg;

  var socialElement = p.querySelector("social");
  var socialElementChildren = socialElement ? socialElement.children : [];
  var linksArray = [];
  for (var link of socialElementChildren) {
    linksArray.push({
      name: link.getAttribute("label") || "Link",
      href: link.getAttribute("goto") || "https://google.com",
      logo: link.getAttribute("logo") || "favicon.png",
    });
  }

  profile.links = linksArray;

	var stories = p.querySelector("stories");
	var storiesArray = [];
	var storyIdNumber = 0;
	for (var storyElement of stories.children) {
		storiesArray.push({
			content: storyElement.innerHTML,
			label: storyElement.getAttribute("label"),
			default: storyElement.hasAttribute("default"),
			id: storyIdNumber
		});
		storyIdNumber += 1;
	}

	profile.stories = storiesArray;
}

readProfileSection(xml.querySelector("profile"));

function readProjectsSection(p) {
	if (!p) {
    return;
  }
	projects = Array.from(p.children).map((projectXML) => {
		var labelXml = projectXML.querySelector("label");
		var thumbnailXml = projectXML.querySelector("thumbnail");
		var descriptionXml = projectXML.querySelector("description");
		var linksXml = projectXML.querySelector("links");

		var tagsElement = projectXML.querySelector("tags");
		var tagElements = tagsElement ? tagsElement.children : [];
		return {
			label: labelXml.innerHTML,
			textLabel: labelXml.textContent,
			thumbnail: thumbnailXml.getAttribute("src"),
			description: descriptionXml.innerHTML,
			links: Array.from(linksXml.children).map((linkXml) => {
				return {
					label: linkXml.innerHTML,
					href: linkXml.getAttribute("goto")
				};
			}),
			tags: Array.from(tagElements).map((tagElm) => {
				return tagElm.textContent; //text content only because this is used by search, and not actually rendered.
			})
		};
	});
}

readProjectsSection(xml.querySelector("projects"));

module.exports = {
  profile,
  projects
};


/***/ },

/***/ 92
(module) {

var originalXML = document.getElementById("profileXML");
if (!originalXML) {
  window.alert("No XML was found so the about me profile can't be loaded.");
  throw new Error("No XML was found so the about me profile can't be loaded.");
}

setTimeout(() => {
	//Remove it from the document since we won't be needing it on the screen anymore.
	originalXML.remove();
},100);

var xml = originalXML.cloneNode(true);

var loadingScreen = document.getElementById("loadingScreen");
if (loadingScreen) {
  loadingScreen.remove();
}

module.exports = xml;


/***/ },

/***/ 452
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(930); //Content needs to be loaded first to prevent glitches.
__webpack_require__(223);


/***/ },

/***/ 522
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(548);
__webpack_require__(184);

/***/ },

/***/ 548
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var elements = __webpack_require__(255);
var { profile } = __webpack_require__(930);

var profileCategories = elements.getGPId("profileCategories");
var profileStoryContent = elements.getGPId("profileStoryContent");
var selectedId = 0;

function refreshProfileCategoriesButtons() {
	var buttonElements = profile.stories.map((story) => {
		return {
			element: "div",
			className: "profileCategoryTab",
			...(story.id == selectedId ? {GPWhenCreated: (e) => {e.setAttribute("selected","")}} : {}),
			children: [
				{
					element: "span",
					textContent: story.label
				}
			],
			eventListeners: [
				{
					event: "click",
					func: function () {
						selectedId = story.id;
						refreshProfileCategories();
					}
				}
			]
		};
	});
	elements.setInnerJSON(profileCategories,buttonElements);
}

function refreshProfileCategoriesContent() {
	var story = profile.stories.find((story) => story.id == selectedId);
	profileStoryContent.innerHTML = story.content;
}

function refreshProfileCategories() {
	refreshProfileCategoriesButtons();
	refreshProfileCategoriesContent();
}

profile.stories.forEach((story) => {
	if (story.default) {
		selectedId = story.id;
	}
});

refreshProfileCategories();

/***/ },

/***/ 936
(module, __unused_webpack_exports, __webpack_require__) {

var elements = __webpack_require__(255);
var projectInformationContainer = elements.getGPId("projectInformationContainer");

var content = __webpack_require__(930);
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

/***/ },

/***/ 184
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var elements = __webpack_require__(255);
var projectsListDiv = elements.getGPId("projectsListDiv");
var searchProjectsInput = elements.getGPId("searchProjectsInput");

function debounce(a, time) {
	var t = null;
	return function (...args) {
		clearTimeout(t);
		t = setTimeout(() => {
			a(...args);
		},time);
	};
}

var content = __webpack_require__(930);
var allProjects = content.projects;

var {handleProjectClick} = __webpack_require__(936);

function getProjectsToRender() {
	return allProjects;
}

function getSearchableText(string) {
	var s = string || "";

	s = s.toLowerCase(); //No case sensitivity.

	//Filter out any characters that aren't needed for searching.
	var i = 0;
	var allowedChars = "abcdefghijklmnopqrstuvwxyz1234567890";
	var s2 = "";
	while (i < s.length) {
		if (allowedChars.indexOf(s[i]) !== -1) {
			s2 += s[i];
		}
		i += 1;
	}

	return s2;
}

function findProjectsToRender(term) {
	var projects = getProjectsToRender();
	if (term.length == 0) {
		return projects;
	}

	var found = [];
	var termSearchable = getSearchableText(term);
	projects.forEach((project) => {
		var projectSearchable = getSearchableText(project.textLabel + project.tags.join(""));
		if (projectSearchable.indexOf(termSearchable) !== -1) {
			found.push(project);
		}
	});

	return found;
}

function renderProject(project) {
	var content = {
		element: "div",
		className: "project",
		title: "Click on this project to read more about it.",
		children: [
			{
				element: "img",
				src: project.thumbnail,
			},
			{
				element: "span",
				dangerouslySetInnerHTML: project.label
			}
		],
		eventListeners: [
			{
				event: "click",
				func: function (event) {
					handleProjectClick(event,project);
				}
			}
		]
	};
	/*return {
		element: "div",
		className: "projectContainer",
		children: [content]
	};*/
	return content;
}

function renderProjects(projects) {
	elements.setInnerJSON(projectsListDiv, projects.map(renderProject));
	if (projects.length == 0) {
		elements.setInnerJSON(projectsListDiv, [
			{
				element: "div",
				className: "noProjectsFoundError",
				children: [
					{
						element: "span",
						textContent: "🔍😕 Huh?",
						className: "noProjectsFoundErrorHeader"
					},
					{
						element: "br"
					},
					{
						element: "span",
						textContent: "No projects found or exist, maybe try changing your search query, or I don't have that project availible here."
					}
				]
			}
		]);
	}
}

function refreshProjects() {
	var term = searchProjectsInput.value.trim();
	var projects = findProjectsToRender(term);
	renderProjects(projects);
}

refreshProjects();
searchProjectsInput.addEventListener("input", debounce(refreshProjects,300));

/***/ },

/***/ 442
(module) {

//Categories are added after element rendering.

module.exports = [
	{
	    element: "div",
	    className: "profileCategories",
		gid: "profileCategories"
    },	
	{
		element: "div",
		className: "profileStoryContent",
		gid: "profileStoryContent"
	}
];

/***/ },

/***/ 259
(module, __unused_webpack_exports, __webpack_require__) {

var { profile } = __webpack_require__(930);

module.exports = [
  {
    element: "div",
    gid: "aboutMeLeft",
    className: "aboutMeLeft",
    children: [
      ...__webpack_require__(37),
      ...__webpack_require__(442),
    ],
  },
];


/***/ },

/***/ 37
(module, __unused_webpack_exports, __webpack_require__) {

var { profile } = __webpack_require__(930);

module.exports = [
  {
    element: "div",
    gid: "aboutMeProfileName",
    className: "aboutMeProfileName",
    style: {
      background: profile.cssBg,
    },
    children: [
		{
			element: "div",
			className: "aboutMeProfileTop",
			children: [
				{
			        element: "img",
			        className: "profilePicture",
			        src: profile.picture,
			    },
			    {
			        element: "span",
			        className: "profileName",
			        dangerouslySetInnerHTML: profile.name,
			    },
			]
		},
		{
			element: "div",
			className: "aboutMeProfileLinks",
			children: profile.links.map((link) => {
				return {
					element: "a",
					className: "creatorSocialLink",
					href: link.href,
					title: link.name,
					target: "_blank",
					children: [
						{
							element: "img",
							src: link.logo
						}
					]
				};
			})
		}
    ],
  },
];


/***/ },

/***/ 947
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = [
  {
    element: "style",
    textContent: __webpack_require__(596),
  },
  {
    element: "style",
    //Quick hack to get hidden attribute to work even if there is another display attribute set.
    textContent: "[hidden] {display: none;opacity: 0;pointer-events: none;}",
  },

  //Actual content
  {
    element: "div",
    className: "contentMain",
    gid: "contentMain",
    children: [
		...__webpack_require__(259),
		...__webpack_require__(802)
	],
  },
];


/***/ },

/***/ 249
(module) {

module.exports = [
    {
		element: "div",
		className: "projectInformation",
		gid: "projectInformationContainer",
		hidden: true,
		children: []
	}
];

/***/ },

/***/ 43
(module) {

module.exports = [
	{
		element: "div",
		className: "searchProjectsContainer",
		children: [
			{
				element: "span",
				textContent: "🔍 Search projects:"
			},
			{
				element: "input",
				className: "searchProjectsInput",
				gid: "searchProjectsInput",
				placeholder: "Type something here to search it."
			}
		]
	}
];

/***/ },

/***/ 802
(module, __unused_webpack_exports, __webpack_require__) {

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
					
					...__webpack_require__(43),

					{
						element: "div",
						className: "projectsList",
						gid: "projectsListDiv"
					},
					
				]
			}
			
		]
	},

	...__webpack_require__(249)
];


/***/ },

/***/ 223
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(787);


/***/ },

/***/ 787
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var elements = __webpack_require__(255);

var jsonContent = __webpack_require__(947);

elements.appendElementsFromJSON(document.body, jsonContent);

__webpack_require__(522);

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
__webpack_require__(452);

/******/ })()
;