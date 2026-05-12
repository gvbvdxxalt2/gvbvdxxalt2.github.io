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
