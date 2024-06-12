/**
 * E2E tests that check if the localization content is working, including the language toggle button.
 */

/**
 * 1. Checks if the html attribute of the page has the right attributes.
 * 2. If the language button toggles.
 * 3. If the language button has the right text content.
 *
 * Variables and parameters for the e2e tests
 * @param {string} URL - The path of the link to be tested, local, staging, or prod.
 * @param {string} enLangAttr - The English language HTML attribute value.
 * @param {string} frLangAttr - The French language HTML attribute value.
 * @param {string} frButtonText - The language toggle button value to French.
 * @param {string} enButtonText - The language toggle button value to English.
 */

module.exports = {
  "Localization test: English and French": function (browser) {
    const URL = "http://localhost:8080";
    const enLangAttr = "en";
    const frLangAttr = "fr";
    const frButtonText = "Français";
    const enButtonText = "English";

    browser
      .url(URL)
      .waitForElementVisible("body", 2000)
      // check if the html tag has the en lang attribute
      .assert.attributeEquals("html", "lang", enLangAttr)
      // check if the language toggle button item has the required text
      .getText(".ontario-header__language-toggler span", function (result) {
        this.assert.equal(result.value.trim(), frButtonText);
      })
      // toggle between French and English and perform the same tests as above
      .click(".ontario-header__language-toggler")
      .assert.attributeEquals("html", "lang", frLangAttr)
      .getText(".ontario-header__language-toggler span", function (result) {
        this.assert.equal(result.value.trim(), enButtonText);
      })
      .click(".ontario-header__language-toggler")
      .assert.attributeEquals("html", "lang", enLangAttr)
      .getText(".ontario-header__language-toggler span", function (result) {
        this.assert.equal(result.value.trim(), frButtonText);
      })
      .end();
  },
};
