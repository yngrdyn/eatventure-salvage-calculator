

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Cg84vXsA.js","_app/immutable/chunks/scheduler.Bn3fAjyU.js","_app/immutable/chunks/index.DQrfLpgj.js"];
export const stylesheets = ["_app/immutable/assets/2.C-Rx2hfL.css"];
export const fonts = [];
