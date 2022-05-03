import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name?: string;
    borders: {
      [key: string]: string;
    };
    dropShadow: {
      [key: string]: string;
    };
    spacing: {
      [key: string]: string;
    };
    typography: {
      [key: string]: string;
    };
    colors: {
      brand: {
        [key: string]: string;
      };
      ui: {
        [key: string]: string;
      };
      text: {
        [key: string]: string;
      };
    };
  }
}
