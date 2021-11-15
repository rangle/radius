import React from "react";
import { ComponentBuilder, componentDef } from "../types";
import { Button, Stack } from "ds";
import { Bool } from "../controls/bool";
import { String } from "../controls/string";

type ButtonProps = { label: string, disabled: boolean, isLoading: boolean };
const Controls: ComponentBuilder<ButtonProps>["controls"] = ({ values, onChange }) => {
    return <Stack axis="vertical">
        <Bool label="isLoading" value={ values.isLoading }
              onChange={ isLoading => onChange({ ...values, isLoading }) }/>
        <String label="Label" value={ values.label }
                onChange={ label => onChange({ ...values, label }) }/>
    </Stack>;
};

export const ButtonBuilder = componentDef({
    label: "Button",
    render: (props: ButtonProps) => {
        return <Button isLoading={ props.isLoading } disabled={ props.disabled }>{ props.label }</Button>
    },
    controls: Controls,
    initialState: {
        isLoading: false,
        disabled: false,
        label: "Button",
    },
    describeContents: () => ({}),
});