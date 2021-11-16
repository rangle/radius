import { componentDef, ControlState } from "../types";
import React from "react";
import { RenderPiece } from "../util/render_piece";
import { Box, Stack, Icons, Heading } from "ds";
import { Enum } from "../controls/enum";
import { Gallery } from "./gallery";
import { createControl } from "../util/create_control";
import { remove } from "../util/remove";

enum Axis {
    vertical = "vertical",
    horizontal = "horizontal",
}

type StackProps = { items: ControlState[]; axis: Axis };
const defaultProps: StackProps = {
    axis: Axis.vertical,
    items: [],
};

const Controls = ({values, onChange}: {values: StackProps; onChange: (val: StackProps) => void}): JSX.Element => (
    <Stack axis="vertical">
        <Heading variant="heading-5">Controls</Heading>
        <Enum
            value={values.axis}
            label="Axis"
            options={Axis}
            onChange={(axis) => onChange({ ...values, axis })}
        />

        <Heading variant="heading-5">New</Heading>
        <Gallery
            onSelect={(item) => onChange({...values, items: [...values.items, createControl(item)], })}/>

        {(values.items.length > 0 && <Heading variant="heading-5">Current</Heading>)}
        {values.items.map((item, i) => (
            <Stack axis="horizontal" key={i}>
                <Box>{item.builder.label}</Box>
                <Box onClick={() => onChange({ ...values, items: remove(values.items, i) })}>
                    <Icons.Close />
                </Box>
            </Stack>
        ))}

        
    </Stack>
);

export const StackBuilder = componentDef({
    label: "Stack",
    render: ({ items, axis }: StackProps) => (
        <Stack axis={axis}>
            {items.map((t, i) => (
                <RenderPiece key={i} {...t} />
            ))}
        </Stack>
    ),
    controls: Controls,
    initialState: defaultProps,
    describeContents: (props) => props.items,
});
