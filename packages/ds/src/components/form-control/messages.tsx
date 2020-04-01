import styled from 'styled-components';
import { Text, TextProps } from '../text';

export const Hint = styled(Text).attrs({
  variant: 'hint',
  color: 'text.theme',
})<TextProps>``;

export const Error = styled(Text).attrs({
  variant: 'hint',
  color: 'text.error',
})<TextProps>``;
