import { componentDef, ControlState } from "../types";
import React from "react";
import { RenderPiece } from "../util/render_piece";
import { Box, Stack, Icons, Label } from "ds";
import { Enum } from "../controls/enum";
import { Gallery } from "./gallery";
import { createControl } from "../util/create_control";

enum Axis {
    vertical = "vertical",
    horizontal = "horizontal",
}

type StackProps = { items: ControlState[], axis: Axis };
const defaultProps: StackProps = {
  axis: Axis.vertical,
  items: [],
};

function remove<T>(val: Array<T>, index: number): Array<T> {
    const cpy = [...val];
    cpy.splice(index, 1);
    return cpy;
}

export const StackBuilder = componentDef({
    label: "Stack",
    render: ({ items, axis }: StackProps) => <Stack axis={ axis }>{ items.map((t, i) => <RenderPiece key={ i } { ...t }/>) }</Stack>,
    controls: ({ values, onChange }) => <Stack axis="vertical">
        <Enum value={ values.axis } label="Axis" options={ Axis }
              onChange={ axis => onChange({ ...values, axis }) }/>

        { values.items.map((item, i) => <Stack axis="horizontal" key={ i }>
            <Box>{ item.builder.label }</Box>
            <Box onClick={ () => onChange({ ...values, items: remove(values.items, i) }) }><Icons.Close/></Box>
        </Stack>) }

        <Label>New</Label>
        <Gallery onSelect={ item => onChange({
            ...values,
            items: [...values.items, createControl(item)],
        }) }/>
    </Stack>,
    initialState: defaultProps,
    describeContents: props => props.items,
});