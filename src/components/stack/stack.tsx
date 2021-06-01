import styled from 'styled-components';
import { system } from 'styled-system';
import css from '@styled-system/css';
import { Flex, FlexProps } from '../flex';

type align = 'start' | 'end' | 'center';

const getAlignment = (value: align) =>
  value === 'start' || value === 'end' ? 'flex-' + value : value;

const stack = system({
  axis: {
    property: 'flexDirection',
    transform: value => (value === 'horizontal' ? 'row' : 'column'),
  },
  alignment: {
    property: 'justifyContent',
    transform: getAlignment,
  },
  distribution: {
    property: 'alignItems',
    transform: getAlignment,
  },
});

export type StackProps = {
  axis?: 'horizontal' | 'vertical';
  space?: number | number[];
  alignment?: align;
  distribution?: align;
} & FlexProps;

export const Stack = styled(Flex)<StackProps>`
  ${stack}

  > * {
    ${props =>
      css({
        [props.axis === 'horizontal'
          ? 'marginRight'
          : 'marginBottom']: props.space,
      })(props)}
  }

  > *:last-child {
    ${props =>
      css({
        [props.axis === 'horizontal' ? 'marginRight' : 'marginBottom']: 0,
      })(props)}
  }
`;

Stack.defaultProps = {
  axis: 'horizontal',
  space: 3,
};
