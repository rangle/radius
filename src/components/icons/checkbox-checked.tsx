import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import { compose, space, color, layout, typography, SpaceProps, ColorProps, LayoutProps, TypographyProps } from 'styled-system';
import { uuid } from './uuid';
export type IconProps = SpaceProps & ColorProps & LayoutProps & TypographyProps;
const SvgComponent = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement> & {
  title?: any;
}>(({
  title,
  ...props
}, svgRef) => {
  const [titleId] = useState(() => title ? uuid() : undefined);
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentcolor" ref={svgRef} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>;
});
const SvgCheckboxChecked = styled(SvgComponent)<IconProps>({
  flex: 'none',
  verticalAlign: 'middle'
}, compose(space, color, layout, typography));
export default SvgCheckboxChecked;