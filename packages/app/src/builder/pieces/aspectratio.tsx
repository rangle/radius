import React from "react";
import { ComponentBuilder, componentDef, ControlState } from "../types";
import { AspectRatio, Stack, Box, Icons, Heading } from "ds";
import { Enum } from "../controls/enum";
import { RenderPiece } from "../util/render_piece";
import { remove } from "../util/remove";
import { Gallery } from "./gallery";
import { createControl } from "../util/create_control";

enum BackgroundVariant {
    primary = "brand.primary",
    secondary = "brand.secondary",
    accent = "brand.accent",
    muted = "brand.muted",
}

type AspectRatioProps = {
    items: ControlState[];
    background: BackgroundVariant;
};

const Controls: ComponentBuilder<AspectRatioProps>["controls"] = ({values, onChange}) => {
    return (
        <Stack axis="vertical">
            <Heading variant="heading-5">Controls</Heading>
            <Enum
                value={values.background}
                label="Background"
                options={BackgroundVariant}
                onChange={(background) => onChange({ ...values, background })}
            />

            <Stack axis="vertical">
                <Heading variant="heading-5">New</Heading>
                <Gallery onSelect={(item) => onChange({ ...values, items: [...values.items, createControl(item)],})}/>

                {(values.items.length > 0 && <Heading variant="heading-5">Current</Heading>)}
                {values.items.map((item, i) => (
                    <Stack axis="horizontal" key={i}>
                        <Box>{item.builder.label}</Box>
                        <Box onClick={() => onChange({ ...values, items: remove(values.items, i)})}>
                            <Icons.Close />
                        </Box>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export const AspectRatioBuilder = componentDef({
    label: "Aspect Ratio",
    render: (props: AspectRatioProps) => {
        return (
            <AspectRatio
                ratio={1}
                bg={props.background}
            >
                {props.items.map((t, i) => (<RenderPiece key={i} {...t} />))}
            </AspectRatio>
        );
    },
    controls: Controls,
    initialState: {
        items: [],
        background: BackgroundVariant.primary,
    },
    describeContents: (props) => props.items,
});
