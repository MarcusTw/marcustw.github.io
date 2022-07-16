import { themes } from '@storybook/theming';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'normal',
    // Override the default dark theme
    dark: { ...themes.dark },
    // // Override the default light theme
    light: { ...themes.normal },
    darkClass: 'lights-out',
    lightClass: 'lights-on',
  },
};
