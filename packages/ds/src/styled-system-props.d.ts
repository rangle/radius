import { StyledComponentProps } from 'styled-components';

/**
 * From https://spectrum.chat/styled-components/general/typescript-styled-system-styled-components~5593dbf2-7588-4c6d-9e76-b4eadd77ec90
 */
type StyledSystemProps<
  C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  P extends object
> = StyledComponentProps<C, any, P, never> & {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
};
