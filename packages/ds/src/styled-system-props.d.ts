import { StyledComponentProps } from 'styled-components';

type StyledSystemProps<
  C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  P extends object
> = StyledComponentProps<C, any, P, never> & {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
