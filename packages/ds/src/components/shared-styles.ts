import { css } from 'styled-components';

export const focusRing = css`
  outline: 1px solid ${props => props.theme.colors.ui.outline};
  outline-offset: 1px;
`;
