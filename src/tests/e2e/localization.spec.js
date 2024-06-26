/**
 * E2E tests that check if the localization content is working, including the language toggle button.
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
 * Helper function to check the language attributes and button text
 * @param {string} langAttr - Expected value of the HTML lang attribute
 * @param {string} buttonText - Expected text content of the language toggle button
 */
function checkLanguageAttributes(langAttr, buttonText) {
  browser.assert
    .attributeEquals("html", "lang", langAttr) // Check if the HTML lang attribute matches the expected value
    .getText(".ontario-header__language-toggler span", function (result) {
      this.assert.equal(result.value.trim(), buttonText); // Check if the button text matches the expected value
    });
}

/**
 * 1. Checks if the html attribute of the page has the right attributes.
 * 2. If the language button toggles.
 * 3. If the language button has the right text content.
 *
 * Variables and parameters for the e2e tests
 * @param {string} URL - The path of the link to be tested, local, staging, or prod.
 * @param {string} langButton - The clickable link/button to toggle between EN & FR.
 * @param {string} enLangAttr - The English language HTML attribute value.
 * @param {string} frLangAttr - The French language HTML attribute value.
 * @param {string} frButtonText - The language toggle button value to French.
 * @param {string} enButtonText - The language toggle button value to English.
 */

module.exports = {
  before: function (browser) {
    // Actions to perform before the test suite runs
    browser.maximizeWindow();
  },

  "E2E: Localization test: English and French": function (browser) {
    const URL = "http://localhost:8080";
    const langButton = ".ontario-header__language-toggler"
    const enLangAttr = "en";
    const frLangAttr = "fr";
    const frButtonText = "Français";
    const enButtonText = "English";

    browser
      .url(URL)
      .waitForElementVisible("body", 2000)

      // Check if search elements exist and are visible
      .perform(() => checkElement(langButton, "Language toggle button"));

    // Initial check for English
    checkLanguageAttributes(enLangAttr, frButtonText); // Check English attributes and French button text

    // Toggle to French and check
    browser.click(langButton); // Click the language toggle button to switch to French
    checkLanguageAttributes(frLangAttr, enButtonText); // Check French attributes and English button text

    // Toggle back to English and check
    browser.click(langButton); // Click the language toggle button to switch back to English
    checkLanguageAttributes(enLangAttr, frButtonText); // Check English attributes and French button text

    browser.end();
  },
};
