# Elements Design System

This is the home of XXXXXX Design System

### How to contribute to this DS

To get started you can just clone the repository.

The rough folder structure is as follows:

```bash
/.circleci # workflow for testing
/config # configuration files (eg. jest )
/.storybook # storybook configuration
/demo # example project using the created components
/src # 
```

## Commands

```bash
npm i # installs all packages
```

```bash
npm run build # builds according to the rollup.config.js file. Will be build to `dist/`
```

### Storybook

Run inside another terminal:

```bash
npm run storybook
```

This loads all stories from `/src/components/**` and `/src/docs/**`.

To do a one-off build, use `npm run build:storybook`.

### Linting

```bash
npm run lint:ci # run all lint checks
```

or

```bash
npm run lint # run eslint
```

```bash
npm run ls-lint # run ls-lint
```

### Testing

```bash
npm run test # run tests for all packages
```

```bash
npm run test:watch # run all tests in watch mode
```

```bash
npm run test -- --scope=button # run tests for the package named "button"
```

## Adding new components

To make creating new components easier, templates have been created using [Plop](https://plopjs.com/documentation/#getting-started) in the `templates` folder.

To generate a new component, simply run the following command:

```bash
npm run generate:component
```

Answer the prompts (eg. Component name, and element type), and it will create the new component (file structure and boilerplate) for you.

These templates are of course subject to change and are just a starting point. Please update them as necessary to keep them up-to-date.

## Configuration

### 
ls-linter
    lint the file structure
eslint
    lint the files 
    airbnb  https://www.npmjs.com/package/eslint-config-airbnb - has a good set of rules
    jest https://www.npmjs.com/package/eslint-plugin-jest
    prettier https://github.com/prettier/eslint-plugin-prettier
    jam3 https://www.npmjs.com/package/eslint-plugin-jam3
    airbnb https://www.npmjs.com/package/eslint-config-airbnb
    
tsconfig
rollup
jest


Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.

### Bundle analysis

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

## Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [size-limit](https://github.com/ai/size-limit)

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Publishing to NPM

We recommend using [np](https://github.com/sindresorhus/np).
