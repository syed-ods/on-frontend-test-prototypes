# my-frontend-project

Built with the [Ontario.ca Frontend toolkit](https://github.com/ongov/ontario-frontend).

## Project description

This ontario-frontend project has test prototypes for the end user building applications using our toolkit.

## Test Directory and Files
- 📂 src
    - 📂 tests
        - 📂 unit
            - *packages.spec.js*
        - 📂 integration
            - *app.spec.js*

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

## Run the Tests
Run the command `npm test` in terminal to run all the tests in the test directory.
