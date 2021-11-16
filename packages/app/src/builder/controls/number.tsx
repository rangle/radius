import React, { ChangeEvent, useCallback } from "react";
import { Control } from "./types";
import { Box, Input, Label } from "ds";

export const Number: Control<number> = ({ label, value, onChange }) => {
    const cb = useCallback((e: ChangeEvent<HTMLInputElement>) => onChange(parseInt(e.target.value)), [onChange]);
    return <Box>
        <Label required>{ label }</Label>
        <Input value={ value } type="number" onChange={ cb }/>
    </Box>;
};