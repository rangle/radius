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
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor" width="1em" height="1em" ref={svgRef} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /><path d="M0 0h24v24H0z" fill="none" /></svg>;
});
const SvgExpandMore = styled(SvgComponent)<IconProps>({
  flex: 'none',
  verticalAlign: 'middle'
}, compose(space, color, layout, typography));
export default SvgExpandMore;