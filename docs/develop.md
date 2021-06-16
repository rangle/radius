# Getting Started — Develop

**Clone repo**

```sh
git clone --depth=1 https://github.com/rangle/rangle-design-system.git <YOUR_PROJECT_NAME>
```

or **Creating a repository from the template**

On GitHub, navigate to the [main page](https://github.com/rangle/radius) of the repository. Above the file list, click _Use this template_ button.

**Install Yarn**, for more options see <https://legacy.yarnpkg.com/en/docs/install#mac-stable>

```sh
curl -o- -L https://yarnpkg.com/install.sh | bash
```

**Install Dependencies**. This project is using [Workspaces](https://legacy.yarnpkg.com/en/docs/workspaces). Yarn will install dependencies for all the packages. Make sure your node version is `>=13.2.0`.

```sh
yarn
```

**Build & Run Storybook**

```sh
yarn workspace ds build
yarn workspace ds storybook
```

Storybook is now running at `http://localhost:6006/`!

### Project Structure

This project is using [Workspaces](https://legacy.yarnpkg.com/en/docs/workspaces) and has two packages:

### ds

The component library bootstrapped using [TSDX](https://github.com/jaredpalmer/tsdx). TSDX is a zero-config CLI that helps you develop, test and publish TypeScript packages. It handles all the configuration and set up for:

- Bundling your code with [Rollup](https://rollupjs.org/guide/en/) and outputs multiple module formats, including type definitions
- Storybook with live reload / watch-mode
- Linting using eslint with Prettier
- Unit testing with Jest

### app

A Sample Application bootstrapped using [Create React App](https://create-react-app.dev). It includes a kitchen sink of all components in the component library. The goal of the sample app is to test the consumption of the component library and test server side-rendering using [react-snapshot](https://github.com/geelen/react-snapshot).

**Run Sample App**

```sh
yarn workspace app start
```

**Build and Test SSR**

```sh
yarn workspace app build
```

The `app` package is meant to be disposable and can be replaced by your app. Alternatively, you could copy the `ds` package into an existing monorepo.

### Continuous Integration

> Continuous integration is a practice that encourages developers to integrate their code into a master branch of a shared repository early and often. Instead of building out features in isolation and integrating them at the end of a development cycle, code is integrated with the shared repository by each developer multiple times throughout the day.
> — [Introduction to CircleCI](https://circleci.com/docs/2.0/about-circleci/#section=welcome)

The project is configured to do the following:

- Build the component library
- Run all unit tests in the component library package
- Build and test SSR for the demo app
- Run visual tests using [Chromatic](http://chromaticqa.com)

The Chromatic task reads the `CHROMATIC_APP_CODE` [environment variable](https://circleci.com/docs/2.0/env-vars/#using-bash_env-to-set-environment-variables), which must be configured in your CircleCI dashboard.
