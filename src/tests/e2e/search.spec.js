/**
 * E2E tests that checks the functionality of the search bar.
 */

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
  "Search Bar Test": function (browser) {
    const URL = "http://localhost:8080";
    const searchTerm = "license";
    const searchURL =
      "https://www.ontario.ca/search/search-results/?query=license";

    browser
      .url(URL)
      .waitForElementVisible("body", 2000)
      // check if search elements exist
      .assert.elementPresent(
        "#ontario-search-input-field",
        "Search input exists"
      )
      .assert.elementPresent("#ontario-search-submit", "Search button exists")
      // type in the searchTerm and see if it redirects to the right page
      .setValue("#ontario-search-input-field", searchTerm)
      .click("#ontario-search-submit")
      .waitForElementVisible("body", 2000)
      .assert.urlContains(searchURL, "Redirected to the search URL")
      .end();
  },
};
