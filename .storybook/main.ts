import type { StorybookConfig } from "@storybook/react-vite";
const {
  mergeConfig
} = require("vite");
const path = require("path");
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)", "../src/**/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y", "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag"
  },
  async viteFinal(config) {
    if (process.env.NODE_ENV === "production") {
      config.base = "button-react-ds"; // base URL for production
    }

    if (process.env.BASE_URL) {
      config.base = process.env.BASE_URL;
    }
    return mergeConfig(config);
  }
};
export default config;