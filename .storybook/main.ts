import type { StorybookConfig } from "@storybook/react-vite";
const path = require("path");
import { loadConfigFromFile, mergeConfig } from 'vite';
const config: StorybookConfig = {
  stories: ["../src/**/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    const { config: libConfig } = await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.ts")
    );
    if (process.env.NODE_ENV === "production") {
      config.base = "button-react-ds"; // base URL for production
    }
    return mergeConfig(config, {plugins: libConfig.plugin
    });
  },
};
export default config;
