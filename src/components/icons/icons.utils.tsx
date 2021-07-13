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
  TypographyProps,
} from 'styled-system';
import { Compact } from '../../utils/common.utils';
export type IconProps = Compact<
  SpaceProps & ColorProps & LayoutProps & TypographyProps
>;

let lastId = 0;

export const uuid = () => {
  lastId++;
  return `icon-${lastId}`;
};

export const createSvgIcon = (Path: React.FC) => {
  const SvgComponent = forwardRef<
    SVGSVGElement,
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >(({ title, ...props }, svgRef) => {
    const [titleId] = useState(() => (title ? uuid() : undefined));
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        fill="currentcolor"
        ref={svgRef}
        aria-labelledby={titleId}
        {...props}
      >
        {title ? <title id={titleId}>{title}</title> : null}
        <Path />
      </svg>
    );
  });

  return styled(SvgComponent)<IconProps>(
    {
      flex: 'none',
      verticalAlign: 'middle',
    },
    compose(space, color, layout, typography)
  );
};
