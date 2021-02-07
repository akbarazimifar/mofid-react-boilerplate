🚧 NOTE: This Documentation is under construction 🚧

---

# Getting Started with Mofid React Boilerplate

This project is based on [Create React App](https://github.com/facebook/create-react-app).

This is a boilerplate which is supposed to be a starter template for front-end teams of [Mofid Securities](emofid.ir) company.

> **Note**: This boilerplate supports TypeScript files, but base files and components are written in JavaScript.

## Table of Content

- [Installed Packages](#Installed-Packages)
  - [General Libraries](#General-Libraries)
  - [State Management Libraries](#State-Management-Libraries)
  - [Style Libraries](#Style-Libraries)
  - [Form Management Library](#Form-Management-Library)
  - [Lint Libraries and Dev Dependencies](#Lint-Libraries-and-Dev-Dependencies)
- [Boilerplate Structure](#Boilerplate-Structure)
  - [Hooks](#Hooks)
    - `useDevice`
  - [Utils](#Utils)
    - `date`
- [Other Configs](#Other-Configs)
- [Available Scripts](#Available-Scripts)
- [Learn More](#Learn-More)

## Installed Packages

This project has some installed packages to facilitate the boring process of starting a project. Here is the list of them:

> **Note**: [`craco`](https://www.npmjs.com/package/@craco/craco) is installed to customize webpack configs.

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

- `eslint` with `airbnb` and `prettier`
- `husky` with `lint-staged` which is configured based on `eslint` and `prettier`
- [`cross-env`](https://www.npmjs.com/package/cross-env)(to solve env var issue between OSs)

## Boilerplate Structure

### APIs

There is a `index.js` file which contains axios interceptor. You can config axios and maniputlate request and response with interceptor.

### Containers

### Constants

### Hooks

Hooks of project should be added to this direcotry. There is a common `useDevice` hook in this directory

#### `useDevice`

this hook uses `react-responsive` under the hood and provide some properties which can be used to determine the user device resolution and make decision based on them.

### Utils

#### `date`

This file configs `dayjs` with `jalaliday` as jalali plugin for it. Also contains some utility functions of them.

## Other Configs

- absolute path has configured in `craco.config.js` (webpack config), `jsconfig.json`(IDE config) and `eslintrc.js` (ESLint config) to replace and recognize `@utils` path as `./src/utils` based on root directory. this config prevents **relative path hell**!

- Less has been configured in `craco.config.js`. Now the boilerpalte supports Less.

---

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
