
/**
 * Opens a URL into a new tab using an temporary `<a>` element.
 * @param {String} href URL to open in new tab with.
 */
function openInNewTab(href) {
  var a = document.createElement("a");
  a.href = href;
  a.target = "_blank";
  a.click();
}

/**
 * Redirects to a URL using an temporary `<a>` element.
 * @param {String} href URL to redirect to.
 */
function openLink(href) {
  var a = document.createElement("a");
  a.href = href;
  a.click();
}

/**
 * Some newly created utilites for opening links.
 */
var AElement = {
  openInNewTab,
  openLink,
};

module.exports = AElement;
