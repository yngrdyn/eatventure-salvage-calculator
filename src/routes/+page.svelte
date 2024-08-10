<script lang="ts">
  import Tabs from '$lib/components/Tabs.svelte';
  import type { Item } from '$lib/types';

  const defaults = {
    normal: {
      common: 0,
      rare: 0,
      epic: 0,
      legendary: 0,
      ultimate: 0,
      mythic: 0,
      legendaryBP: 0,
      ultimateBP: 0,
      mythicBP: 0,
    },
    pet: {
      common: 0,
      rare: 0,
      epic: 0,
      legendary: 0,
      ultimate: 0,
    }
  }

  const generateItem = (value: number, id: string, type: 'normal' | 'pet', callback: (e: CustomEvent<any>, id: string) => void) => ({
    label: `${id.charAt(0).toUpperCase()}${id.slice(1)}`,
    value,
    icon: `${id}.png`,
    totals: defaults[type],
    callback: (e: CustomEvent<any>) => callback(e, id),
    type,
  });

  $: state = {
    hat: 0,
    shirt: 0,
    hand: 0,
    ring: 0,
    necklace: 0,
    pet: 0,
  }

  $: total = Object.keys(state).reduce((acc, current) => acc + state[current as keyof typeof state], 0)

  const callback = (e: CustomEvent<any>, name: string) => {
    state[name as keyof typeof state] = e.detail;
  }

  // List of tab items with labels, values and assigned components
  let items: Item[] = [
    generateItem(1, 'hat', 'normal', callback),
    generateItem(2, 'shirt', 'normal', callback),
    generateItem(3, 'hand', 'normal', callback),
    generateItem(4, 'ring', 'normal', callback),
    generateItem(5, 'necklace', 'normal', callback),
    generateItem(6, 'pet', 'pet', callback),
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
</style>
