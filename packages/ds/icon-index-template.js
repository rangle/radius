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

  return `${importEntries.join('\n')}

export const Icons = {
  ${compoundExportEntries.join(',\n  ')}
};`;
}

module.exports = indexTemplate;
