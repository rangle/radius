import { componentDef, ControlState } from "../types";
import React from "react";
import { RenderPiece } from "../util/render_piece";
import {Box, Stack, Icons, Heading, theme} from "ds";
import { Gallery } from "./gallery";
import { createControl } from "../util/create_control";
import { remove } from "../util/remove";

// just a simple card that is not supposed to be used in Radius but has its uses for my demo
type CardProps = { items: ControlState[]; };
const defaultProps: CardProps = {
    items: [],
};

const Controls = ({values, onChange}: {values: CardProps; onChange: (val: CardProps) => void}): JSX.Element => (
    <Stack axis="vertical">
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

export const CardBuilder = componentDef({
    label: "Card",
    render: ({ items }: CardProps) => (
        <Stack axis="vertical" style={{backgroundColor: `${theme.light.colors.bg.secondary}`, padding: "32px"}}>
            {items.map((t, i) => (
                <RenderPiece key={i} {...t} />
            ))}
        </Stack>
    ),
    controls: Controls,
    initialState: defaultProps,
    describeContents: (props) => props.items,
});
