import React from "react";
import { ComponentBuilder, componentDef } from "../types";
import { Heading, Stack } from "ds";
import { String } from "../controls/string";
import { Enum } from "../controls/enum";

enum HeadingVariant {
    "heading-1" = "heading-1",
    "heading-2" = "heading-2",
    "heading-3" = "heading-3",
    "heading-4" = "heading-4",
    "heading-5" = "heading-5",
}

type HeadingProps = { text: string; variant: HeadingVariant };
const Controls: ComponentBuilder<HeadingProps>["controls"] = ({values, onChange}) => {
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
                options={HeadingVariant}
                onChange={(variant) => onChange({ ...values, variant })}
            />
        </Stack>
    );
};

export const HeadingBuilder = componentDef({
    label: "Heading",
    render: (props: HeadingProps) => {
        return <Heading variant={props.variant}>{props.text}</Heading>;
    },
    controls: Controls,
    initialState: {
        text: "Heading",
        variant: HeadingVariant["heading-1"],
    },
    describeContents: () => ({}),
});
