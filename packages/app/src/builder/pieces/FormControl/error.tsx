import React from "react";
import { ComponentBuilder, componentDef } from "../../types";
import { FormControl, Stack } from "ds";
import { String } from "../../controls/string";

type ErrorProps = { message: string };
const Controls: ComponentBuilder<ErrorProps>["controls"] = ({values, onChange}) => {
    return (
        <Stack axis="vertical">
            <String
                label="Error message"
                value={values.message}
                onChange={(message) => onChange({ ...values, message })}
            />
        </Stack>
    );
};

export const FormErrorBuilder = componentDef({
    label: "Error",
    render: (props: ErrorProps) => {
        return <FormControl.Error>{props.message}</FormControl.Error>;
    },
    controls: Controls,
    initialState: {
        message: "Error message",
    },
    describeContents: () => ({}),
});
