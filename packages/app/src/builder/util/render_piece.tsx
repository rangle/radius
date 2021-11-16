import React, { ComponentProps } from "react";
import { ComponentBuilder, ControlState, Props } from "../types";

export const RenderPiece = (props: ControlState) => {
    if (props.controlsState === null) {
        return null;
    }

    const Render = props.builder.render;
    return <Render {...props.controlsState} />;
    // return <div onClick={ () => console.log(props.builder.label) }><Render { ...props.controlsState }/></div>;
};

export function RenderControls<T extends Props>(
    props: ControlState<T> & {
        onChange: ComponentProps<ComponentBuilder<T>["controls"]>["onChange"];
}
) {
    let Controls = props.builder.controls;
    return <Controls values={props.controlsState} onChange={props.onChange} />;
}
