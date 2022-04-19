import * as React from 'react';

import style from "./EditorRow.module.css";

export interface EditorRowProps {
  variable: string;
  value: string;
  type: 'color' | 'text';
};

const EditorRow = ({ variable, value, type }: EditorRowProps) => {
  const [inputValue, setInputValue] = React.useState(value);

  const change = (newValue: string) => {
    setInputValue(newValue);
    document.documentElement.style.setProperty(variable, newValue);
  };

  return <div className={style.editorRow}>
    <p>{variable}</p>
    &nbsp;&nbsp;
    {type === 'color' && <input type="color" value={inputValue} onChange={e => change(e.target.value)} />}
    {type === 'text' && <input type="text" value={inputValue} onChange={e => change(e.target.value)} />}
    
  </div>;
};

export default EditorRow;