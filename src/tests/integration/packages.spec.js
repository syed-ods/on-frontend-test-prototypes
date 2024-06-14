/**
 * Integration tests that check if the required and selected node modules were installed 
 */
const { expect } = require("chai");

/**
 * 1. Checks if the required ontario-frontend core package is installed.
 * 2. If selected, the optional ES-Lint or Prettier packages were installed.
 *
 * @param {string} package - Name of the node package/module.
 * @param {string} optionalPackages - Name of the optional packages like ES-lint and Prettier.
 * @param {boolean} selected - Boolean value if the optional packages were selected or not through the CLI prompt.
 * The boolean value should be captured from the CLI prompts.
 * 
 * @returns {boolean} Based on the test, the result will either be TRUE or FALSE (error).
 * @example
 * it(`The core package "${package}" should be installed`, function () {
      try {
        require.resolve(package);
      } catch (e) {
        expect.fail(`Failed: to detect the package: "${package}"`);
      }
    });
 */

describe("Integration: Installed packages", function () {
  // Array of required packages
  const requiredPackages = ["@ongov/ontario-frontend"];

  // Object containing names of optional packages
  const optionalPackages = {
    eslint: false,
    prettier: false,
  };

  // Testing required packages
  requiredPackages.forEach((package) => {
    it(`the core package "${package}" should be installed`, function () {
      try {
        require.resolve(package);
      } catch (e) {
        expect.fail(`Failed: to detect the package: "${package}"`);
      }
    });
  });

  // Testing optional packages
  for (const [package, selected] of Object.entries(optionalPackages)) {
    if (selected) {
      it(`the package "${package}" should be installed`, function () {
        try {
          require.resolve(package);
        } catch (e) {
          expect.fail(`Failed: couldn't locate the package: "${package}"`);
        }
      });
    }
  }
});
