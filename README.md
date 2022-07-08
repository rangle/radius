# Design System

This is the home of your Design System

## Use of this DS

The components in this REPO where based off the designs found [here](https://figma.com).

Please review the full docs and components at [storybook](https://storybook.com)

These components are published to [npm](https://www.npmjs.com/).


## Contribute to this DS

Before contributing, please review the existing components and instructions.

### Install
TODO: talk about why we're using npm

Clone this repo then run: 

```bash
npm i
```

To preview your local components, run storybook:
```bash
npm run storybook
```

### What are you adding?

* Before adding components please be sure that your added functionality is not already being done by an other component.
* Before editing/adding to a component, be aware that adding features may bloat the component it and become difficult to use for future/other developers.

The components are in src/components/*

For each new component: 
 * Add set of tests for the new component *.test.txs
 * ADD Storybook *.story.tsx
 * Update /src/components/index.ts to include the new component

Considerations:
 * Accessibility
 * How the editing of tokens would affect the component


## Structure

#### What's Inside
```
.
├── .storybook/       // storybook config files
├── .circleci/        // CI config, not required. You can remove this and add your own
├── demo              // old, legacy demo that works on localhost:3000
├── dist
├── src/
│   ├── assets/       // contains images, fonts, etc
│   ├── components/
│   ├── docs/         // design tokens as .mdx
│   └── styles/
└── typings/          // global type definitions
└── package.json
└── README.md
└── rollup.config.json
└── tsconfig.json
```

### Framework
React - 17.0.2

TODO: add prettier
TODO: add Linter

Code quality is set up for you with `prettier`, `husky`, and `lint-staged`. Adjust the respective fields in `package.json` accordingly.


### Typescript
Keep your types within each component. Do not edit the global custom.d.ts (unless you are adding global types).

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`.

### Build tool
TODO: talk about why we're using rollup vs vite, webpack?

Rollup is currently building our component library. The details can be viewed in rollup.config.js.

### Styling
TODO: How would you add scss support?
TODO: 

We're using [styled-components](https://github.com/styled-components/styled-components) to create the css for our components.
Most of our values in css are stored at :root css variables.
Each component should map the global css variables to it's own local variables.


#### Tokens
TODO: the tokens should be mapped, and not directly referenced.
TODO: the tokens should be exported from an example figma?

The tokens can be auto generated from `npx raidus styles`.
When updating tokens make sure to not overwrite the styles being auto generated.

### Testing
TODO: extend our unit tests to be more than just creation, hover, click should also be tested.

We're using jest for testing. These test can be run with `npm run test`.

### Continuous integration
TODO: add links where they can view this CI running, and what is required for accessing it.

We use Circle CI to run tests. Details of circle Ci you can view the yml in .circleci/config.yml
The use of the CI should be used to run tests.

### GitHub Actions
TODO: add these back 

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [size-limit](https://github.com/ai/size-limit)


### Storybook
TODO: Storybook is currently outdated, additional functionality has been added to storybook that should be reflected here.

Run in the terminal:

```bash
npm run storybook
```

This loads the stories from `./stories`. When the components are updated, the stories will automatically reload. 

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.

### Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

### Bundle analysis
TODO: bundle size is currently broken

Calculates the real cost of your library using [size-limit](https://github.com/ai/size-limit) with `npm run size` and visulize it with `npm run analyze`.

## Demo
TODO: The demo is out of date and needs to be updated, these including updating the symlinking feature, and updating Parcel.

To run the demo:

```bash
cd demo
npm i # or yarn to install dependencies
npm start # or yarn start
```

The default example imports and live reloads whatever is in `/dist`. **No symlinking required**, we use [Parcel's aliasing](https://parceljs.org/module_resolution.html#aliases).

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.


## Publishing to NPM

We recommend using [np](https://github.com/sindresorhus/np).



















