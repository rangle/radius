import React, { useCallback, useState } from 'react';
import { theme, Box, Stack } from 'ds';
import { ThemeProvider } from 'styled-components';
import { ControlState } from "./builder/types";
import { RenderControls, RenderPiece } from "./builder/util/render_piece";
import { ComponentTree } from "./builder/component_tree";
import { RootBuilder } from "./builder/pieces/root";
import { createControl } from "./builder/util/create_control";

const find_ = (val: unknown, path: Array<string>, cb: (val: unknown) => boolean): Array<string> | null => { // TODO: simplify
  if (cb(val)) { return path; }

  if (Array.isArray(val)) {
      for (let i = 0; i < val.length; i++) {
        const p = find_(val[i], [...path, String(i)], cb);
        if (p !== null) { return p; }
      }

      return null;
  }

  if (typeof val === "object" && val) {
      const keys = Object.keys(val);
      for (let i = 0; i < keys.length; i++) {
          const k = keys[i];
          const p = find_((val as any)[k], [...path, k], cb);
          if (p !== null) { return p; }
      }

      return null;
  }

  return null;
};
const find = (val: unknown, cb: (val: unknown) => boolean): Array<string> | null => find_(val, [], cb);


const App: React.FC = () => {
  const [state, setState] = useState<ControlState>(createControl(RootBuilder));
  const [selectedPiece, setSelectedPiece] = useState<ControlState | null>(state);

  const dropSelection = useCallback(() => setSelectedPiece(null), []);
  const editPiece = useCallback((values: unknown) => {
    if (state === null) { throw new Error("Implementation error, empty builder state"); }

    const editPath = find(state, obj => obj === selectedPiece);
    if (!editPath) { throw new Error("Implementation error, selected piece is not in builder state"); }

    const stateCopy = { ...state };
    let obj = stateCopy;
    let k;
    while (k = editPath.shift()) { // eslint-disable-line no-cond-assign
        // Copy the target property
        (obj as any)[k] = Array.isArray((obj as any)[k]) ? [...(obj as any)[k]] : { ...(obj as any)[k] }; // TODO: refactor copying

        // And step in to continue traversal
        obj = (obj as any)[k];
    }

    (obj as any).controlsState = values;
    setState(stateCopy);

    // Need to update selected piece with an updated `obj`,
    // otherwise next search will fail, since searching is done using `===`
    setSelectedPiece(obj);
  }, [state, selectedPiece]);

  // TODO: implement two-panel layout in the component library
  return (
    <ThemeProvider theme={theme.light}>{
        <Box display="flex" flexDirection="row" flexWrap="nowrap">
            <Box flexGrow={ 0 } flexShrink={ 0 } flexBasis={ 300 }>{
                selectedPiece
                    ? <Stack axis="vertical">
                        <Box onClick={ dropSelection }>&larr;</Box>
                        <RenderControls { ...selectedPiece } onChange={ editPiece }/>
                    </Stack>
                    : <ComponentTree state={ state } onSelect={ setSelectedPiece }/>
            }</Box>
            <Box flexGrow={ 1 } flexShrink={ 1 } flexBasis="auto">
                <RenderPiece { ...state }/>
            </Box>
        </Box>
    }</ThemeProvider>
  );
};

export default App;
