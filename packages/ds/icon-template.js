function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });

  return typeScriptTpl.ast`
    import React, { forwardRef } from 'react';
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

    export type IconProps = SpaceProps & ColorProps & LayoutProps & TypographyProps;

    const SvgComponent = forwardRef<
      SVGSVGElement,
      React.SVGProps<SVGSVGElement> & {
        title?: any;
        titleId?: any;
      }
    >(({ title, titleId, ...props }, svgRef) => (
        ${jsx}
      )
    );

    const ${componentName} = styled(SvgComponent)<IconProps>({
        flex: 'none'
      },
      compose(space, color, layout, typography)
    );

    export default ${componentName};
  `;
}

module.exports = template;
