import React from "react";
import { ComponentBuilder, componentDef } from "../../types";
import { Input, Stack } from "ds";
import { String } from "../../controls/string";
import { Bool } from "../../controls/bool";

type InputProps = { placeholder: string, hasError: boolean };
const Controls: ComponentBuilder<InputProps>["controls"] = ({values,onChange}) => {
    return (
        <Stack axis="vertical">
            <String
                label="Input placeholder"
                value={values.placeholder}
                onChange={(placeholder) => onChange({ ...values, placeholder })}
            />
            <Bool 
                label="Has error" 
                value={values.hasError} 
                onChange={(hasError) => onChange({ ...values, hasError })} />
        </Stack>
    );
};

export const FormInputBuilder = componentDef({
    label: "Input",
    render: (props: InputProps) => {
        return <Input placeholder={props.placeholder} error={props.hasError}></Input>;
    },
    controls: Controls,
    initialState: {
        placeholder: "Placeholder",
        hasError: false
    },
    describeContents: () => ({}),
});
