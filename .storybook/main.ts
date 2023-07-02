import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
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
    if (process.env.NODE_ENV === "production") {
      config.base = "button-react-ds"; // base URL for production
    }

    // Modify Permissions-Policy header
    config.server = {
      ...config.server,
      headers: {
        'Permissions-Policy': 'interest-cohort=()',
      },
    };

    return config;
  },
};

export default config;
