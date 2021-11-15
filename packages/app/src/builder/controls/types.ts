import { ReactElement } from "react";

export type Control<T> = (props: { label: string, value: T, onChange: (val: T) => void }) => ReactElement;