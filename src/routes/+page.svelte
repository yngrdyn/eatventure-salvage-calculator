<script lang="ts">
  import Tabs from '$lib/components/Tabs.svelte';
  import type { Item } from '$lib/types';

  export const ssr = false;

  $: state = {
    hat: 0,
    shirt: 0,
    hand: 0,
    ring: 0,
    necklace: 0,
    pet: 0,
  }

  $: total = Object.keys(state).reduce((acc, current) => acc + state[current], 0)

  const callback = (e: CustomEvent<any>, name: keyof typeof state) => {
    state[name] = e.detail;
    console.log(e);
  }

  // List of tab items with labels, values and assigned components
  let items: Item[] = [
    {
      label: "Hat",
      value: 1,
      icon: 'hat.png',
      totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0, mythic: 0, legendaryBP: 0, ultimateBP: 0, mythicBP: 0 },
      callback: (e) => callback(e, 'hat'),
      type: 'normal',
    },
    {
      label: "Shirt",
      value: 2,
      icon: 'shirt.png',
      totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0, mythic: 0, legendaryBP: 0, ultimateBP: 0, mythicBP: 0 },
      callback: (e) => callback(e, 'shirt'),
      type: 'normal',
    },
    {
      label: "Hand",
      value: 3,
      icon: 'hand.png',
      totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0, mythic: 0, legendaryBP: 0, ultimateBP: 0, mythicBP: 0 },
      callback: (e) => callback(e, 'hand'),
      type: 'normal',
    },
    {
      label: "Ring",
      value: 4,
      icon: 'ring.png',
      totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0, mythic: 0, legendaryBP: 0, ultimateBP: 0, mythicBP: 0 },
      callback: (e) => callback(e, 'ring'),
      type: 'normal',
    },
    {
      label: "Necklace",
      value: 5,
      icon: 'necklace.png',
      totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0, mythic: 0, legendaryBP: 0, ultimateBP: 0, mythicBP: 0 },
      callback: (e) => callback(e, 'necklace'),
      type: 'normal',
    },
    {
      label: "Pet",
      value: 6,
      icon: 'pet.png',
      totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0 },
      callback: (e) => callback(e, 'pet'),
      type: 'pet',
    }
  ];
</script>

<div class="app">
  <div class="banner">
    <h1>Salvage XP Calculator</h1>
  </div>
  <div class="content">
    <Tabs bind:items />
  </div>
  <div class="totals">
    Total <span>{total}</span>
  </div>
</div>

<style>
  .banner {
    background: #4eb6ff url("/LOGO.webp") no-repeat center 20px;
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
    min-height: calc(100vh - 330px - 100px);
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
    padding: 0px 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.2rem;
  }

  .totals span {
    margin-left: 20px;
  }

  .developed {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #09242c;
    padding: 0 10px 10px;
  }
</style>
