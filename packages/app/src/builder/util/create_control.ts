import { ComponentBuilder, ControlState, Props } from "../types";

export const createControl = <T extends Props>(builder: ComponentBuilder<T>): ControlState<T> => ({
    builder,
    controlsState: builder.initialState
});