import React from "react";
import { ComponentBuilder, componentDef } from "../types";
import { Button, Stack } from "ds";
import { Bool } from "../controls/bool";
import { String } from "../controls/string";
import { Enum } from "../controls/enum";

enum ButtonVariant {
    primary = "primary",
    secondary = "secondary",
    transparent = "transparent",
}

type ButtonProps = {
    label: string;
    disabled: boolean;
    isLoading: boolean;
    variant: ButtonVariant;
};
const Controls: ComponentBuilder<ButtonProps>["controls"] = ({values, onChange}) => {
    return (
        <Stack axis="vertical">
            <Bool
                label="isLoading"
                value={values.isLoading}
                onChange={(isLoading) => onChange({ ...values, isLoading })}
            />
            <String
                label="Label"
                value={values.label}
                onChange={(label) => onChange({ ...values, label })}
            />
            <Enum
                label="Variant"
                value={values.variant}
                options={ButtonVariant}
                onChange={(variant) => onChange({ ...values, variant })}
            />
        </Stack>
    );
};

export const ButtonBuilder = componentDef({
    label: "Button",
    render: (props: ButtonProps) => {
        return (
            <Button
                isLoading={props.isLoading}
                disabled={props.disabled}
                variant={props.variant}
            >
                {props.label}
            </Button>
        );
    },
    controls: Controls,
    initialState: {
        isLoading: false,
        disabled: false,
        label: "Button",
        variant: ButtonVariant.primary,
    },
    describeContents: () => ({}),
});
