<script lang="ts">
  import type { Calc } from "$lib/types";
  import { createEventDispatcher } from "svelte";

  export let totals: Calc;

  const multipliers = {
    common: 4,
    rare: 9,
    epic: 22,
    legendaryBP: 26,
    legendary: 52,
    ultimateBP: 61,
    ultimate: 122,
    mythic: 287,
    mythicBP: 144,
  };

  export let result = 0;

  const dispatch = createEventDispatcher();
  const input = () => dispatch('input', result);

  function handleInput(value: number, name: string) {
    totals = { ...totals, [name]: value };
    result = Object.keys(totals).reduce((acc, current) => acc + (totals[current] * multipliers[current]), 0);
    input();
  }
</script>
<div style="width: 100%">
  <p style="color: white; font-weight: light; font-family: 'Tahoma'">Introduce the number of items to savage:</p>
  <ul>
    <li class="common">
      <img src="common.png" />
      <input type="number" value={totals?.common} on:input={(e) => handleInput(e.target.value, 'common')}/>
    </li>
    <li class="rare">
      <img src="rare.png" />
      <input type="number" value={totals?.rare} on:input={(e) => handleInput(e.target.value, 'rare')}/>
    </li>
    <li class="epic">
      <img src="epic.png" />
      <input type="number" value={totals?.epic} on:input={(e) => handleInput(e.target.value, 'epic')}/>
    </li>
    <li class="legendaryBP">
      <img src="legendaryBP.png" />
      <input type="number" value={totals?.legendaryBP} on:input={(e) => handleInput(e.target.value, 'legendaryBP')}/>
    </li>
    <li class="legendary">
      <img src="legendary.png" />
      <input type="number" value={totals?.legendary} on:input={(e) => handleInput(e.target.value, 'legendary')}/>
    </li>
    <li class="ultimateBP">
      <img src="ultimateBP.png" />
      <input type="number" value={totals?.ultimateBP} on:input={(e) => handleInput(e.target.value, 'ultimateBP')}/>
    </li>
    <li class="ultimate">
      <img src="ultimate.png" />
      <input type="number" value={totals?.ultimate} on:input={(e) => handleInput(e.target.value, 'ultimate')}/>
    </li>
    <li class="mythic">
      <img src="mythic.png" />
      <input type="number" value={totals?.mythic} on:input={(e) => handleInput(e.target.value, 'mythic')}/>
    </li>
    <li class="mythicBP">
      <img src="mythicBP.png" />
      <input type="number" value={totals?.mythicBP} on:input={(e) => handleInput(e.target.value, 'mythicBP')}/>
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