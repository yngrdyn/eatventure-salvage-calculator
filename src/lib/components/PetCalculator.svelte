<script lang="ts">
  import type { Calc } from "$lib/types";
  import { createEventDispatcher, SvelteComponent } from "svelte";

  export let totals: Calc;

  const multipliers = {
    common: 25,
    rare: 50,
    epic: 150,
    legendary: 425,
    ultimate: 1000,
  };

  export let result = 0;

  const dispatch = createEventDispatcher();
  const input = () => dispatch('input', result);

  function handleInput(e: Event & { currentTarget: EventTarget & HTMLInputElement }, name: string) {
    const value = (e.target as HTMLInputElement).value;
    totals = { ...totals, [name]: value };
    result = Object.keys(totals).reduce((acc, current) => acc + ((totals[current as keyof typeof totals] ?? 0) * multipliers[current as keyof typeof multipliers]), 0);
    input();
  }
</script>
<div style="width: 100%">
  <p style="color: white; font-weight: light; font-family: 'Tahoma'">Introduce the number of items to savage:</p>
  <ul>
    <li class="common">
      <img src="commonEgg.png" alt="common"/>
      <input type="number" value={totals.common} on:input={(e) => handleInput(e, 'common')}/>
    </li>
    <li class="rare">
      <img src="rareEgg.png" alt="rare"/>
      <input type="number" value={totals.rare} on:input={(e) => handleInput(e, 'rare')}/>
    </li>
    <li class="epic">
      <img src="epicEgg.png" alt="epic"/>
      <input type="number" value={totals.epic} on:input={(e) => handleInput(e, 'epic')}/>
    </li>
    <li class="legendary">
      <img src="legendaryEgg.png" alt="legendary"/>
      <input type="number" value={totals.legendary} on:input={(e) => handleInput(e, 'legendary')}/>
    </li>
    <li class="ultimate">
      <img src="ultimateEgg.png" alt="ultimate"/>
      <input type="number" value={totals.ultimate} on:input={(e) => handleInput(e, 'ultimate')}/>
    </li>
  </ul>
</div>
<style>
  ul {
    display: flex;
    padding-left: 0;
    list-style: none;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    flex-wrap: wrap;
  }
	li {
    color: white;
    display: flex;
    align-items: center;
    margin: 20px 5px 10px;
    flex-direction: column;
	}

  li img {
    width: 50px;
  }

  li input {
    font-size: 1.25rem;
    width: 40px;
    border-radius: 5px;
    margin-top: 5px;
    border: none;
    background: #0c303c;
    color: white;
    padding: 5px
  }
</style>