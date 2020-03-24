[![Netlify Status](https://api.netlify.com/api/v1/badges/c05b0d40-0360-436e-9985-7d1ba3f9332c/deploy-status)](https://app.netlify.com/sites/radius-ds/deploys) [![rangle](https://circleci.com/gh/rangle/radius.svg?style=svg)](https://app.circleci.com/pipelines/github/rangle/radius)

# Radius Design System Kit

The Radius is an opinionated assemblage of open-source tools and libraries that allow you to accelerate your design system. The choice of tools, their composition, and a set of foundational components guides you on how to build a constraint-based system.

[rangle.io/radius](https://rangle.io/radius)<br/>
[Figma File](https://www.figma.com/file/RqENxZWAzGiEWM7COch1Sc/Radius-Design-Kit)<br/>
[Storybook Docs](https://radius-ds.netlify.com)<br/>
[Chromatic](https://www.chromaticqa.com/library?appId=5e44874935df3b0022b9d890)


#### Are you using Radius? 
We would love to hear about how you are using Radius or any feedback or feature requests. Drop us an email at [varun@rangle.io](mailto:varun@rangle.io)

### 🚀 Quick start

Above the file list, click **Use this template** button. For more info see [Getting Started — Develop
](https://radius-ds.netlify.com/?path=/docs/foundations-get-started-develop--page)


### Building This Repo

1.  **Install Yarn**

    for more options see https://legacy.yarnpkg.com/en/docs/install#mac-stable

    ```sh
    curl -o- -L https://yarnpkg.com/install.sh | bash
    ```

1.  **Install Dependencies**

    This project is using [Workspaces](https://legacy.yarnpkg.com/en/docs/workspaces). Yarn will install dependencies for all the packages.

    ```sh
    yarn
    ```

1.  **Build & Run Storybook**

    ```sh
    yarn workspace ds build
    yarn workspace ds storybook
    ```

    Your site is now running at `http://localhost:6006/`!

    Make sure your node version is >=13.2.0

1. **Run Sample App (Created using CRA)**

    ```sh
    yarn workspace app start
    ```

    Your site is now running at `http://localhost:3000/`!
