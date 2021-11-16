import React from "react";
import { componentDef, ControlState } from "../types";
import { FormControl, Stack, Box, Label, Icons } from "ds";
import { RenderPiece } from "../util/render_piece";
import { createControl } from "../util/create_control";
import { remove } from "../util/remove";
import { FormGallery } from "./FormControl/gallery";

type FormControlProps = { items: ControlState[] };
const Controls = ({values, onChange}: { values: FormControlProps; onChange: (val: FormControlProps) => void;}): JSX.Element => (
    <Stack axis="vertical">
        <Label>New</Label>
        <FormGallery
            onSelect={(item) =>
                onChange({
                    ...values,
                    items: [...values.items, createControl(item)],
                })
            }
        />

        <Label>Existing</Label>
        {values.items.map((item, i) => (
            <Stack axis="horizontal" key={i}>
                <Box>{item.builder.label}</Box>
                <Box onClick={() => onChange({ ...values, items: remove(values.items, i) }) } >
                    <Icons.Close />
                </Box>
            </Stack>
        ))}

        
    </Stack>
);

export const FormControlBuilder = componentDef({
    label: "Form control",
    render: ({ items }: FormControlProps) => (
        <FormControl.Field>
            {items.map((t, i) => (
                <RenderPiece key={i} {...t} />
            ))}
        </FormControl.Field>
    ),
    controls: Controls,
    initialState: {
        items: [],
    },
    describeContents: (props) => props.items,
});
