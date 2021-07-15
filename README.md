# Movies Query Project

This is a simple movie query project using [vue 3](https://v3.vuejs.org/) + [vitejs](https://vitejs.dev/) + [Typescript](https://www.typescriptlang.org/)

 unit test: [Jest](https://jestjs.io/) + [testing library](https://testing-library.com/docs/vue-testing-library/intro/)

 e2e test: [cypress](https://www.cypress.io/)

 styling: [tailwind](https://tailwindcss.com/)

## Setup
this project uses node version ^14 , make sure yo have installed it via `node -v `

in case of multiple node version please follow the instructions and install [nvm](https://github.com/nvm-sh/nvm)

## Getting started
1. clone the repo and `cd <cloned root directory>`
2. create a new file in the project root directory with the name `.env.local` fill it with the required data as shown in the `.env.example`
2. run `yarn`
3. run `yarn dev`
4. visit [localhost:3000](http://localhost:3000/) in ur browser
4. good to go 🎉

## scripts

`yarn dev`  start dev server

`yarn build`  build for production

`yarn serve`  locally preview production build

`yarn lint`  lint the project

`yarn lint:fix`  lint the project and fixing fixable issues

`yarn test` run all unit tests

`yarn test:watch` run all unit tests with watch mode

`yarn test:coverage` run all unit tests and generate coverage report

`yarn cypress` to open cypress e2e test runner

`yarn cypress:ci` to run cypress e2e test runner in headless mode as if in CI

## Notes

* pre-commit hooks should run and check your code coverage and linting issue to ensure quality , please turn on your ESLint Plugin and autoformat on save on your IDE for more seamless development experience.

* pre-commit hooks are equivalent to running
  1. `yarn lint:fix`
  2. `yarn test`
* unit test code coverage config is set in `jest.config.js` make sure to keep a good coverage and not hit the limit

* use coverage report as a compass while writing unit tests, run `yarn test:coverage` and the coverage report will be generated inside `<application-root>/coverage`

* style variables are defined in `tailwind.config.js` thus always use variables instead of custom colors EX: `bg-primary-100`.
