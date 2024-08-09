export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["LOGO.webp","common.png","commonEgg.png","eatventure-banner.png","epic.png","epicEgg.png","favicon.png","hand.png","hat.png","legendary.png","legendaryBP.png","legendaryEgg.png","mythic.png","mythicBP.png","necklace.png","pet.png","rare.png","rareEgg.png","ring.png","shirt.png","ultimate.png","ultimateBP.png","ultimateEgg.png"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DquwvspO.js","app":"_app/immutable/entry/app.BlI4BD4X.js","imports":["_app/immutable/entry/start.DquwvspO.js","_app/immutable/chunks/entry.DsW049wI.js","_app/immutable/chunks/scheduler.Bn3fAjyU.js","_app/immutable/entry/app.BlI4BD4X.js","_app/immutable/chunks/scheduler.Bn3fAjyU.js","_app/immutable/chunks/index.DQrfLpgj.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
