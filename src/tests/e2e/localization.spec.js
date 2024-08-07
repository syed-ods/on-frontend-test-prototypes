/**
 * E2E tests that check if the localization content is working, including the language toggle button.
 * This suite ensures that the language toggles between English and French correctly.
 *
 */

const {
  checkElement,
  checkElementAttributes,
  checkElementText,
} = require('../utils/e2e.js');

/**
 * Combined function to check the language attributes and button text
 * @param {string} langAttr - Expected value of the HTML lang attribute
 * @param {string} buttonText - Expected text content of the language toggle button
 */
function checkLanguageAttributes(langAttr, buttonText) {
  checkElementAttributes(
    'html',
    'lang',
    langAttr,
    `Expected lang attribute to be ${langAttr}`
  );
  // Targeting the language toggle button within the ontario header
  checkElementText('.ontario-header__language-toggler span', buttonText);
}

/**
 * This test will open a browser window and try to access the page on the provided URL saved in the .env file
 * 1. It checks if the html attribute of the page has the right attributes.
 * 2. If the language button toggles.
 * 3. If the language button has the right text content.
 *
 * Variables and parameters for the e2e tests
 * @param {string} E2E_URL - The saved env variable path of the link to be tested, local, staging, or prod.
 * @param {string} langButton - The clickable link/button to toggle between EN & FR.
 * @param {string} enLangAttr - The English language HTML attribute value.
 * @param {string} frLangAttr - The French language HTML attribute value.
 * @param {string} frButtonText - The language toggle button value to French.
 * @param {string} enButtonText - The language toggle button value to English.
 */

const E2E_URL = process.env.E2E_URL;

if (!E2E_URL) {
  throw new Error('E2E_URL not found');
} else {
  module.exports = {
    before: function (browser) {
      // Actions to perform before the test suite runs
      browser.maximizeWindow();
    },

    'E2E: Localization test: English and French': function (browser) {
      const langButton = '.ontario-header__language-toggler';
      const enLangAttr = 'en';
      const frLangAttr = 'fr';
      const frButtonText = 'Français';
      const enButtonText = 'English';

      browser
        .url(E2E_URL)
        // Check if body is visible
        .perform(() => checkElement('body', 'Page body element'))

        // Check if language toggle button exist and is visible
        .perform(() => checkElement(langButton, 'Language toggle button'));

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
}
