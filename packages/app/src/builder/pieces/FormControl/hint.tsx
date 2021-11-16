import React from "react";
import { ComponentBuilder, componentDef } from "../../types";
import { FormControl, Stack } from "ds";
import { String } from "../../controls/string";

type HintProps = { message: string };
const Controls: ComponentBuilder<HintProps>["controls"] = ({values, onChange}) => {
    return (
        <Stack axis="vertical">
            <String
                label="Hint message"
                value={values.message}
                onChange={(message) => onChange({ ...values, message })}
            />
        </Stack>
    );
};

export const FormHintBuilder = componentDef({
    label: "Hint",
    render: (props: HintProps) => {
        return <FormControl.Hint>{props.message}</FormControl.Hint>;
    },
    controls: Controls,
    initialState: {
        message: "Hint message",
    },
    describeContents: () => ({}),
});
