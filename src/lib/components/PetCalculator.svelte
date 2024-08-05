<script lang="ts">
  import type { Calc } from "$lib/types";
  import { createEventDispatcher, SvelteComponent } from "svelte";

  export let totals: Calc = {
    common: 0,
    rare: 0,
    epic: 0,
    legendary: 0,
    ultimate: 0,
  };

  const multipliers = {
    common: 25,
    rare: 50,
    epic: 150,
    legendary: 425,
    ultimate: 1000,
  };

  export let result = 0;

  const dispatch = createEventDispatcher();
  const input = () => dispatch('input', { totals, result});

  function handleInput() {
    result = Object.keys(totals).reduce((acc, current) => acc + (totals[current] * multipliers[current]), 0);
    console.log(result);
    input();
  }
</script>
<div style="width: 100%">
  <p style="color: white; font-weight: light; font-family: 'Tahoma'">Introduce the number of items to savage:</p>
  <ul>
    <li class="common">
      <img src="commonEgg.png" />
      <input type="number" bind:value={totals.common} on:input={handleInput}/>
    </li>
    <li class="rare">
      <img src="rareEgg.png" />
      <input type="number" bind:value={totals.rare} on:input={handleInput}/>
    </li>
    <li class="epic">
      <img src="epicEgg.png" />
      <input type="number" bind:value={totals.epic} on:input={handleInput}/>
    </li>
    <li class="legendary">
      <img src="legendaryEgg.png" />
      <input type="number" bind:value={totals.legendary} on:input={handleInput}/>
    </li>
    <li class="ultimate">
      <img src="ultimateEgg.png" />
      <input type="number" bind:value={totals.ultimate} on:input={handleInput}/>
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

  span {
    border: 1px solid transparent;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: block;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 30px;
    padding: 20px 25px;
  }

  span:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
  }

  li.active {
    max-height: 50px;
    height: 50px;
  }

  li.active > span {
    background-color: #164e5f;
    margin-top: 5px;
    flex-grow: 1;
    background-size: 40px;
    padding: 20px 40px;
  }
</style>