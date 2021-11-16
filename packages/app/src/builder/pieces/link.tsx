import React from "react";
import { ComponentBuilder, componentDef } from "../types";
import { Link, Stack } from "ds";
import { String } from "../controls/string";
import { Enum } from "../controls/enum";

enum LinkVariant {
    default = "default",
    inline = "inline",
    nav1 = "nav1",
    nav2 = "nav2",
    nav3 = "nav3",
}

type LinkProps = { label: string; variant: LinkVariant };
const Controls: ComponentBuilder<LinkProps>["controls"] = ({values, onChange}) => {
    return (
        <Stack axis="vertical">
            <String
                label="Label"
                value={values.label}
                onChange={(label) => onChange({ ...values, label })}
            />
            <Enum
                label="Variant"
                value={values.variant}
                options={LinkVariant}
                onChange={(variant) => onChange({ ...values, variant })}
            />
        </Stack>
    );
};

export const LinkBuilder = componentDef({
    label: "Link",
    render: (props: LinkProps) => {
        return <Link variant={props.variant}>{props.label}</Link>;
    },
    controls: Controls,
    initialState: {
        label: "Link",
        variant: LinkVariant.default,
    },
    describeContents: () => ({}),
});
