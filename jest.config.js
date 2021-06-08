module.exports = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx"
  }
}