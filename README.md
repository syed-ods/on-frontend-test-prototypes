# on-frontend-test-prototypes

Built with the [Ontario.ca Frontend toolkit](https://github.com/ongov/ontario-frontend).

## Project description

This ontario-frontend project has test prototypes for the end user building applications using our toolkit.

## Test Directory and Files
- 📂 src
    - 📂 tests
        - 📂 _unit
            - *packages.spec.js*
        - 📂 integration
            - *app.spec.js*
        - 📂 e2e
            - *localization.spec.js*
            - *search.spec.js*

### Unit tests
1. Checks if the top level redirect page exists.
2. The main English template was generated.
3. The main French template was generated.
4. The sitemap template was generated.
(The name of English and French pages need to be captured from the CLI input/prompt)

### Integration tests
1. Checks if the required ontario-frontend core package is installed.
2. If selected, the optional ES-Lint or Prettier packages were installed.
(The selection boolean if the user opted to install the packages also also needs to be captured from the CLI input/prompt)

### End to End tests
1. Checks if the localization content is working, including the language toggle button.
2. Checks the functionality of the search bar.

## Run the Tests
Run the command `npm test` or `npm run test` in terminal to run all the tests in the test directory.

## Next Step
To manage the active URL that needs to be tested, localhost, stage, or production.
