/**
 * E2E tests that checks the functionality of the search bar.
 */

/**
 * Helper function to check if element exists and is visible
 * @param {string} selector - Selector value, either a class or an id, of the element
 * @param {string} description - Description of the element
 */
function checkElement(selector, description) {
  browser.assert
    .elementPresent(selector, `${description} exists`)
    .assert.visible(selector, `${description} is visible`);
}

/**
 * 1. Checks if the search input and the search button exist.
 * 2. Types in a search term and checks if the page gets redirected to the expected URL.
 *
 * Variables and parameters for the e2e tests
 * @param {string} URL - The path of the link to be tested, local, staging, or prod.
 * @param {string} searchTerm - The search text to be typed in the search box.
 * @param {string} searchURL - The URL that the search term is supposed to be redirected to.
 */

module.exports = {
  before: function (browser) {
    // Actions to perform before the test suite runs
    browser.maximizeWindow();
  },

  "E2E: Search Bar Test": function (browser) {
    const URL = "http://localhost:8080";
    const searchTerm = "license";
    const expectedSearchURL =
      "https://www.ontario.ca/search/search-results/?query=license";
    const searchInputSelector = "#ontario-search-input-field";
    const searchButtonSelector = "#ontario-search-submit";

    browser
      .url(URL)
      .waitForElementVisible("body", 2000, "Body is visible")

      // Check if search elements exist and are visible
      .perform(() => checkElement(searchInputSelector, "Search input field"))
      .perform(() => checkElement(searchButtonSelector, "Search button"))

      // Type in the search term and check redirection
      .setValue(searchInputSelector, searchTerm)
      .click(searchButtonSelector)
      .waitForElementVisible("body", 2000, "Body is visible after search")
      .assert.urlContains(
        expectedSearchURL,
        "Redirected to the correct search URL"
      )
      .end();
  },
};
