import * as React from 'react';
import DsButton from '../../../../../src/components/button/button';
import EditorRow from '../EditorRow/EditorRow';

import style from "./Editor.module.css";

const COLORS = [
  { variable: "--ds-color-brand-primary-main", value: "#D44527" },
  { variable: "--ds-color-brand-primary-light", value: "#EA5435" },
  { variable: "--ds-color-brand-primary-dark", value: "#B73B20" },
  { variable: "--ds-color-brand-primary-darker", value: "#A3331A" },
  { variable: "--ds-color-brand-secondary-main", value: "#262626" },
  { variable: "--ds-color-brand-secondary-light", value: "#3E3E3E" },
  { variable: "--ds-color-brand-secondary-dark", value: "#1A1919" },
  { variable: "--ds-color-brand-secondary-darker", value: "#0E0E0E" },
  { variable: "--ds-color--ui-primary", value: "#262626" },
  { variable: "--ds-color--ui-secondary", value: "#828181" },
  { variable: "--ds-color--ui-tertiary", value: "#EDEDED" },
  { variable: "--ds-color--ui-quaternary", value: "#FFFFFF" },
  { variable: "--ds-color--ui-disabled", value: "#DEDEDE" },
  { variable: "--ds-color--ui-error-default", value: "#D60000" },
  { variable: "--ds-color--ui-error-light", value: "#ED1A1A" },
  { variable: "--ds-color--ui-error-dark", value: "#AB1010" },
  { variable: "--ds-color--ui-success-default", value: "#138000" },
  { variable: "--ds-color--ui-success-light", value: "#34AF1F" },
  { variable: "--ds-color--ui-success-dark", value: "#105E03" },
  { variable: "--ds-color--ui-alert-default", value: "#DB7C00" },
  { variable: "--ds-color--ui-alert-light", value: "#EF9827" },
  { variable: "--ds-color--ui-alert-dark", value: "#B16400" },
  { variable: "--ds-color--ui-background-1", value: "#FFFFFF" },
  { variable: "--ds-color--ui-background-2", value: "#F1F1F1" },
  { variable: "--ds-color--text-primary", value: "#262626" },
  { variable: "--ds-color--text-secondary", value: "#757575" },
  { variable: "--ds-color--text-disabled", value: "#9C9C9C" },
  { variable: "--ds-color--text-inverse", value: "#FFFFFF" },
  { variable: "--ds-color--text-error", value: "#D0421B" },
  { variable: "--ds-color--text-success", value: "#138000" },
  { variable: "--ds-color--text-link", value: "#0366D6" },
];

const BORDERS = [
  { variable: "--ds-border-radius-s", value: "4px" },
  { variable: "--ds-border-radius-m", value: "8px" },
  { variable: "--ds-border-radius-l", value: "16px" },
];

const SPACES = [
  { variable: "--ds-space-1", value: "0.25rem" },
  { variable: "--ds-space-2", value: "0.5rem" },
  { variable: "--ds-space-3", value: ".75rem" },
  { variable: "--ds-space-4", value: "1rem" },
  { variable: "--ds-space-5", value: "1.25rem" },
  { variable: "--ds-space-6", value: "1.5rem" },
  { variable: "--ds-space-7", value: "2rem" },
  { variable: "--ds-space-8", value: "2.5rem" },
  { variable: "--ds-space-9", value: "3rem" },
  { variable: "--ds-space-10", value: "4rem" },
  { variable: "--ds-space-11", value: "6rem" },
  { variable: "--ds-space-12", value: "8rem" },
];

const TYPOGRAPHIES = [
  { variable: "--ds-typography-scale-5xl", value: "3rem" },
  { variable: "--ds-typography-scale-4xl", value: "2.5rem" },
  { variable: "--ds-typography-scale-3xl", value: "2rem" },
  { variable: "--ds-typography-scale-2xl", value: "1.75rem" },
  { variable: "--ds-typography-scale-xl", value: "1.5rem" },
  { variable: "--ds-typography-scale-l", value: "1.25rem" },
  { variable: "--ds-typography-scale-m", value: "1rem" },
  { variable: "--ds-typography-scale-s", value: "0.75rem" },
  { variable: "--ds-typography-scale-xs", value: "0.625rem" },
]

const Editor = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  let VALUES = COLORS;
  let TYPE : 'color' | 'text' = 'color';
  if(selectedIndex === 1) {
    VALUES = BORDERS;
    TYPE = 'text';
  } else if(selectedIndex === 2) {
    VALUES = SPACES;
    TYPE = 'text';
  } else if(selectedIndex === 3) {
    VALUES = TYPOGRAPHIES;
    TYPE = 'text';
  }

  return <div className={style.content}>
    <div className={style.contentButtons}>
      <DsButton onClick={() => setSelectedIndex(0)} size='small' label='Colors' variant={
        selectedIndex === 0 ? 'primary' : 'secondary'
      } />
      &nbsp;&nbsp;
      <DsButton onClick={() => setSelectedIndex(2)} size='small' label='Spaces' variant={
        selectedIndex === 1 ? 'primary' : 'secondary'
      } />
      &nbsp;&nbsp;
      <DsButton onClick={() => setSelectedIndex(1)} size='small' label='Borders' variant={
        selectedIndex === 2 ? 'primary' : 'secondary'
      } />
      &nbsp;&nbsp;
      <DsButton onClick={() => setSelectedIndex(3)} size='small' label='Typography' variant={
        selectedIndex === 3 ? 'primary' : 'secondary'
      } />
    </div>
    <br/>
    <br/>
    <div>
      {VALUES.map((data) => {
        return <EditorRow type={TYPE} variable={data.variable} value={data.value} key={data.variable} />
      })}
    </div>
  </div>;
};

export default Editor;