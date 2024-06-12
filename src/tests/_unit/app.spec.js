/**
 * Unit tests that check if the site and application level files were generated properly
 */
const chai = require("chai");
const fs = require("fs");
const path = require("path");

const assert = chai.assert;
const existsSync = fs.existsSync;

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

const redirectPage = "dist/index.html";
const enPage = "/src/en.njk";
const frPage = "/src/fr.njk";
const sitemap = "/src/sitemap.njk";

describe("Unit: App files generation", function () {
  describe("Top-level redirect page present", function () {
    it("should generate a top-level redirect page", function () {
      assert(existsSync(`${redirectPage}`));
    });
  });
  describe("English-language template page present", function () {
    it("should generate the main English page", function () {
      assert(existsSync(`${projectDir}${enPage}`));
    });
  });
  describe("French-language template page present", function () {
    it("should generate the main French page", function () {
      assert(existsSync(`${projectDir}${frPage}`));
    });
  });
  describe("Sitemap present", function () {
    it("should generate the sitemap page", function () {
      assert(existsSync(`${projectDir}${sitemap}`));
    });
  });
});
