import { css } from 'styled-components';

export const focusRing = css`
  outline: 1px solid ${props => props.theme.colors.brand.accent};
  outline-offset: 1px;
`;
