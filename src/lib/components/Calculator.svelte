<script lang="ts">
  import type { Calc } from "$lib/types";
  import InternalCalc from "./InternalCalc.svelte";

  export let totals: Calc;
  export let type: "normal" | "pet";
  export let callback: (e: CustomEvent<any>) => void;

  const multipliers = {
    normal: {
    common: 4,
    rare: 9,
    epic: 22,
    legendaryBP: 26,
    legendary: 52,
    ultimateBP: 61,
    ultimate: 122,
    mythic: 287,
    mythicBP: 144,
  },
  pet: {
    common: 25,
    rare: 50,
    epic: 150,
    legendary: 425,
    ultimate: 1000,
  }
};

</script>
<InternalCalc bind:multipliers={multipliers[type]} bind:totals={totals} on:input={callback}/>
