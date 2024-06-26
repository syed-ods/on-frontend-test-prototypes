/**
 * Unit tests that check if the site and application level files were generated properly
 */

const chai = require("chai");
const fs = require("fs");
const path = require("path");

const assert = chai.assert;
const existsSync = fs.existsSync;

/**
 * Helper function to check file existence
 * @param {string} filePath - The path of the file to check.
 * @param {string} description - The description of the file.
 *
 * @returns {boolean} TRUE/FALSE value based on if the file was found or
 */
function checkFileExists(filePath, description) {
  it(description, function () {
    assert(existsSync(filePath), `File does not exist: ${filePath}`);
  });
}

/**
 * 1. Checks if the top level redirect page exists.
 * 2. The main English template was generated.
 * 3. The main French template was generated.
 * 4. The sitemap template was generated.
 *
 * @param {string} redirectPage - The path and name of the redirect page in dist.
 * @param {string} enPage - Name of the English page template.
 * @param {string} frPage - Name of the French page template.
 * The page names can also be transferred from the CLI prompts, if required.
 * @param {string} sitemap - Path and name of the sitemap template.
 * 
 * @returns {boolean} Based on the test, the result will either be TRUE or FALSE.
 * @example
 * describe("file exists", function () {
    it("the required file should exist", function () {
      assert(existsSync(`${projectDir}required-file-name`));
    });
  });
 */

// Directories
const testDir = path.resolve(__dirname, "..");
const projectDir = path.resolve(testDir, "../..");

// File paths
const paths = {
  redirectPage: path.join(projectDir, "dist/index.html"),
  enPage: path.join(projectDir, "src/en.njk"),
  frPage: path.join(projectDir, "src/fr.njk"),
  sitemap: path.join(projectDir, "src/sitemap.njk"),
};

describe("Unit: App files generation", function () {
  describe("Top-level redirect page present", function () {
    checkFileExists(
      paths.redirectPage,
      "should generate a top-level redirect page"
    );
  });
  describe("English-language template page present", function () {
    checkFileExists(paths.enPage, "should generate the main English page");
  });
  describe("French-language template page present", function () {
    checkFileExists(paths.frPage, "should generate the main French page");
  });
  describe("Sitemap present", function () {
    checkFileExists(paths.sitemap, "should generate the sitemap page");
  });
});
