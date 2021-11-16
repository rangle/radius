import React from "react";
import { ComponentBuilder, componentDef } from "../../types";
import { TextArea, Stack } from "ds";
import { String } from "../../controls/string";
import { Bool } from "../../controls/bool";

type TextAreaProps = { placeholder: string; maxCharacters: number, hasError: boolean };
const Controls: ComponentBuilder<TextAreaProps>["controls"] = ({values,onChange}) => {
    return (
        <Stack axis="vertical">
            <String
                label="Textarea placeholder"
                value={values.placeholder}
                onChange={(placeholder) => onChange({ ...values, placeholder })}
            />

            <Bool
                label="Has error"
                value={values.hasError}
                onChange={(hasError) => onChange({ ...values, hasError })}
            />

        </Stack>
    );
};

export const FormTextAreaBuilder = componentDef({
    label: "Textarea",
    render: (props: TextAreaProps) => {
        return <TextArea placeholder={props.placeholder} error={props.hasError}></TextArea>;
    },
    controls: Controls,
    initialState: {
        placeholder: "Placeholder",
        maxCharacters: 100,
        hasError: false
    },
    describeContents: () => ({}),
});
