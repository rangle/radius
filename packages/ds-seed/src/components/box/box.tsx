import styled from 'styled-components'
import { compose, space, SpaceProps, color, ColorProps, typography, TypographyProps, variant } from 'styled-system'

type BoxProps = ColorProps & SpaceProps & TypographyProps & { variant: "primary" | "secondary" };

export const Box = styled('div')<BoxProps>(
  variant({
    variants: {
      primary: {
        color: 'white',
        bg: 'salmon',
        mb: 3,
        p: 3,
        fontSize: 3,
      },
      secondary: {
        color: 'white',
        bg: 'powderblue',
        mb: 4,
        p: 4,
        fontSize: 4,
      },
    },
  }),
  compose(
    space,
    color,
    typography,
  )
);