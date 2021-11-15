import React, { useCallback } from "react";
import { ComponentBuilder } from "../types";
import { ButtonBuilder } from './button';
import { StackBuilder } from "./stack";
import { Stack } from "ds";
import { TwoPanelBuilder } from "./twopanel";

function galleryItem(builder: ComponentBuilder) {
    return ({ onSelect }: { onSelect: (builder: ComponentBuilder) => void }) => {
        const select = useCallback(() => onSelect(builder), [onSelect]);
        return <div onClick={ select }>{ builder.label }</div>;
    };
}

const ButtonItem = galleryItem(ButtonBuilder);
const StackItem = galleryItem(StackBuilder);
const TwoPanelItem = galleryItem(TwoPanelBuilder);

export const Gallery = ({ onSelect }: { onSelect: (builder: ComponentBuilder) => void }) => {
    return <Stack axis="vertical">
        <ButtonItem onSelect={ onSelect }/>
        <StackItem onSelect={ onSelect }/>
        <TwoPanelItem onSelect={ onSelect }/>
    </Stack>;
};