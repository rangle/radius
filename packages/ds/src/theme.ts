export const fonts = {
  body: '"Helvetica Neue", Roboto, sans-serif',
  heading: '"Roboto", sans-serif',
  monospace: 'Menlo, monospace',
};

export const fontSizes = [
  '0.625rem',
  '0.75rem',
  '1rem',
  '1.125rem',
  '1.25rem',
  '1.5rem',
  '1.75rem',
  '2rem',
  '2.5rem',
  '3rem',
];

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5,
};

export const letterSpacings = {
  default: 'normal',
  tracked: '0.04em',
};

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
export const sizes = [8, 16, 32, 64, 128, 256, 512, 768, 1024, 1536];

export const breakpoints = ['40em', '56em', '64em'];

export default {
  light: {
    space,
    sizes,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    breakpoints,
    colors: {
      primary: '#262626',
      secondary: '#676767',
      accent: '#2A748F',
      muted: '#B7DCEA',
      disabled: '#DEDEDE',
      inverse: '#FFFFFF',
      error: '#D0421B',
      bg: {
        primary: '#FFFFFF',
        secondary: '#F1F1F1',
      },
      text: {
        primary: '#262626',
        secondary: '#676767',
        placeholder: '#A5A5A5',
      },
    },
  },
  dark: {
    space,
    sizes,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    breakpoints,
    colors: {
      primary: '#FFFFFF',
      secondary: '#F1F1F1',
      accent: '#5696B2',
      muted: '#2A748F',
      disabled: '#676767',
      inverse: '#262626',
      error: '#FD6F47',
      bg: {
        primary: '#262626',
        secondary: '#A5A5A5',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#F1F1F1',
        placeholder: '#DEDEDE',
      },
    },
  },
};
