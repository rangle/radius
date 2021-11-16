import React from "react";
import { ComponentBuilder, componentDef } from "../types";
import { Text, Stack } from "ds";
import { String } from "../controls/string";
import { Enum } from "../controls/enum";

enum TextVariant {
    body = "body",
    caption = "caption",
    hint = "hint",
    label = "label",
}

type TextProps = { text: string; variant: TextVariant };
const Controls: ComponentBuilder<TextProps>["controls"] = ({values, onChange}) => {
    return (
        <Stack axis="vertical">
            <String
                label="Text"
                value={values.text}
                onChange={(text) => onChange({ ...values, text })}
            />
            <Enum
                label="Variant"
                value={values.variant}
                options={TextVariant}
                onChange={(variant) => onChange({ ...values, variant })}
            />
        </Stack>
    );
};

export const TextBuilder = componentDef({
    label: "Text",
    render: (props: TextProps) => (
        <Text variant={props.variant}>{props.text}</Text>
    ),
    controls: Controls,
    initialState: {
        text: "Hello",
        variant: TextVariant.body,
    },
    describeContents: () => ({}),
});
