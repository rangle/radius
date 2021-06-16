# Creating Components

Components allow you to split the UI into independent and reusable pieces. However, not all components are built the same way. A component might be created using styled-components or a combination of styled-components and Styled System or as a composition of other components. Radius uses the following hierarchy to reason as to what technique to use for creating components.

<img src="../src/imgs/component-hierarchy.svg" />

- **Elements** are basic reusable building blocks of the system.

- **Patterns** are reusable building blocks that are comprised of other building blocks.

- **Features** are a set of patterns, elements, & styles that come together to support a specific user task. Sometimes referred to as container components.

- **Layouts** are how features come together to form a page.

The design system would generally be limited to Elements and Patterns. Features and Layouts should ideally be created in the application. There are some scenarios in which you might want to include _recipes_ to demonstrate how one might build a certain Feature.

Note, this is a framework for guiding architectural choices. We _do not_ recommend categorizing components in code.

### Forwarding Refs

> Encapsulation is desirable for application-level components (Features), it can be inconvenient for highly reusable “leaf” components like FancyButton or MyTextInput. These components tend to be used throughout the application in a similar manner as a regular DOM button and input, and accessing their DOM nodes may be unavoidable for managing focus, selection, or animations.
>
> Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child.
>
> — [Forwarding Refs](https://reactjs.org/docs/forwarding-refs.html)

Each Radius component returns a single HTML element that accepts all HTML props, including className, style and accessibility attributes.

### Elements

An element is a styled-component that uses style functions from Styled System. Styled-components handles ref forwarding here.

```js
const textVariants = variant({
  variants: {
    big: {
      fontSize: 4,
      lineHeight: 'heading',
    },
    small: {
      fontSize: 1,
      lineHeight: 'body',
    },
  },
});

export const Text = styled.p(
  textVariants,
  compose(space, color, layout, flexbox, border, position, typography)
);
```

### Patterns

Radius comes with many patterns that you can use in your application either standalone or as part of your feature. In the case you'd like to create a new pattern using Radius' approach, here is a sample breakdown of a Radius pattern

Patterns are comprised of elements. Therefore, we have to pick which component to `forwardRef` from.

`StyledComponentProps` is a utility that styled-components uses to create types for a styled component. It merges the typings for style function props and the typings for the HTML element that is being forwarded.

```js
import { StyledComponentProps } from 'styled-components';

type AspectRatioProps = StyledComponentProps<
  'div',
  any,
  {
    /** The ratio to apply */
    ratio?: number;
  } & BoxProps,
  never
>;

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 16 / 9, children, ...props }, ref) => (
    <Box ref={ref} position="relative" overflow="hidden">
      <Box width="100%" height={0} pb={100 / ratio + '%'} />
      <Box {...props} position="absolute" top={0} right={0} bottom={0} left={0}>
        {children}
      </Box>
    </Box>
  )
);
```
