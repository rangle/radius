import styled from 'styled-components';
import { Grid, GridProps } from '../grid';

export const Field = styled(Grid).attrs({
  gridGap: 1,
  role: 'group',
})<GridProps>``;

export const FieldSet = styled(Grid).attrs({
  gridGap: 1,
  as: 'fieldset',
})<GridProps>``;

FieldSet.defaultProps = {
  border: 0,
  p: 0,
  ml: 0,
  mr: 0,
};
