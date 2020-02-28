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
        accent: '#DB7C00',
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
        1: '#FFFFFF',
        2: '#FFFFFF',
        3: '#F1F1F1',
        disabled: '#DEDEDE',
      },
      text: {
        primary: '#262626',
        secondary: '#757575',
        disabled: '#9C9C9C',
        inverse: '#FFFFFF',
        error: '#D0421B',
        success: '#138000',
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
        secondary: '#7CAEE8',
        accent: '#FDB447',
        muted: '#B7CBEA',
      },
      ui: {
        primary: '#FFFFFF',
        secondary: '#A1A1A1',
        disabled: '#242424',
        error: '#FF4D4D',
        success: '#1CBD00',
      },
      bg: {
        1: '#111111',
        2: '#262626',
        3: '#3C3C3C',
        disabled: '#242424',
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#A1A1A1',
        disabled: '#525252',
        inverse: '#262626',
        error: '#FF4D4D',
        success: '#1CBD00',
      },
    },
  },
};
