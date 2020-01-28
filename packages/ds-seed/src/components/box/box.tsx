import styled from 'styled-components'
import { compose, space, SpaceProps, color, ColorProps, typography, TypographyProps } from 'styled-system'

type BoxProps = ColorProps & SpaceProps & TypographyProps;

const Box = styled('div')<BoxProps>(
  compose(
    space,
    color,
    typography,
  )
);

export default Box;