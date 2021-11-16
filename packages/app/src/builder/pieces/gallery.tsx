import React, { useCallback } from "react";
import { ComponentBuilder } from "../types";
import { ButtonBuilder } from "./button";
import { StackBuilder } from "./stack";
import { Stack } from "ds";
import { TwoPanelBuilder } from "./twopanel";
import { LinkBuilder } from "./link";
import { FormControlBuilder } from "./formcontrol";
import { HeadingBuilder } from "./heading";
import { TextBuilder } from "./text";
import { ImageBuilder } from "./image";
import { CardBuilder } from "./card";
import { AspectImageBuilder } from './aspectimage';
import { PageBuilder } from './page';

function galleryItem(builder: ComponentBuilder) {
    return ({ onSelect}: { onSelect: (builder: ComponentBuilder) => void; }) => {
        const select = useCallback(() => onSelect(builder), [onSelect]);
        return <div onClick={select}>{builder.label}</div>;
    };
}

const ButtonItem = galleryItem(ButtonBuilder);
const StackItem = galleryItem(StackBuilder);
const TwoPanelItem = galleryItem(TwoPanelBuilder);
const LinkItem = galleryItem(LinkBuilder);
const FormControlItem = galleryItem(FormControlBuilder);
const HeadingItem = galleryItem(HeadingBuilder);
const TextItem = galleryItem(TextBuilder);
const ImageItem = galleryItem(ImageBuilder);
const CardItem = galleryItem(CardBuilder);
const AspectImageItem = galleryItem(AspectImageBuilder);
const PageItem = galleryItem(PageBuilder);

export const Gallery = ({ onSelect}: {onSelect: (builder: ComponentBuilder) => void }) => {
    return (
        <Stack axis="vertical">
            <ButtonItem onSelect={onSelect} />
            <StackItem onSelect={onSelect} />
            <TwoPanelItem onSelect={onSelect} />
            <LinkItem onSelect={onSelect} />
            <FormControlItem onSelect={onSelect} />
            <HeadingItem onSelect={onSelect} />
            <TextItem onSelect={onSelect} />
            <ImageItem onSelect={onSelect} />
            <CardItem onSelect={onSelect} />
            <AspectImageItem onSelect={onSelect} />
            <PageItem onSelect={onSelect} />
        </Stack>
    );
};
