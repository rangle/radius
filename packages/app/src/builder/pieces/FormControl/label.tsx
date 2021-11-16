import React from "react";
import { ComponentBuilder, componentDef } from "../../types";
import { Label, Stack } from "ds";
import { String } from "../../controls/string";

type LabelProps = { label: string };
const Controls: ComponentBuilder<LabelProps>["controls"] = ({values, onChange}) => {
    return (
        <Stack axis="vertical">
            <String
                label="Label"
                value={values.label}
                onChange={(label) => onChange({ ...values, label })}
            />
        </Stack>
    );
};

export const FormLabelBuilder = componentDef({
    label: "Label",
    render: (props: LabelProps) => {
        return <Label>{props.label}</Label>;
    },
    controls: Controls,
    initialState: {
        label: "Label",
    },
    describeContents: () => ({}),
});
