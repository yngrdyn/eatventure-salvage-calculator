

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BLY3yr5v.js","_app/immutable/chunks/scheduler.Bn3fAjyU.js","_app/immutable/chunks/index.DQrfLpgj.js","_app/immutable/chunks/entry.DYUx6fIN.js"];
export const stylesheets = [];
export const fonts = [];
