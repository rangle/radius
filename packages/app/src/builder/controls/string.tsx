import React, { ChangeEvent, useCallback } from "react";
import { Control } from "./types";
import { Box, Input, Label } from "ds";

export const String: Control<string> = ({ label, value, onChange }) => {
    const cb = useCallback((e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value), [onChange]);
    return <Box>
        <Label required>{ label }</Label>
        <Input value={ value } onChange={ cb }/>
    </Box>;
};