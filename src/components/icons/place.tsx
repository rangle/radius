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
  return <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24" width="1em" fill="currentcolor" ref={svgRef} aria-labelledby={titleId} {...props}>{title ? <title id={titleId}>{title}</title> : null}<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" /><path d="M0 0h24v24H0z" fill="none" /></svg>;
});
const SvgPlace = styled(SvgComponent)<IconProps>({
  flex: 'none',
  verticalAlign: 'middle'
}, compose(space, color, layout, typography));
export default SvgPlace;