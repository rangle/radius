export default {
  light: {
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
      body:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading: 'inherit',
      monospace: 'Menlo, monospace',
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    colors: {
      text: '#000',
      background: '#fff',
      primary: '#07c',
      secondary: '#30c',
      muted: '#f6f6f6',
    },
    styles: {
      root: {
        fontFamily: 'body',
        lineHeight: 'body',
        fontWeight: 'body',
      },
      h1: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 5,
      },
      h2: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 4,
      },
      h3: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 3,
      },
      h4: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 2,
      },
      h5: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 1,
      },
      h6: {
        color: 'text',
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 0,
      },
      p: {
        color: 'text',
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body',
      },
      a: {
        color: 'primary',
      },
      pre: {
        fontFamily: 'monospace',
        overflowX: 'auto',
        code: {
          color: 'inherit',
        },
      },
      code: {
        fontFamily: 'monospace',
        fontSize: 'inherit',
      },
      table: {
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0,
      },
      th: {
        textAlign: 'left',
        borderBottomStyle: 'solid',
      },
      td: {
        textAlign: 'left',
        borderBottomStyle: 'solid',
      },
      img: {
        maxWidth: '100%',
      },
    },
  },
  dark: {
    colors: {
      text: '#fff',
      background: '#060606',
      primary: '#3cf',
      secondary: '#e0f',
      muted: '#191919',
      highlight: '#29112c',
      gray: '#999',
      purple: '#c0f',
    },
    fonts: {
      body:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading: 'inherit',
      monospace: 'Menlo, monospace',
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
    fontWeights: {
      body: 400,
      heading: 700,
      display: 900,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.25,
    },
    textStyles: {
      heading: {
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'heading',
      },
      display: {
        variant: 'textStyles.heading',
        fontSize: [5, 6],
        fontWeight: 'display',
        letterSpacing: '-0.03em',
        mt: 3,
      },
    },
    styles: {
      Container: {
        p: 3,
        maxWidth: 1024,
      },
      root: {
        fontFamily: 'body',
        lineHeight: 'body',
        fontWeight: 'body',
      },
      h1: {
        variant: 'textStyles.display',
      },
      h2: {
        variant: 'textStyles.heading',
        fontSize: 5,
      },
      h3: {
        variant: 'textStyles.heading',
        fontSize: 4,
      },
      h4: {
        variant: 'textStyles.heading',
        fontSize: 3,
      },
      h5: {
        variant: 'textStyles.heading',
        fontSize: 2,
      },
      h6: {
        variant: 'textStyles.heading',
        fontSize: 1,
      },
      a: {
        color: 'primary',
        '&:hover': {
          color: 'secondary',
        },
      },
      pre: {
        variant: 'prism',
        fontFamily: 'monospace',
        fontSize: 1,
        p: 3,
        color: 'text',
        bg: 'muted',
        overflow: 'auto',
        code: {
          color: 'inherit',
        },
      },
      code: {
        fontFamily: 'monospace',
        color: 'secondary',
        fontSize: 1,
      },
      inlineCode: {
        fontFamily: 'monospace',
        color: 'secondary',
        bg: 'muted',
      },
      table: {
        width: '100%',
        my: 4,
        borderCollapse: 'separate',
        borderSpacing: 0,
        'th,td': {
          textAlign: 'left',
          py: '4px',
          pr: '4px',
          pl: 0,
          borderColor: 'muted',
          borderBottomStyle: 'solid',
        },
      },
      th: {
        verticalAlign: 'bottom',
        borderBottomWidth: '2px',
      },
      td: {
        verticalAlign: 'top',
        borderBottomWidth: '1px',
      },
      hr: {
        border: 0,
        borderBottom: '1px solid',
        borderColor: 'muted',
      },
      img: {
        maxWidth: '100%',
      },
    },
    prism: {
      '.comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url': {
        color: 'gray',
      },
      '.comment': {
        fontStyle: 'italic',
      },
      '.property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable': {
        color: 'purple',
      },
      '.atrule,.attr-value,.keyword': {
        color: 'primary',
      },
      '.selector,.attr-name,.string,.char,.builtin,.inserted': {
        color: 'secondary',
      },
    },
  },
};
