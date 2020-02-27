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
      brand: {
        primary: '#012E86',
        secondary: '#0064D9',
        accent: '#FDB447',
        muted: '#C6DAF7',
      },
      ui: {
        primary: '#262626',
        secondary: '#757575',
        disabled: '#DEDEDE',
        error: '#D0421B',
        success: '#138000',
      },
      bg: {
        primary: '#FFFFFF',
        secondary: '#F1F1F1',
        disabled: '#DEDEDE',
      },
      text: {
        primary: '#262626',
        secondary: '#757575',
        disabled: '#9C9C9C',
        inverse: '#FFFFFF',
        error: '#D0421B',
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
      brand: {
        primary: '#298DFF',
        secondary: '#0470EE',
        accent: '#FDB447',
        muted: '#B7CBEA',
      },
      ui: {
        primary: '#FFFFFF',
        secondary: '#F1F1F1',
        disabled: '#757575',
        error: '#FD6F47',
        success: '#1CBD00',
      },
      bg: {
        primary: '#262626',
        secondary: '#676767',
        disabled: '#757575',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#F1F1F1',
        disabled: '#DEDEDE',
        inverse: '#262626',
        error: '#FD6F47',
      },
    },
  },
};
