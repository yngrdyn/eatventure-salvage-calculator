

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DNV3HEej.js","_app/immutable/chunks/scheduler.Bn3fAjyU.js","_app/immutable/chunks/index.DQrfLpgj.js","_app/immutable/chunks/entry.GWP5bpTq.js"];
export const stylesheets = [];
export const fonts = [];
