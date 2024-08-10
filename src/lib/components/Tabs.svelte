<script lang="ts">
  import type { Item } from "$lib/types";
  import Calculator from "./Calculator.svelte";

  export let items: Item[] = [];
  export let activeTabValue = 1;

  const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>
<div>
<ul>
  {#each items as item}
    <li class={activeTabValue === item.value ? 'active' : ''}>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span tabindex={item.value} role="button" aria-pressed="false" on:click={handleClick(item.value)} style={`background-image: url("${item.icon}")`}></span>
    </li>
  {/each}
  </ul>
  {#each items as item}
    {#if activeTabValue == item.value}
    <div class="box">
      <Calculator bind:totals={item.totals} bind:type={item.type} bind:callback={item.callback}/>
    </div>
    {/if}
  {/each}
</div>
<style>
	.box {
		margin-bottom: 10px;
		padding: 40px;
    border-top: 0;
    background: #164e5f;
    border-top: 5px #0c303c solid;
    display: flex;
    flex-grow: 1;
	}
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin: -60px 0 -4px;
    list-style: none;
    justify-content: center;
    align-items: flex-end;
  }
	li {
		margin: 0 3px -1px;
    background: #0c303c;
    border-radius: 5px;
    color: white;
    max-height: 40px;
    display: flex;
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