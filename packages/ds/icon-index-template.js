/**
 * TODO: switch to @svgr/rollup once this PR is merged
 *    https://github.com/jaredpalmer/tsdx/pull/506
 */
const path = require('path');
const camelcase = require('camelcase');

function indexTemplate(files) {
  const compoundExportEntries = [];

  const importEntries = files.map(file => {
    const basename = path.basename(file, path.extname(file));
    const componentName = camelcase(basename, { pascalCase: true });

    compoundExportEntries.push(componentName);

    return `import { default as ${componentName} } from './${basename}';`;
  });

  return `    import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps
} from 'styled-system';

${importEntries.join('\n')}

export type IconProps = SpaceProps & ColorProps & LayoutProps & TypographyProps;

export const Icons = {
  ${compoundExportEntries.join(',\n  ')}
};`;
}

module.exports = indexTemplate;
