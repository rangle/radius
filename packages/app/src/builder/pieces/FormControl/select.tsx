import React from "react";
import { ComponentBuilder, componentDef } from "../../types";
import { Select, Stack } from "ds";
import { String } from "../../controls/string";
import { Bool } from "../../controls/bool";

type TextAreaProps = { label: string; options: string[], hasError: boolean };
const Controls: ComponentBuilder<TextAreaProps>["controls"] = ({values, onChange}) => {
    return (
        <Stack axis="vertical">
            <String
                label="Textarea placeholder"
                value={values.label}
                onChange={(label) => onChange({ ...values, label })}
            />

            <Bool
                label="Has error"
                value={values.hasError}
                onChange={(hasError) => onChange({ ...values, hasError })}
            />
        </Stack>
    );
};

export const FormSelectBuilder = componentDef({
    label: "Select",
    render: (props: TextAreaProps) => {
        return (
            <Select placeholder={props.label} error={props.hasError}>
                {props.options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Select>
        );
    },
    controls: Controls,
    initialState: {
        label: "Select a city",
        options: ["Toronto", "Amsterdam", "Paris"],
        hasError: false,
    },
    describeContents: () => ({}),
});
