import React, { useCallback } from "react";
import { Stack } from "ds";
import { ComponentBuilder } from "../../types";
import { FormErrorBuilder } from "./error";
import { FormHintBuilder } from "./hint";
import { FormLabelBuilder } from "./label";
import { FormInputBuilder } from "./input";
import { FormSelectBuilder } from "./select";
import { FormTextAreaBuilder } from "./textarea";
import { ButtonBuilder } from '../button';
import { FormCheckboxBuilder } from './checkbox';

function galleryItem(builder: ComponentBuilder) {
    return ({onSelect}: { onSelect: (builder: ComponentBuilder) => void}) => {
        const select = useCallback(() => onSelect(builder), [onSelect]);
        return <div onClick={select}>{builder.label}</div>;
    };
}

const ErrorItem = galleryItem(FormErrorBuilder);
const HintItem = galleryItem(FormHintBuilder);
const InputItem = galleryItem(FormInputBuilder);
const LabelItem = galleryItem(FormLabelBuilder);
const SelectItem = galleryItem(FormSelectBuilder);
const TextareaItem = galleryItem(FormTextAreaBuilder);
const ButtonItem = galleryItem(ButtonBuilder);
const CheckboxItem = galleryItem(FormCheckboxBuilder);

export const FormGallery = ({ onSelect }: { onSelect: (builder: ComponentBuilder) => void}) => {
    return (
        <Stack axis="vertical">
            <ErrorItem onSelect={onSelect} />
            <HintItem onSelect={onSelect} />
            <InputItem onSelect={onSelect} />
            <LabelItem onSelect={onSelect} />
            <SelectItem onSelect={onSelect} />
            <TextareaItem onSelect={onSelect} />
            <ButtonItem onSelect={onSelect} />
            <CheckboxItem onSelect={onSelect} />
        </Stack>
    );
};
