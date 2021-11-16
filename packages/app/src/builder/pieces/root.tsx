import React from "react";
import { componentDef, ControlState } from "../types";
import { RenderPiece } from "../util/render_piece";
import { createControl } from "../util/create_control";
import { PlaceholderBuilder } from "./placeholder";
import { Gallery } from "./gallery";

export const RootBuilder = componentDef<{ content: ControlState }>({
    label: "UI Builder",
    render: ({ content }) => <RenderPiece {...content} />,
    controls: ({ onChange }) => (
        <Gallery onSelect={(content) => onChange({ content: createControl(content) }) } />
    ),
    initialState: { content: createControl(PlaceholderBuilder) },
    describeContents: ({ content }) => content,
});
