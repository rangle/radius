import { lighten, darken } from 'polished';

export const fonts = {
  body: '"Arial", Roboto, sans-serif',
  heading: '"Arial", sans-serif',
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
  // regular: 400,
  // medium: 500,
  bold: 700,
};

export const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5,
  heading: 1.625,
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
        primary: '#FBCE07', // yellow
        secondary: '#DD1D21', // red
        accent: '#404040',
        // muted: '#C6DAF7',
      },
      ui: {
        primary: '#404040',
        secondary: '#757575',
        tertiary: '#CFCFCF',
        quaternary: '#D9D9D9',
        disabled: '#DEDEDE',
        outline: '#EFAC48',
        error: '#DD1D21',
        success: '#2FA569',
      },
      bg: {
        primary: '#FFFFFF',
        secondary: '#F7F7F7',
      },
      text: {
        primary: '#404040',
        secondary: '#FFFFFF',
        disabled: '#9C9C9C',
        inverse: '#404040', //can we remove this?
        theme: '#404040',
        error: '#DD1D21',
        success: '#2FA569',
      },
      highlights: {
        primaryHighlight: '#404040',
        primaryExtraHighlight: darken(0.05, '#404040'),
        bgHighlight: lighten(0.1, '#FBCE07'),
        secondaryExtraHighlight: lighten(0.4, '#DD1D21'),
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
        primary: '#FBCE07', // yellow
        secondary: '#DD1D21', // red
        accent: '#404040',
        muted: '#B7CBEA',
      },
      ui: {
        primary: '#404040',
        secondary: '#757575',
        tertiary: '#CFCFCF',
        quaternary: '#D9D9D9',
        disabled: '#242424',
        outline: '#EFAC48',
        error: '#DD1D21',
        success: '#2FA569',
      },
      bg: {
        primary: '#111111',
        secondary: '#262626',
      },
      text: {
        primary: '#404040',
        secondary: '#FFFFFF',
        disabled: '#525252',
        inverse: '#FFFFFF',
        theme: '#D9D9D9',
        error: '#FF4D4D',
        success: '#1CBD00',
      },
      highlights: {
        primaryHighlight: '#404040',
        // primaryHighlight: lighten(0.15, '#FBCE07'),
        primaryExtraHighlight: darken(0.05, '#404040'),
        bgHighlight: lighten(0.1, '#FBCE07'),
        secondaryExtraHighlight: lighten(0.4, '#DD1D21'),
      },
    },
  },
};
