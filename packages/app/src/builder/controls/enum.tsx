import React, { ChangeEvent, ComponentProps, useCallback } from "react";
import { Label, Radio, Stack } from "ds";
import { Control } from "./types";

type Enum = Record<string, string>;

function Choice<T extends string>({ value, label, checked, onChange }: {
    value: T,
    label: string,
    checked: boolean,
    onChange: (val: T) => void,
}) {
    const cb = useCallback((e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value as unknown as T), [onChange]);
    return <Radio label={ label } value={ value } checked={ checked } onChange={ cb }/>;
}

export function Enum<T extends Enum>(props: ComponentProps<Control<T[keyof T]>> & { options: T }) {
    return <Stack axis="vertical">
        <Label required>{ props.label }</Label>
        <Stack axis="vertical">{ Object.keys(props.options).map(k => {
            return <Choice key={ k }
                           value={ k as never }
                           label={ props.options[k] }
                           checked={ props.value === k }
                           onChange={ props.onChange }/>
        }) }</Stack>
    </Stack>;
}