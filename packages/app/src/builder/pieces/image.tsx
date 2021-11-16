import React from "react";
import { ComponentBuilder, componentDef } from "../types";
import { Image, Stack } from "ds";
import { String } from "../controls/string";

type ImageProps = { src: string; };
const Controls: ComponentBuilder<ImageProps>["controls"] = ({values, onChange}) => {
    return (
        <Stack axis="vertical">
            <String
                label="src"
                value={values.src}
                onChange={(src) => onChange({ ...values, src })}
            />
        </Stack>
    );
};

export const ImageBuilder = componentDef({
    label: "Image",
    render: (props: ImageProps) => (
        <Image src={props.src} />
    ),
    controls: Controls,
    initialState: {
        src: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9",
    },
    describeContents: () => ({}),
});
