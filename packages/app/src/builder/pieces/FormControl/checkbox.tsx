import React from "react";
import { ComponentBuilder, componentDef } from "../../types";
import { Checkbox, Stack } from "ds";
import { String } from "../../controls/string";
import { Bool } from '../../controls/bool';

type CheckboxProps = { label: string, hasError: boolean};
const Controls: ComponentBuilder<CheckboxProps>["controls"] = ({values, onChange}) => {
    return (
        <Stack axis="vertical">
            <String
                label="Checkbox"
                value={values.label}
                onChange={(label) => onChange({ ...values, label })}
            />

            <Bool 
                label="Has Error"
                value={values.hasError}
                onChange={(hasError) => onChange({ ...values, hasError })}
            />
        </Stack>
    );
};

export const FormCheckboxBuilder = componentDef({
    label: "Checkbox",
    render: (props: CheckboxProps) => {
        return <Checkbox label={props.label} error={props.hasError} />;
    },
    controls: Controls,
    initialState: {
        label: "Turn feature on?",
        hasError: false
    },
    describeContents: () => ({}),
});
