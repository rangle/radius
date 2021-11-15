import React, { ChangeEvent, useCallback } from "react";
import { Checkbox } from "ds";
import { Control } from "./types";

export const Bool: Control<boolean> = ({ value, label, onChange }) => {
    const cb = useCallback((e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked), [onChange]);
    return <Checkbox label={ label }
                     checked={ value }
                     onChange={ cb }/>;
};