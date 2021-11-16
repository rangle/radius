import React from "react";
import { componentDef } from "../types";

export const PlaceholderBuilder = componentDef<{}>({
    label: "Placeholder",
    render: () => <div>Placeholder</div>,
    controls: () => <div />,
    initialState: {},
    describeContents: () => ({}),
});
