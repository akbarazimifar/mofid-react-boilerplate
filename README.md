# Getting Started with Mofid React Boilerplate <!-- omit in toc -->

This project is based on [Create React App](https://github.com/facebook/create-react-app) with some other pre-configured libraries and packages to facilitate the boring process of starting a project.

This is a boilerplate which is supposed to be a starter template for front-end teams of [Mofid Securities](emofid.ir) company.

> **Note**: This branch DOES NOT support TypeScript, If you wanna have TypeScript support, use `typescript` branch.

## Table of Content <!-- omit in toc -->

- [Installed Packages](#installed-packages)
  - [General Libraries](#general-libraries)
  - [State Management Libraries](#state-management-libraries)
  - [Style Libraries](#style-libraries)
  - [Form Management Library](#form-management-library)
  - [Lint Libraries and Dev Dependencies](#lint-libraries-and-dev-dependencies)
  - [Testing Libraries](#testing-libraries)
- [Important Configs and Notes](#important-configs-and-notes)
- [Boilerplate Structure](#boilerplate-structure)
  - [APIs](#apis)
  - [Components](#components)
  - [Constants](#constants)
  - [Hooks](#hooks)
    - [`useDevice`](#usedevice)
  - [Pages](#pages)
  - [Store](#store)
  - [Utils](#utils)
    - [`date`](#date)
- [Common Available Scripts](#common-available-scripts)
- [New Available Scripts](#new-available-scripts)
- [Learn More](#learn-more)

## Installed Packages

This project has some installed packages. Here is the list of them:

### General Libraries

- `axios` as HTTP client
- `react-responsive` with `useDevice` hook
- `react-router-dom`
- `react-helmet`
- [`dayjs`](https://www.npmjs.com/package/dayjs) with [`jalaliday`](https://www.npmjs.com/package/jalaliday) as jalali and georgian date package
- [`persian-tools2`](https://www.npmjs.com/package/persian-tools2) as persian utility library
- [`@sentry/react`](https://www.npmjs.com/package/@sentry/react) as bug and performance tracking library (service)

### State Management Libraries

- `redux`
- `react-redux`
- `redux-saga`
- `redux-logger`
- `redux-devtools-extension`

### Style Libraries

- `ant-design`
- `styled-components`

### Form Management Library

- `react-hook-form`

### Lint Libraries and Dev Dependencies

- `eslint` with `react-app`, `airbnb` and `prettier` config
- `husky` with `lint-staged` which is configured based on `eslint` and `prettier`
- [`cross-env`](https://www.npmjs.com/package/cross-env) (to solve env var issue between OSs)

### Testing Libraries

- `jest` as test runner
- [`@testing-library/react`](https://www.npmjs.com/package/@testing-library/react) as React DOM testing utilites.

> Note: Altough we haven't config any API mocking library, but it's recommended to use [`msw`](https://www.npmjs.com/package/msw) for this purpose and not using `fetch` or other real http client for testing APIs.

## Important Configs and Notes

- [`craco`](https://www.npmjs.com/package/@craco/craco) is installed to customize webpack configs.

- As it's mentioned earlier, this branch doesn't support TypeScript, but there is a `typescript` branch that supports it.

- The boilerpalte supports [`Less`](http://lesscss.org/). It's configured in `craco.config.js`.

- absolute path has configured in `craco.config.js` (webpack config), `jsconfig.json`(IDE config) and `eslintrc.js` (ESLint config) (e.g., `@utils` path points to `./src/utils` directory). this config prevents **relative path hell**!

- `husky` with `lint-stages` is configured in the boilerplate which runs `eslint` and `prettier` commands as git `pre-commit` command.

- The boilerplate uses `CRLF` as default end-of-line format. It's configured in `eslintrc.js`, `eslintrc.js` and prettier config in `package.json`. (Constant end-of-line format is better than tormenting inconsistencies. ????). You may want to configure your IDE default end-of-line format manually. `vscode` end-of-line is configured in `.vscode/settings.json`

- The boilerplate uses [`kebab-case`](https://en.wiktionary.org/wiki/kebab_case) as default file-naming convension.

## Boilerplate Structure

### APIs

There is a `index.js` file which contains axios interceptor. You can config axios and maniputlate request and response with interceptor.

### Components

All componennts are there, such as customized `antd` components with `styled-components` which exist in `customized` directory.

Each component directory, could have a `__test__` directory beside itself and all test files related to that component can be added there.

### Constants

all constants file exect store constants exist in `constants` directory such as general routing path and width constants

### Hooks

Hooks of project should be added to this direcotry. There is a common `useDevice` hook in this directory.

#### `useDevice`

this hook uses `react-responsive` under the hood and provide some properties which can be used to determine the user device resolution and make decision based on them.

### Pages

All pages of the app should be added here. main pages categories specifes with directory name (such as `app.com/samples`)

Each page directory, could have a `__test__` directory beside itself and all test files related to that page can be added there.

Also all `reducers`, `actions`, `sagas` and `constants` files related to a page, exist in its own directory (checkout an example in `./src/pages/auth/auth`).

### Store

store configuration, root reducer and root saga is here.

### Utils

General utility functions should be added to this directory.

#### `date`

This file configs `dayjs` with `jalaliday` as jalali plugin for it. Also contains some utility functions of them.

---

## Common Available Scripts

In the project directory, you can run:

### `yarn start` <!-- omit in toc -->

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test` <!-- omit in toc -->

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build` <!-- omit in toc -->

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject` <!-- omit in toc -->

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## New Available Scripts

### `yarn lint` <!-- omit in toc -->

run `eslint` on all files of `src` directory which ends with `js`, `jsx` and `json`

### `yarn lint:fix` <!-- omit in toc -->

run `eslint` on whole project with `--fix` option.

### `yarn prettier` <!-- omit in toc -->

run `prettier` on all files of `src` directory.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting <!-- omit in toc -->

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size <!-- omit in toc -->

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App <!-- omit in toc -->

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration <!-- omit in toc -->

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment <!-- omit in toc -->

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify <!-- omit in toc -->

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
