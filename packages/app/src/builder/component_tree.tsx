import React, { useCallback } from "react";
import { Box, Label, Stack } from "ds";
import { ControlState, isControlState } from "./types";

export const ComponentTree = ({ onSelect, state }: { state: ControlState, onSelect: (val: ControlState) => void }) => {
    const select = useCallback(() => onSelect(state), [onSelect, state]);
    const contents = state.builder.describeContents(state.controlsState);

    return <Stack axis="vertical">
        <Box onClick={ select }>{ state.builder.label }</Box>
        <Box pl={ 3 }>{
              isControlState(contents) ? <ComponentTree state={ contents } onSelect={ onSelect }/>
            : Array.isArray(contents) ? contents.map((c, i) => <ComponentTree key={ i } state={ c } onSelect={ onSelect }/>)
            : Object.keys(contents).map(k => {
                const labeledContent = contents[k];
                const items = Array.isArray(labeledContent) ? labeledContent : [labeledContent];
                return <Stack axis="vertical" space={ 1 } key={ k }>
                    <Label>{ k }</Label>
                    { items.map((item, i) => <ComponentTree key={ i } state={ item } onSelect={ onSelect }/>) }
                </Stack>;
            })
        }</Box>
    </Stack>
};