function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });

  return typeScriptTpl.ast`
    import React, { forwardRef, useState } from 'react';
    import styled from 'styled-components';
    import {
      compose,
      space,
      color,
      layout,
      typography,
      SpaceProps,
      ColorProps,
      LayoutProps,
      TypographyProps
    } from 'styled-system';
    import { uuid } from './uuid';

    export type IconProps = SpaceProps & ColorProps & LayoutProps & TypographyProps;

    const SvgComponent = forwardRef<
      SVGSVGElement,
      React.SVGProps<SVGSVGElement> & { title?: any; }
    >(({ title, ...props }, svgRef) => {
        const [titleId] = useState(() => (title? uuid(): undefined));

        return (
          ${jsx}
        )
      }
    );

    const ${componentName} = styled(SvgComponent)<IconProps>({
        flex: 'none',
        verticalAlign: 'middle',
      },
      compose(space, color, layout, typography)
    );

    export default ${componentName};
  `;
}

module.exports = template;
