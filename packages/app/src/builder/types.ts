import { ReactElement } from "react";

export type Props = Record<string, unknown>;
export type ComponentBuilder<T extends Props = any> = {
    label: string;
    render: (props: T) => ReactElement;
    controls: (props: { values: T, onChange: (val: T) => void }) => ReactElement;
    initialState: T;
    describeContents: (props: T) => SlotDescription
}
export function componentDef<T extends Props>(d: ComponentBuilder<T>): ComponentBuilder<T> {
    return d;
}


export type ControlState<T extends Props = any> = {
    builder: ComponentBuilder<T>; // Ref to builder definition
    controlsState: T;
}
const controlStateKeys: { [P in keyof ControlState]: null } = {
    builder: null,
    controlsState: null,
};
export const isControlState = (val: unknown): val is ControlState => {
    if (typeof val !== "object") { return false; }
    if (!val) { return false; }
    return Object.keys(controlStateKeys).every(k => k in val);
};


export type ChildComponents = ControlState | ControlState[];
export type SlotDescription = ChildComponents | { [name: string]: ChildComponents };