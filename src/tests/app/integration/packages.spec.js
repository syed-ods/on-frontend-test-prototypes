/**
 * Integration tests that check if the required and selected node modules were installed
 * This suite ensures that the necessary external packages are installed.
 */
const { expect } = require('chai');
const { isPackageInstalled } = require('../../utils/integration.js');

/** Tests for required and optional packages
 * 1. Checks if the required ontario-frontend core package is installed.
 * 2. If selected, the optional ES-Lint or Prettier packages were installed with their associated packages and dependencies.
 *
 * @param {string} package - Name of the node package/module.
 * @param {object} optionalPackages - Name of the optional packages like ES-lint and Prettier.
 * @param {boolean} optionalPackages.enabled - Boolean value if the optional packages were selected or not through the CLI prompt.
 * @param {array} optionalPackages.packages - A list of associated packages for a parent package.
 * The boolean value should be captured from the CLI prompts.
 *
 * @returns {boolean} Based on the test, the result will either be TRUE or FALSE (error).
 */

describe('Integration: Installed packages', function () {
  // Array of required packages – can add more to the list
  const requiredPackages = ['@ongov/ontario-frontend'];

  // Testing the required packages
  requiredPackages.forEach((pkg) => {
    it(`The core package "${pkg}" should be installed`, function () {
      try {
        if (!isPackageInstalled(pkg)) {
          throw new Error();
        }
      } catch (e) {
        expect.fail(`Failed: to detect the required package: "${pkg}"`);
      }
    });
  });

  // The optional packages and their associated packages
  const optionalPackages = {
    eslint: {
      enabled: true,
      packages: [
        'eslint',
        'eslint-plugin-import',
        '@ongov/eslint-config-ontario-frontend',
      ],
    },
    prettier: {
      enabled: true,
      packages: ['prettier', '@ongov/prettier-config-ontario-frontend'],
    },
  };

  // Testing optional packages with their associated packages and dependencies
  for (const [parentPackage, config] of Object.entries(optionalPackages)) {
    if (config.enabled) {
      config.packages.forEach((pkg) => {
        it(`The package "${pkg}" should be installed for "${parentPackage}"`, function () {
          try {
            if (!isPackageInstalled(pkg)) {
              throw new Error();
            }
          } catch (e) {
            expect.fail(
              `Failed: couldn't locate the package: "${pkg}" for "${parentPackage}"`
            );
          }
        });
      });
    }
  }
});
