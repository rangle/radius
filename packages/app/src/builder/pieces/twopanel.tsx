import { componentDef, ControlState } from "../types";
import React from "react";
import { RenderPiece } from "../util/render_piece";
import { Box, Label, Stack } from "ds";
import { Gallery } from "./gallery";
import { createControl } from "../util/create_control";
import { PlaceholderBuilder } from "./placeholder";

type TwoPanelProps = { left: ControlState, right: ControlState };
const defaultProps: TwoPanelProps = {
    left: createControl(PlaceholderBuilder),
    right: createControl(PlaceholderBuilder),
};

export const TwoPanelBuilder = componentDef({
    label: "Two panels",

    // TODO: wipe or extract to the component library
    render: ({ left, right }: TwoPanelProps) => <Box display="flex" flexDirection="row" flexWrap="nowrap">
        <Box flexGrow={ 1 } flexShrink={ 1 } flexBasis="auto">{
            left && <RenderPiece { ...left }/>
        }
        </Box>
        <Box flexGrow={ 1 } flexShrink={ 1 } flexBasis="auto">{
            right && <RenderPiece { ...right }/>
        }</Box>
    </Box>,

    controls: ({ values, onChange }) => <Stack axis="vertical">
        <Label>Left</Label>
        <Gallery onSelect={ item => onChange({ ...values, left: createControl(item) }) }/>

        <Label>Right</Label>
        <Gallery onSelect={ item => onChange({ ...values, right: createControl(item) }) }/>
    </Stack>,

    initialState: defaultProps,
    describeContents: props => ({ Left: props.left, Right: props.right }),
});