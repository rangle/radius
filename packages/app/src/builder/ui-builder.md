# UI Builder

Design system component is `<P>(props: P) => ReactElement`, where `P` is component props.
For each component we can create 
1) a counterpart controls component `<C>(props: { values: C, onChange: (values: C) => void }) => ReactElement`,
   which renders some sort of form to collect the values for `C`, and
2) props mapping `(val: C) => P` transforming controls into the component props.

Feeding the props selected using the controls into the original component
allows the user to render the component as desired.
This is similar to how storybook controls work:
https://storybook.js.org/docs/react/essentials/controls

Layouts are components of the design system that can hold other components.
The layout implementation will get the nested components via the `children` prop,
and will parse it as necessary.

Controls for the layout could capture the nested components, and all the controls `C` required to render them.
Wrapper for the layouts would map the nested controls into props for the nested components.

Gallery of components allows selecting which component will be displayed along with its controls.
Gallery not only serves as a starting point of the UI builder, but also becomes part of the controls
for the layouts — allowing selection of nested components.

Recursive structure of the system allows building arbitrary compositions of the components:
Layout controls contain controls for other components, which might be in turn layouts.
UI builder would store top level controls in the local state, and render the top component with the given controls.