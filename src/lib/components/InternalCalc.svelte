<script lang="ts">
  import type { Calc } from "$lib/types";
  import { createEventDispatcher } from "svelte";

  export let totals: Calc;
  export let multipliers: Calc;

  export let result = 0;

  const dispatch = createEventDispatcher();
  const input = () => dispatch('input', result);

  function handleInput(e: Event & { currentTarget: EventTarget & HTMLInputElement }, name: string) {
    const value = (e.target as HTMLInputElement).value;
    totals = { ...totals, [name]: value };
    result = Object.keys(totals).reduce((acc, current) => acc + ((totals[current as keyof typeof totals] ?? 0) * (multipliers[current as keyof typeof multipliers] ?? 0)), 0);
    input();
  }
</script>
<div style="width: 100%">
  <p style="color: white; font-weight: light; font-family: 'Tahoma'">Introduce the number of items to savage:</p>
  <ul>
    {#each Object.keys(multipliers) as key}
      <li class={key}>
        <img src={`${key}.png`} alt={key}/>
        <input type="number" value={totals[key]} on:input={(e) => handleInput(e, key)}/>
      </li>
    {/each}
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