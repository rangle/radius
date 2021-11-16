import { componentDef, ControlState } from "../types";
import React from "react";
import { RenderPiece } from "../util/render_piece";
import { Box, Stack, Heading } from "ds";
import { Gallery } from "./gallery";
import { createControl } from "../util/create_control";
import { PlaceholderBuilder } from "./placeholder";

// This layout divides into two even columns currently
// As this is not officially part of Radius I decided that I would make it fit the UI-builder
// meaning that the max-width of each side can only be 50% of the total available
// If this component is extracted to Radius it should be rewritten to give each element the
// appropriate amount of space
type TwoPanelProps = { left: ControlState; right: ControlState };
const defaultProps: TwoPanelProps = {
    left: createControl(PlaceholderBuilder),
    right: createControl(PlaceholderBuilder),
};

export const TwoPanelBuilder = componentDef({
    label: "Two panels",

    // TODO: wipe or extract to the component library
    render: ({ left, right }: TwoPanelProps) => (
        <Box className="two-columns">
            <Box className="left">
                {left && <RenderPiece {...left} />}
            </Box>
            <Box className="right">
                {right && <RenderPiece {...right} />}
            </Box>
        </Box>
    ),

    controls: ({ values, onChange }) => (
        <Stack axis="vertical">
            <Heading variant="heading-5">Left component</Heading>
            <Gallery onSelect={(item) => onChange({ ...values, left: createControl(item) }) } />

            <Heading variant="heading-5">Right component</Heading>
            <Gallery onSelect={(item) => onChange({ ...values, right: createControl(item) })} />
        </Stack>
    ),

    initialState: defaultProps,
    describeContents: (props) => ({ Left: props.left, Right: props.right }),
});
