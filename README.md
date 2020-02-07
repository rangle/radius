[![Netlify Status](https://api.netlify.com/api/v1/badges/c05b0d40-0360-436e-9985-7d1ba3f9332c/deploy-status)](https://app.netlify.com/sites/rangle-ds/deploys)

# Rangle Design System

### 🚀 Quick start

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

1.  **Run Storybook**

    ```sh
    yarn workspace ds storybook
    ```

    Your site is now running at `http://localhost:6006/`!

    Make sure your node version is >=13.2.0

1. **Run Sample App (Created using CRA)**

    ```sh
    yarn workspace app start
    ```

    Your site is now running at `http://localhost:3000/`!
