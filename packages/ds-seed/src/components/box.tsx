import * as React from "react";
import BoxContainer from "./box.styles";

interface BoxProps {
  children: any,
  color: string,
}

const Box = ({children, color}: BoxProps) => <BoxContainer color={color}>{children}</BoxContainer>;

export default Box;