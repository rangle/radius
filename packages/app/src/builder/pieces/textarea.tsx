import React from "react";
import { ComponentBuilder, componentDef } from "../types";
import { TextArea, Stack } from "ds";
import { String } from "../controls/string";
import { Bool } from "../controls/bool";

type TextAreaProps = { placeholder: string; disabled: boolean; error: boolean };
const Controls: ComponentBuilder<TextAreaProps>["controls"] = ({values, onChange}) => {
    return (
        <Stack axis="vertical">
            <String
                label="Placeholder"
                value={values.placeholder}
                onChange={(placeholder) => onChange({ ...values, placeholder })}
            />
            <Bool
                label="Disabled"
                value={values.disabled}
                onChange={(disabled) => onChange({ ...values, disabled })}
            />
            <Bool
                label="Error"
                value={values.error}
                onChange={(error) => onChange({ ...values, error })}
            />
        </Stack>
    );
};

export const TextAreaBuilder = componentDef({
    label: "TextArea",
    render: (props: TextAreaProps) => <TextArea {...props} />,
    controls: Controls,
    initialState: {
        placeholder: "",
        disabled: false,
        error: false,
    },
    describeContents: () => ({}),
});
