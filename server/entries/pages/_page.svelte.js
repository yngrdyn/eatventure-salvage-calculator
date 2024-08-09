import { c as create_ssr_component, d as createEventDispatcher, f as add_attribute, h as each, e as escape, i as null_to_empty, v as validate_component } from "../../chunks/ssr.js";
const css$3 = {
  code: "ul.svelte-1kli9jg.svelte-1kli9jg{display:flex;padding-left:0;list-style:none;justify-content:center;align-items:flex-end;width:100%;flex-wrap:wrap}li.svelte-1kli9jg.svelte-1kli9jg{color:white;display:flex;align-items:center;margin:20px 5px 10px;flex-direction:column}li.svelte-1kli9jg img.svelte-1kli9jg{width:50px}li.svelte-1kli9jg input.svelte-1kli9jg{font-size:1.25rem;width:40px;border-radius:5px;margin-top:5px;border:none;background:#0c303c;color:white;padding:5px\n  }",
  map: `{"version":3,"file":"Calculator.svelte","sources":["Calculator.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { createEventDispatcher } from \\"svelte\\";\\nexport let totals;\\nconst multipliers = {\\n  common: 4,\\n  rare: 9,\\n  epic: 22,\\n  legendaryBP: 26,\\n  legendary: 52,\\n  ultimateBP: 61,\\n  ultimate: 122,\\n  mythic: 287,\\n  mythicBP: 144\\n};\\nexport let result = 0;\\nconst dispatch = createEventDispatcher();\\nconst input = () => dispatch(\\"input\\", result);\\nfunction handleInput(value, name) {\\n  totals = { ...totals, [name]: value };\\n  result = Object.keys(totals).reduce((acc, current) => acc + totals[current] * multipliers[current], 0);\\n  input();\\n}\\n<\/script>\\n<div style=\\"width: 100%\\">\\n  <p style=\\"color: white; font-weight: light; font-family: 'Tahoma'\\">Introduce the number of items to savage:</p>\\n  <ul>\\n    <li class=\\"common\\">\\n      <img src=\\"common.png\\" />\\n      <input type=\\"number\\" value={totals?.common} on:input={(e) => handleInput(e.target.value, 'common')}/>\\n    </li>\\n    <li class=\\"rare\\">\\n      <img src=\\"rare.png\\" />\\n      <input type=\\"number\\" value={totals?.rare} on:input={(e) => handleInput(e.target.value, 'rare')}/>\\n    </li>\\n    <li class=\\"epic\\">\\n      <img src=\\"epic.png\\" />\\n      <input type=\\"number\\" value={totals?.epic} on:input={(e) => handleInput(e.target.value, 'epic')}/>\\n    </li>\\n    <li class=\\"legendaryBP\\">\\n      <img src=\\"legendaryBP.png\\" />\\n      <input type=\\"number\\" value={totals?.legendaryBP} on:input={(e) => handleInput(e.target.value, 'legendaryBP')}/>\\n    </li>\\n    <li class=\\"legendary\\">\\n      <img src=\\"legendary.png\\" />\\n      <input type=\\"number\\" value={totals?.legendary} on:input={(e) => handleInput(e.target.value, 'legendary')}/>\\n    </li>\\n    <li class=\\"ultimateBP\\">\\n      <img src=\\"ultimateBP.png\\" />\\n      <input type=\\"number\\" value={totals?.ultimateBP} on:input={(e) => handleInput(e.target.value, 'ultimateBP')}/>\\n    </li>\\n    <li class=\\"ultimate\\">\\n      <img src=\\"ultimate.png\\" />\\n      <input type=\\"number\\" value={totals?.ultimate} on:input={(e) => handleInput(e.target.value, 'ultimate')}/>\\n    </li>\\n    <li class=\\"mythic\\">\\n      <img src=\\"mythic.png\\" />\\n      <input type=\\"number\\" value={totals?.mythic} on:input={(e) => handleInput(e.target.value, 'mythic')}/>\\n    </li>\\n    <li class=\\"mythicBP\\">\\n      <img src=\\"mythicBP.png\\" />\\n      <input type=\\"number\\" value={totals?.mythicBP} on:input={(e) => handleInput(e.target.value, 'mythicBP')}/>\\n    </li>\\n  </ul>\\n</div>\\n<style>\\n  ul {\\n    display: flex;\\n    padding-left: 0;\\n    list-style: none;\\n    justify-content: center;\\n    align-items: flex-end;\\n    width: 100%;\\n    flex-wrap: wrap;\\n  }\\n\\tli {\\n    color: white;\\n    display: flex;\\n    align-items: center;\\n    margin: 20px 5px 10px;\\n    flex-direction: column;\\n\\t}\\n\\n  li img {\\n    width: 50px;\\n  }\\n\\n  li input {\\n    font-size: 1.25rem;\\n    width: 40px;\\n    border-radius: 5px;\\n    margin-top: 5px;\\n    border: none;\\n    background: #0c303c;\\n    color: white;\\n    padding: 5px\\n  }\\n\\n  span {\\n    border: 1px solid transparent;\\n    border-top-left-radius: 5px;\\n    border-top-right-radius: 5px;\\n    display: block;\\n    cursor: pointer;\\n    background-repeat: no-repeat;\\n    background-position: center center;\\n    background-size: 30px;\\n    padding: 20px 25px;\\n  }\\n\\n  span:hover {\\n    border-color: #e9ecef #e9ecef #dee2e6;\\n  }\\n\\n  li.active {\\n    max-height: 50px;\\n    height: 50px;\\n  }\\n\\n  li.active > span {\\n    background-color: #164e5f;\\n    margin-top: 5px;\\n    flex-grow: 1;\\n    background-size: 40px;\\n    padding: 20px 40px;\\n  }\\n</style>"],"names":[],"mappings":"AAgEE,gCAAG,CACD,OAAO,CAAE,IAAI,CACb,YAAY,CAAE,CAAC,CACf,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,QAAQ,CACrB,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IACb,CACD,gCAAG,CACA,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,IAAI,CAAC,GAAG,CAAC,IAAI,CACrB,cAAc,CAAE,MACnB,CAEC,iBAAE,CAAC,kBAAI,CACL,KAAK,CAAE,IACT,CAEA,iBAAE,CAAC,oBAAM,CACP,SAAS,CAAE,OAAO,CAClB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,GAAG,CACf,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,GAAG;AAChB,EAAE"}`
};
const Calculator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { totals } = $$props;
  let { result = 0 } = $$props;
  createEventDispatcher();
  if ($$props.totals === void 0 && $$bindings.totals && totals !== void 0) $$bindings.totals(totals);
  if ($$props.result === void 0 && $$bindings.result && result !== void 0) $$bindings.result(result);
  $$result.css.add(css$3);
  return `<div style="width: 100%"><p style="color: white; font-weight: light; font-family: 'Tahoma'" data-svelte-h="svelte-w10wco">Introduce the number of items to savage:</p> <ul class="svelte-1kli9jg"><li class="common svelte-1kli9jg"><img src="common.png" class="svelte-1kli9jg"> <input type="number"${add_attribute("value", totals?.common, 0)} class="svelte-1kli9jg"></li> <li class="rare svelte-1kli9jg"><img src="rare.png" class="svelte-1kli9jg"> <input type="number"${add_attribute("value", totals?.rare, 0)} class="svelte-1kli9jg"></li> <li class="epic svelte-1kli9jg"><img src="epic.png" class="svelte-1kli9jg"> <input type="number"${add_attribute("value", totals?.epic, 0)} class="svelte-1kli9jg"></li> <li class="legendaryBP svelte-1kli9jg"><img src="legendaryBP.png" class="svelte-1kli9jg"> <input type="number"${add_attribute("value", totals?.legendaryBP, 0)} class="svelte-1kli9jg"></li> <li class="legendary svelte-1kli9jg"><img src="legendary.png" class="svelte-1kli9jg"> <input type="number"${add_attribute("value", totals?.legendary, 0)} class="svelte-1kli9jg"></li> <li class="ultimateBP svelte-1kli9jg"><img src="ultimateBP.png" class="svelte-1kli9jg"> <input type="number"${add_attribute("value", totals?.ultimateBP, 0)} class="svelte-1kli9jg"></li> <li class="ultimate svelte-1kli9jg"><img src="ultimate.png" class="svelte-1kli9jg"> <input type="number"${add_attribute("value", totals?.ultimate, 0)} class="svelte-1kli9jg"></li> <li class="mythic svelte-1kli9jg"><img src="mythic.png" class="svelte-1kli9jg"> <input type="number"${add_attribute("value", totals?.mythic, 0)} class="svelte-1kli9jg"></li> <li class="mythicBP svelte-1kli9jg"><img src="mythicBP.png" class="svelte-1kli9jg"> <input type="number"${add_attribute("value", totals?.mythicBP, 0)} class="svelte-1kli9jg"></li></ul> </div>`;
});
const css$2 = {
  code: "ul.svelte-1kli9jg.svelte-1kli9jg{display:flex;padding-left:0;list-style:none;justify-content:center;align-items:flex-end;width:100%;flex-wrap:wrap}li.svelte-1kli9jg.svelte-1kli9jg{color:white;display:flex;align-items:center;margin:20px 5px 10px;flex-direction:column}li.svelte-1kli9jg img.svelte-1kli9jg{width:50px}li.svelte-1kli9jg input.svelte-1kli9jg{font-size:1.25rem;width:40px;border-radius:5px;margin-top:5px;border:none;background:#0c303c;color:white;padding:5px\n  }",
  map: `{"version":3,"file":"PetCalculator.svelte","sources":["PetCalculator.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { createEventDispatcher, SvelteComponent } from \\"svelte\\";\\nexport let totals = {\\n  common: 0,\\n  rare: 0,\\n  epic: 0,\\n  legendary: 0,\\n  ultimate: 0\\n};\\nconst multipliers = {\\n  common: 25,\\n  rare: 50,\\n  epic: 150,\\n  legendary: 425,\\n  ultimate: 1e3\\n};\\nexport let result = 0;\\nconst dispatch = createEventDispatcher();\\nconst input = () => dispatch(\\"input\\", result);\\nfunction handleInput(value, name) {\\n  totals = { ...totals, [name]: value };\\n  result = Object.keys(totals).reduce((acc, current) => acc + totals[current] * multipliers[current], 0);\\n  input();\\n}\\n<\/script>\\n<div style=\\"width: 100%\\">\\n  <p style=\\"color: white; font-weight: light; font-family: 'Tahoma'\\">Introduce the number of items to savage:</p>\\n  <ul>\\n    <li class=\\"common\\">\\n      <img src=\\"commonEgg.png\\" />\\n      <input type=\\"number\\" value={totals.common} on:input={(e) => handleInput(e.target.value, 'common')}/>\\n    </li>\\n    <li class=\\"rare\\">\\n      <img src=\\"rareEgg.png\\" />\\n      <input type=\\"number\\" value={totals.rare} on:input={(e) => handleInput(e.target.value, 'rare')}/>\\n    </li>\\n    <li class=\\"epic\\">\\n      <img src=\\"epicEgg.png\\" />\\n      <input type=\\"number\\" value={totals.epic} on:input={(e) => handleInput(e.target.value, 'epic')}/>\\n    </li>\\n    <li class=\\"legendary\\">\\n      <img src=\\"legendaryEgg.png\\" />\\n      <input type=\\"number\\" value={totals.legendary} on:input={(e) => handleInput(e.target.value, 'legendary')}/>\\n    </li>\\n    <li class=\\"ultimate\\">\\n      <img src=\\"ultimateEgg.png\\" />\\n      <input type=\\"number\\" value={totals.ultimate} on:input={(e) => handleInput(e.target.value, 'ultimate')}/>\\n    </li>\\n  </ul>\\n</div>\\n<style>\\n  ul {\\n    display: flex;\\n    padding-left: 0;\\n    list-style: none;\\n    justify-content: center;\\n    align-items: flex-end;\\n    width: 100%;\\n    flex-wrap: wrap;\\n  }\\n\\tli {\\n    color: white;\\n    display: flex;\\n    align-items: center;\\n    margin: 20px 5px 10px;\\n    flex-direction: column;\\n\\t}\\n\\n  li img {\\n    width: 50px;\\n  }\\n\\n  li input {\\n    font-size: 1.25rem;\\n    width: 40px;\\n    border-radius: 5px;\\n    margin-top: 5px;\\n    border: none;\\n    background: #0c303c;\\n    color: white;\\n    padding: 5px\\n  }\\n\\n  span {\\n    border: 1px solid transparent;\\n    border-top-left-radius: 5px;\\n    border-top-right-radius: 5px;\\n    display: block;\\n    cursor: pointer;\\n    background-repeat: no-repeat;\\n    background-position: center center;\\n    background-size: 30px;\\n    padding: 20px 25px;\\n  }\\n\\n  span:hover {\\n    border-color: #e9ecef #e9ecef #dee2e6;\\n  }\\n\\n  li.active {\\n    max-height: 50px;\\n    height: 50px;\\n  }\\n\\n  li.active > span {\\n    background-color: #164e5f;\\n    margin-top: 5px;\\n    flex-grow: 1;\\n    background-size: 40px;\\n    padding: 20px 40px;\\n  }\\n</style>"],"names":[],"mappings":"AAkDE,gCAAG,CACD,OAAO,CAAE,IAAI,CACb,YAAY,CAAE,CAAC,CACf,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,QAAQ,CACrB,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IACb,CACD,gCAAG,CACA,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,IAAI,CAAC,GAAG,CAAC,IAAI,CACrB,cAAc,CAAE,MACnB,CAEC,iBAAE,CAAC,kBAAI,CACL,KAAK,CAAE,IACT,CAEA,iBAAE,CAAC,oBAAM,CACP,SAAS,CAAE,OAAO,CAClB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,GAAG,CACf,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,GAAG;AAChB,EAAE"}`
};
const PetCalculator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { totals = {
    common: 0,
    rare: 0,
    epic: 0,
    legendary: 0,
    ultimate: 0
  } } = $$props;
  let { result = 0 } = $$props;
  createEventDispatcher();
  if ($$props.totals === void 0 && $$bindings.totals && totals !== void 0) $$bindings.totals(totals);
  if ($$props.result === void 0 && $$bindings.result && result !== void 0) $$bindings.result(result);
  $$result.css.add(css$2);
  return `<div style="width: 100%"><p style="color: white; font-weight: light; font-family: 'Tahoma'" data-svelte-h="svelte-w10wco">Introduce the number of items to savage:</p> <ul class="svelte-1kli9jg"><li class="common svelte-1kli9jg"><img src="commonEgg.png" class="svelte-1kli9jg"> <input type="number"${add_attribute("value", totals.common, 0)} class="svelte-1kli9jg"></li> <li class="rare svelte-1kli9jg"><img src="rareEgg.png" class="svelte-1kli9jg"> <input type="number"${add_attribute("value", totals.rare, 0)} class="svelte-1kli9jg"></li> <li class="epic svelte-1kli9jg"><img src="epicEgg.png" class="svelte-1kli9jg"> <input type="number"${add_attribute("value", totals.epic, 0)} class="svelte-1kli9jg"></li> <li class="legendary svelte-1kli9jg"><img src="legendaryEgg.png" class="svelte-1kli9jg"> <input type="number"${add_attribute("value", totals.legendary, 0)} class="svelte-1kli9jg"></li> <li class="ultimate svelte-1kli9jg"><img src="ultimateEgg.png" class="svelte-1kli9jg"> <input type="number"${add_attribute("value", totals.ultimate, 0)} class="svelte-1kli9jg"></li></ul> </div>`;
});
const css$1 = {
  code: ".box.svelte-1rvz886.svelte-1rvz886{margin-bottom:10px;padding:40px;border-top:0;background:#164e5f;border-top:5px #0c303c solid;display:flex;flex-grow:1}ul.svelte-1rvz886.svelte-1rvz886{display:flex;flex-wrap:wrap;padding-left:0;margin:-60px 0 -4px;list-style:none;justify-content:center;align-items:flex-end}li.svelte-1rvz886.svelte-1rvz886{margin:0 3px -1px;background:#0c303c;border-radius:5px;color:white;max-height:40px;display:flex}span.svelte-1rvz886.svelte-1rvz886{border:1px solid transparent;border-top-left-radius:5px;border-top-right-radius:5px;display:block;cursor:pointer;background-repeat:no-repeat;background-position:center center;background-size:30px;padding:20px 25px}span.svelte-1rvz886.svelte-1rvz886:hover{border-color:#e9ecef #e9ecef #dee2e6}li.active.svelte-1rvz886.svelte-1rvz886{max-height:50px;height:50px}li.active.svelte-1rvz886>span.svelte-1rvz886{background-color:#164e5f;margin-top:5px;flex-grow:1;background-size:40px;padding:20px 40px}",
  map: `{"version":3,"file":"Tabs.svelte","sources":["Tabs.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Calculator from \\"./Calculator.svelte\\";\\nimport PetCalculator from \\"./PetCalculator.svelte\\";\\nexport let items = [];\\nexport let activeTabValue = 1;\\nconst handleClick = (tabValue) => () => activeTabValue = tabValue;\\n<\/script>\\n<div>\\n<ul>\\n  {#each items as item}\\n    <li class={activeTabValue === item.value ? 'active' : ''}>\\n      <span on:click={handleClick(item.value)} style={\`background-image: url(\\"\${item.icon}\\")\`}></span>\\n    </li>\\n  {/each}\\n  </ul>\\n  {#each items as item}\\n    {#if activeTabValue == item.value}\\n    <div class=\\"box\\">\\n      {#if item.type === 'normal'}\\n        <Calculator bind:totals={item.totals} on:input={item.callback}/>\\n      {:else}\\n        <PetCalculator bind:totals={item.totals} on:input={item.callback}/>\\n      {/if}\\n    </div>\\n    {/if}\\n  {/each}\\n</div>\\n<style>\\n\\t.box {\\n\\t\\tmargin-bottom: 10px;\\n\\t\\tpadding: 40px;\\n    border-top: 0;\\n    background: #164e5f;\\n    border-top: 5px #0c303c solid;\\n    display: flex;\\n    flex-grow: 1;\\n\\t}\\n  ul {\\n    display: flex;\\n    flex-wrap: wrap;\\n    padding-left: 0;\\n    margin: -60px 0 -4px;\\n    list-style: none;\\n    justify-content: center;\\n    align-items: flex-end;\\n  }\\n\\tli {\\n\\t\\tmargin: 0 3px -1px;\\n    background: #0c303c;\\n    border-radius: 5px;\\n    color: white;\\n    max-height: 40px;\\n    display: flex;\\n\\t}\\n\\n  span {\\n    border: 1px solid transparent;\\n    border-top-left-radius: 5px;\\n    border-top-right-radius: 5px;\\n    display: block;\\n    cursor: pointer;\\n    background-repeat: no-repeat;\\n    background-position: center center;\\n    background-size: 30px;\\n    padding: 20px 25px;\\n  }\\n\\n  span:hover {\\n    border-color: #e9ecef #e9ecef #dee2e6;\\n  }\\n\\n  li.active {\\n    max-height: 50px;\\n    height: 50px;\\n  }\\n\\n  li.active > span {\\n    background-color: #164e5f;\\n    margin-top: 5px;\\n    flex-grow: 1;\\n    background-size: 40px;\\n    padding: 20px 40px;\\n  }\\n</style>"],"names":[],"mappings":"AA2BC,kCAAK,CACJ,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACX,UAAU,CAAE,CAAC,CACb,UAAU,CAAE,OAAO,CACnB,UAAU,CAAE,GAAG,CAAC,OAAO,CAAC,KAAK,CAC7B,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,CACd,CACC,gCAAG,CACD,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,IAAI,CACf,YAAY,CAAE,CAAC,CACf,MAAM,CAAE,KAAK,CAAC,CAAC,CAAC,IAAI,CACpB,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,QACf,CACD,gCAAG,CACF,MAAM,CAAE,CAAC,CAAC,GAAG,CAAC,IAAI,CAChB,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,GAAG,CAClB,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IACZ,CAEC,kCAAK,CACH,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,WAAW,CAC7B,sBAAsB,CAAE,GAAG,CAC3B,uBAAuB,CAAE,GAAG,CAC5B,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,OAAO,CACf,iBAAiB,CAAE,SAAS,CAC5B,mBAAmB,CAAE,MAAM,CAAC,MAAM,CAClC,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,IAAI,CAAC,IAChB,CAEA,kCAAI,MAAO,CACT,YAAY,CAAE,OAAO,CAAC,OAAO,CAAC,OAChC,CAEA,EAAE,qCAAQ,CACR,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IACV,CAEA,EAAE,sBAAO,CAAG,mBAAK,CACf,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,GAAG,CACf,SAAS,CAAE,CAAC,CACZ,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,IAAI,CAAC,IAChB"}`
};
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items = [] } = $$props;
  let { activeTabValue = 1 } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  if ($$props.activeTabValue === void 0 && $$bindings.activeTabValue && activeTabValue !== void 0) $$bindings.activeTabValue(activeTabValue);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div><ul class="svelte-1rvz886">${each(items, (item) => {
      return `<li class="${escape(null_to_empty(activeTabValue === item.value ? "active" : ""), true) + " svelte-1rvz886"}"><span${add_attribute("style", `background-image: url("${item.icon}")`, 0)} class="svelte-1rvz886"></span> </li>`;
    })}</ul> ${each(items, (item) => {
      return `${activeTabValue == item.value ? `<div class="box svelte-1rvz886">${item.type === "normal" ? `${validate_component(Calculator, "Calculator").$$render(
        $$result,
        { totals: item.totals },
        {
          totals: ($$value) => {
            item.totals = $$value;
            $$settled = false;
          }
        },
        {}
      )}` : `${validate_component(PetCalculator, "PetCalculator").$$render(
        $$result,
        { totals: item.totals },
        {
          totals: ($$value) => {
            item.totals = $$value;
            $$settled = false;
          }
        },
        {}
      )}`} </div>` : ``}`;
    })} </div>`;
  } while (!$$settled);
  return $$rendered;
});
const css = {
  code: `.banner.svelte-x5b84p.svelte-x5b84p{background:#4eb6ff url("LOGO.webp") no-repeat center 20px;background-size:300px;min-height:260px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:70px}.banner.svelte-x5b84p>h1.svelte-x5b84p{color:white;font-size:1rem;text-transform:uppercase;padding-left:10%}.content.svelte-x5b84p.svelte-x5b84p{min-height:calc(100vh - 330px - 40px);height:100%;display:flex;flex-direction:column;background:#164e5f;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif}.totals.svelte-x5b84p.svelte-x5b84p{background:#0c303c;height:40px;display:flex;justify-content:flex-end;align-items:center;color:white;padding:0 20px;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif}`,
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Tabs from \\"$lib/components/Tabs.svelte\\";\\n$: state = {\\n  hat: 0,\\n  shirt: 0,\\n  hand: 0,\\n  ring: 0,\\n  necklace: 0,\\n  pet: 0\\n};\\n$: total = Object.keys(state).reduce((acc, current) => acc + state[current], 0);\\nconst callback = (e, name) => {\\n  state[name] = e.detail;\\n  console.log(e);\\n};\\nlet items = [\\n  {\\n    label: \\"Hat\\",\\n    value: 1,\\n    icon: \\"hat.png\\",\\n    totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0, mythic: 0, legendaryBP: 0, ultimateBP: 0, mythicBP: 0 },\\n    callback: (e) => callback(e, \\"hat\\"),\\n    type: \\"normal\\"\\n  },\\n  {\\n    label: \\"Shirt\\",\\n    value: 2,\\n    icon: \\"shirt.png\\",\\n    totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0, mythic: 0, legendaryBP: 0, ultimateBP: 0, mythicBP: 0 },\\n    callback: (e) => callback(e, \\"shirt\\"),\\n    type: \\"normal\\"\\n  },\\n  {\\n    label: \\"Hand\\",\\n    value: 3,\\n    icon: \\"hand.png\\",\\n    totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0, mythic: 0, legendaryBP: 0, ultimateBP: 0, mythicBP: 0 },\\n    callback: (e) => callback(e, \\"hand\\"),\\n    type: \\"normal\\"\\n  },\\n  {\\n    label: \\"Ring\\",\\n    value: 4,\\n    icon: \\"ring.png\\",\\n    totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0, mythic: 0, legendaryBP: 0, ultimateBP: 0, mythicBP: 0 },\\n    callback: (e) => callback(e, \\"ring\\"),\\n    type: \\"normal\\"\\n  },\\n  {\\n    label: \\"Necklace\\",\\n    value: 5,\\n    icon: \\"necklace.png\\",\\n    totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0, mythic: 0, legendaryBP: 0, ultimateBP: 0, mythicBP: 0 },\\n    callback: (e) => callback(e, \\"necklace\\"),\\n    type: \\"normal\\"\\n  },\\n  {\\n    label: \\"Pet\\",\\n    value: 6,\\n    icon: \\"pet.png\\",\\n    totals: { common: 0, rare: 0, epic: 0, legendary: 0, ultimate: 0 },\\n    callback: (e) => callback(e, \\"pet\\"),\\n    type: \\"pet\\"\\n  }\\n];\\n<\/script>\\n\\n<div class=\\"app\\">\\n  <div class=\\"banner\\">\\n    <h1>Salvage XP Calculator</h1>\\n  </div>\\n  <div class=\\"content\\">\\n    <Tabs bind:items />\\n  </div>\\n  <div class=\\"totals\\">\\n    Total {total}\\n  </div>\\n</div>\\n\\n<style>\\n  .banner {\\n    background: #4eb6ff url(\\"LOGO.webp\\") no-repeat center 20px;\\n    background-size: 300px;\\n    min-height: 260px;\\n    display: flex;\\n    align-items: flex-end;\\n    justify-content: center;\\n    padding-bottom: 70px;\\n  }\\n\\n  .banner > h1 {\\n    color: white;\\n    font-size: 1rem;\\n    text-transform: uppercase;\\n    padding-left: 10%;\\n  }\\n\\n  .content {\\n    min-height: calc(100vh - 330px - 40px);\\n    height: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    background: #164e5f;\\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n  }\\n\\n  .totals {\\n    background: #0c303c;\\n    height: 40px;\\n    display: flex;\\n    justify-content: flex-end;\\n    align-items: center;\\n    color: white;\\n    padding: 0 20px;\\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA+EE,mCAAQ,CACN,UAAU,CAAE,OAAO,CAAC,gBAAgB,CAAC,SAAS,CAAC,MAAM,CAAC,IAAI,CAC1D,eAAe,CAAE,KAAK,CACtB,UAAU,CAAE,KAAK,CACjB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,QAAQ,CACrB,eAAe,CAAE,MAAM,CACvB,cAAc,CAAE,IAClB,CAEA,qBAAO,CAAG,gBAAG,CACX,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,SAAS,CACzB,YAAY,CAAE,GAChB,CAEA,oCAAS,CACP,UAAU,CAAE,KAAK,KAAK,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CAAC,IAAI,CAAC,CACtC,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,OAAO,CACnB,WAAW,CAAE,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,OAAO,CAAC,CAAC,UACpD,CAEA,mCAAQ,CACN,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,QAAQ,CACzB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,WAAW,CAAE,UAAU,CAAC,CAAC,MAAM,CAAC,CAAC,MAAM,CAAC,CAAC,OAAO,CAAC,CAAC,UACpD"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let state;
  let total;
  const callback = (e, name) => {
    state[name] = e.detail;
    console.log(e);
  };
  let items = [
    {
      label: "Hat",
      value: 1,
      icon: "hat.png",
      totals: {
        common: 0,
        rare: 0,
        epic: 0,
        legendary: 0,
        ultimate: 0,
        mythic: 0,
        legendaryBP: 0,
        ultimateBP: 0,
        mythicBP: 0
      },
      callback: (e) => callback(e, "hat"),
      type: "normal"
    },
    {
      label: "Shirt",
      value: 2,
      icon: "shirt.png",
      totals: {
        common: 0,
        rare: 0,
        epic: 0,
        legendary: 0,
        ultimate: 0,
        mythic: 0,
        legendaryBP: 0,
        ultimateBP: 0,
        mythicBP: 0
      },
      callback: (e) => callback(e, "shirt"),
      type: "normal"
    },
    {
      label: "Hand",
      value: 3,
      icon: "hand.png",
      totals: {
        common: 0,
        rare: 0,
        epic: 0,
        legendary: 0,
        ultimate: 0,
        mythic: 0,
        legendaryBP: 0,
        ultimateBP: 0,
        mythicBP: 0
      },
      callback: (e) => callback(e, "hand"),
      type: "normal"
    },
    {
      label: "Ring",
      value: 4,
      icon: "ring.png",
      totals: {
        common: 0,
        rare: 0,
        epic: 0,
        legendary: 0,
        ultimate: 0,
        mythic: 0,
        legendaryBP: 0,
        ultimateBP: 0,
        mythicBP: 0
      },
      callback: (e) => callback(e, "ring"),
      type: "normal"
    },
    {
      label: "Necklace",
      value: 5,
      icon: "necklace.png",
      totals: {
        common: 0,
        rare: 0,
        epic: 0,
        legendary: 0,
        ultimate: 0,
        mythic: 0,
        legendaryBP: 0,
        ultimateBP: 0,
        mythicBP: 0
      },
      callback: (e) => callback(e, "necklace"),
      type: "normal"
    },
    {
      label: "Pet",
      value: 6,
      icon: "pet.png",
      totals: {
        common: 0,
        rare: 0,
        epic: 0,
        legendary: 0,
        ultimate: 0
      },
      callback: (e) => callback(e, "pet"),
      type: "pet"
    }
  ];
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    state = {
      hat: 0,
      shirt: 0,
      hand: 0,
      ring: 0,
      necklace: 0,
      pet: 0
    };
    total = Object.keys(state).reduce((acc, current) => acc + state[current], 0);
    $$rendered = `<div class="app"><div class="banner svelte-x5b84p" data-svelte-h="svelte-8gdzvh"><h1 class="svelte-x5b84p">Salvage XP Calculator</h1></div> <div class="content svelte-x5b84p">${validate_component(Tabs, "Tabs").$$render(
      $$result,
      { items },
      {
        items: ($$value) => {
          items = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="totals svelte-x5b84p">Total ${escape(total)}</div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
