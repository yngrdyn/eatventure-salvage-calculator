<script lang="ts">
  import Tabs from '$lib/components/Tabs.svelte';
  import type { Item } from '$lib/types';

  $: state = {
    hat: { totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0, mythic: 0 }, result: 0 },
    shirt: { totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0, mythic: 0 }, result: 0 },
    hand: { totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0, mythic: 0 }, result: 0 },
    ring: { totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0, mythic: 0 }, result: 0 },
    necklace: { totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0, mythic: 0 }, result: 0 },
    pet: { totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0, mythic: 0 }, result: 0 },
  }

  const callbacks = {
    hat: (e: CustomEvent<any>) => {
      state.hat = e.detail;
      console.log(e);
      console.log(state);
    },
    shirt: (e: CustomEvent<any>) => {
      state.shirt = e.detail;
      console.log(e);
      console.log(state);
    },
    hand: (e: CustomEvent<any>) => {
      state.hand = e.detail;
    },
    ring: (e: CustomEvent<any>) => {
      state.ring = e.detail;
    },
    necklace: (e: CustomEvent<any>) => {
      state.necklace = e.detail;
    },
    pet: (e: CustomEvent<any>) => {
      state.pet = e.detail;
    },
  }

  $: total = Object.keys(state).reduce((acc, current) => acc + state[current].result, 0)

  // List of tab items with labels, values and assigned components
  const items: Item[] = [
    {
      label: "Hat",
      value: 1,
      icon: 'hat.png',
      totals: state?.hat.totals,
      callback: callbacks.hat,
      type: 'normal',
    },
    {
      label: "Shirt",
      value: 2,
      icon: 'shirt.png',
      totals: state?.shirt.totals,
      callback: callbacks.shirt,
      type: 'normal',
    },
    {
      label: "Hand",
      value: 3,
      icon: 'hand.png',
      totals: state?.hand.totals,
      callback: callbacks.hand,
      type: 'normal',
    },
    {
      label: "Ring",
      value: 4,
      icon: 'ring.png',
      totals: state?.ring.totals,
      callback: callbacks.ring,
      type: 'normal',
    },
    {
      label: "Necklace",
      value: 5,
      icon: 'necklace.png',
      totals: state?.necklace.totals,
      callback: callbacks.necklace,
      type: 'normal',
    },
    {
      label: "Pet",
      value: 6,
      icon: 'pet.png',
      totals: state?.pet.totals,
      callback: callbacks.pet,
      type: 'pet',
    }
  ];
</script>

<div class="app">
  <div class="banner">
    <h1>Salvage XP Calculator</h1>
  </div>
  <div class="content">
    <Tabs {items} />
  </div>
  <div class="totals">
    Total {total}
  </div>
</div>

<style>
  .banner {
    background: #4eb6ff url("LOGO.webp") no-repeat center 20px;
    background-size: 300px;
    min-height: 260px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 70px;
  }

  .banner > h1 {
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
    padding-left: 10%;
  }

  .content {
    min-height: calc(100vh - 330px - 40px);
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #164e5f;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .totals {
    background: #0c303c;
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
    padding: 0 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
</style>
