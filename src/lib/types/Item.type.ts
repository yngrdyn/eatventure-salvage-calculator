import type { SvelteComponent } from "svelte";
import type { Calc } from "./Calc.type";

export type Item = {
  label: string;
  value: number;
  icon: string;
  callback: (e: CustomEvent<any>) => void;
  totals: Calc;
  type: 'normal' | 'pet';
};
