interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const value: SvgrComponent;
  export default value;
}

declare module '*.png' {
  const value: any;
  export default value;
}

declare module '@styled-system/css' {
  const css: any;
  export default css;
}