import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      hideNoControlsWarning: true,
    expanded: true,
    exclude: /^data-/i,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      transformSource(source, storyId) {
        // Fix for @ariaProperty decorator effect, which displays aria properties with data- prefix in source code
        // Replaces all "data-" attributes with unprefixed values
        return source.replace(/\sdata-/gm, " ");
      },
    },
  },
};

export default preview;
