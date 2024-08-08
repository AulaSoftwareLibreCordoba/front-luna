import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BhMpjpmn.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/auth/register.astro.mjs');
const _page3 = () => import('./pages/api/auth/signin.astro.mjs');
const _page4 = () => import('./pages/api/auth/signout.astro.mjs');
const _page5 = () => import('./pages/dashboard.astro.mjs');
const _page6 = () => import('./pages/pizarra.astro.mjs');
const _page7 = () => import('./pages/refugio.astro.mjs');
const _page8 = () => import('./pages/register.astro.mjs');
const _page9 = () => import('./pages/work/_---slug_.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');


const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/auth/register.ts", _page2],
    ["src/pages/api/auth/signin.ts", _page3],
    ["src/pages/api/auth/signout.ts", _page4],
    ["src/pages/dashboard.astro", _page5],
    ["src/pages/pizarra.astro", _page6],
    ["src/pages/refugio.astro", _page7],
    ["src/pages/register.astro", _page8],
    ["src/pages/work/[...slug].astro", _page9],
    ["src/pages/index.astro", _page10]
]);
const serverIslandMap = new Map();
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "7088e72b-b5d7-435f-8860-a2dc885777f6"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
