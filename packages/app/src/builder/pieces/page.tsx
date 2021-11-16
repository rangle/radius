import { componentDef, ControlState } from "../types";
import React from "react";
import { RenderPiece } from "../util/render_piece";
import { Box, Stack, Icons, Heading } from "ds";
import { Gallery } from "./gallery";
import { createControl } from "../util/create_control";
import { remove } from "../util/remove";
import { theme} from "ds";

// just a page layout that is not supposed to be used in Radius but has its uses for my demo
type PageProps = { items: ControlState[]; };
const defaultProps: PageProps = {
    items: [],
};

const Controls = ({values, onChange}: {values: PageProps; onChange: (val: PageProps) => void}): JSX.Element => (
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

export const PageBuilder = componentDef({
    label: "Page",
    render: ({ items }: PageProps) => (
        <Stack axis="vertical" style={{backgroundColor: `${theme.light.colors.bg}`, margin: "32px auto", padding: "16px", maxWidth: "1000px"}}>
            {items.map((t, i) => (
                <RenderPiece key={i} {...t} />
            ))}
        </Stack>
    ),
    controls: Controls,
    initialState: defaultProps,
    describeContents: (props) => props.items,
});
