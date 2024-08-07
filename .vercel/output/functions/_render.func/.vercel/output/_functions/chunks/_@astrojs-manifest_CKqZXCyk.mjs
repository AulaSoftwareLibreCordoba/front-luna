import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import { D as DEFAULT_404_COMPONENT } from './astro/server_BZCkA_Su.mjs';
import 'clsx';
import { escape } from 'html-escaper';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function template({
  title,
  pathname,
  statusCode = 404,
  tabTitle,
  body
}) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}

const DEFAULT_404_ROUTE = {
  component: DEFAULT_404_COMPONENT,
  generate: () => "",
  params: [],
  pattern: /\/404/,
  prerender: false,
  pathname: "/404",
  segments: [[{ content: "404", dynamic: false, spread: false }]],
  type: "page",
  route: "/404",
  fallbackRoutes: [],
  isIndex: false
};
function ensure404Route(manifest) {
  if (!manifest.routes.some((route) => route.route === "/404")) {
    manifest.routes.push(DEFAULT_404_ROUTE);
  }
  return manifest;
}
async function default404Page({ pathname }) {
  return new Response(
    template({
      statusCode: 404,
      title: "Not found",
      tabTitle: "404: Not Found",
      pathname
    }),
    { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
default404Page.isAstroComponentFactory = true;
const default404Instance = {
  default: default404Page
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/alvar/front-luna/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.8bCdeQXG.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.DOy5v81z.css"},{"type":"external","src":"/_astro/dashboard.BcjJeq2q.css"},{"type":"external","src":"/_astro/dashboard.oc2AjTD-.css"},{"type":"inline","content":"svg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}button[data-astro-cid-x3pjskd3]{display:flex;border:0;border-radius:999rem;padding:0;background-color:var(--gray-999);box-shadow:inset 0 0 0 1px var(--accent-overlay);cursor:pointer}.icon[data-astro-cid-x3pjskd3]{z-index:1;position:relative;display:flex;padding:.5rem;width:2rem;height:2rem;font-size:1rem;color:var(--accent-overlay)}.icon[data-astro-cid-x3pjskd3].light:before{content:\"\";z-index:-1;position:absolute;inset:0;background-color:var(--accent-regular);border-radius:999rem}.theme-dark .icon[data-astro-cid-x3pjskd3].light:before{transform:translate(100%)}.theme-dark .icon[data-astro-cid-x3pjskd3].dark,html:not(.theme-dark) .icon[data-astro-cid-x3pjskd3].light,button[data-astro-cid-x3pjskd3][aria-pressed=false] .icon[data-astro-cid-x3pjskd3].light{color:var(--accent-text-over)}@media (prefers-reduced-motion: no-preference){.icon[data-astro-cid-x3pjskd3],.icon[data-astro-cid-x3pjskd3].light:before{transition:transform var(--theme-transition),color var(--theme-transition)}}@media (forced-colors: active){.icon[data-astro-cid-x3pjskd3].light:before{background-color:SelectedItem}}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/register","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/register\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/register.ts","pathname":"/api/auth/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signin.ts","pathname":"/api/auth/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signout.ts","pathname":"/api/auth/signout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.8bCdeQXG.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.DOy5v81z.css"},{"type":"external","src":"/_astro/dashboard.BcjJeq2q.css"},{"type":"external","src":"/_astro/dashboard.oc2AjTD-.css"},{"type":"inline","content":"svg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}button[data-astro-cid-x3pjskd3]{display:flex;border:0;border-radius:999rem;padding:0;background-color:var(--gray-999);box-shadow:inset 0 0 0 1px var(--accent-overlay);cursor:pointer}.icon[data-astro-cid-x3pjskd3]{z-index:1;position:relative;display:flex;padding:.5rem;width:2rem;height:2rem;font-size:1rem;color:var(--accent-overlay)}.icon[data-astro-cid-x3pjskd3].light:before{content:\"\";z-index:-1;position:absolute;inset:0;background-color:var(--accent-regular);border-radius:999rem}.theme-dark .icon[data-astro-cid-x3pjskd3].light:before{transform:translate(100%)}.theme-dark .icon[data-astro-cid-x3pjskd3].dark,html:not(.theme-dark) .icon[data-astro-cid-x3pjskd3].light,button[data-astro-cid-x3pjskd3][aria-pressed=false] .icon[data-astro-cid-x3pjskd3].light{color:var(--accent-text-over)}@media (prefers-reduced-motion: no-preference){.icon[data-astro-cid-x3pjskd3],.icon[data-astro-cid-x3pjskd3].light:before{transition:transform var(--theme-transition),color var(--theme-transition)}}@media (forced-colors: active){.icon[data-astro-cid-x3pjskd3].light:before{background-color:SelectedItem}}\n"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.8bCdeQXG.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.DOy5v81z.css"},{"type":"external","src":"/_astro/dashboard.BcjJeq2q.css"},{"type":"external","src":"/_astro/dashboard.oc2AjTD-.css"},{"type":"inline","content":"svg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}button[data-astro-cid-x3pjskd3]{display:flex;border:0;border-radius:999rem;padding:0;background-color:var(--gray-999);box-shadow:inset 0 0 0 1px var(--accent-overlay);cursor:pointer}.icon[data-astro-cid-x3pjskd3]{z-index:1;position:relative;display:flex;padding:.5rem;width:2rem;height:2rem;font-size:1rem;color:var(--accent-overlay)}.icon[data-astro-cid-x3pjskd3].light:before{content:\"\";z-index:-1;position:absolute;inset:0;background-color:var(--accent-regular);border-radius:999rem}.theme-dark .icon[data-astro-cid-x3pjskd3].light:before{transform:translate(100%)}.theme-dark .icon[data-astro-cid-x3pjskd3].dark,html:not(.theme-dark) .icon[data-astro-cid-x3pjskd3].light,button[data-astro-cid-x3pjskd3][aria-pressed=false] .icon[data-astro-cid-x3pjskd3].light{color:var(--accent-text-over)}@media (prefers-reduced-motion: no-preference){.icon[data-astro-cid-x3pjskd3],.icon[data-astro-cid-x3pjskd3].light:before{transition:transform var(--theme-transition),color var(--theme-transition)}}@media (forced-colors: active){.icon[data-astro-cid-x3pjskd3].light:before{background-color:SelectedItem}}\n.post-it{width:180px;height:180px;position:relative;padding:10px;margin:20px;box-shadow:2px 2px 5px #0000004d;transform:rotate(-5deg);display:flex;justify-content:center;align-items:center;font-family:Arial,sans-serif;color:#fff;font-size:16px}.pin{width:14px;height:14px;background-color:#fff;border-radius:50%;position:absolute;top:-7px;left:50%;transform:translate(-50%);box-shadow:0 2px 5px #00000080}.post-it-text{width:100%;height:100%;border:none;background:none;font-family:Arial,sans-serif;font-size:16px;color:#fff;overflow:hidden;display:flex;justify-content:center;align-items:center;text-align:center}\n"}],"routeData":{"route":"/pizarra","isIndex":false,"type":"page","pattern":"^\\/pizarra\\/?$","segments":[[{"content":"pizarra","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pizarra.astro","pathname":"/pizarra","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.8bCdeQXG.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.DOy5v81z.css"},{"type":"external","src":"/_astro/dashboard.BcjJeq2q.css"},{"type":"external","src":"/_astro/dashboard.oc2AjTD-.css"},{"type":"inline","content":"svg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}button[data-astro-cid-x3pjskd3]{display:flex;border:0;border-radius:999rem;padding:0;background-color:var(--gray-999);box-shadow:inset 0 0 0 1px var(--accent-overlay);cursor:pointer}.icon[data-astro-cid-x3pjskd3]{z-index:1;position:relative;display:flex;padding:.5rem;width:2rem;height:2rem;font-size:1rem;color:var(--accent-overlay)}.icon[data-astro-cid-x3pjskd3].light:before{content:\"\";z-index:-1;position:absolute;inset:0;background-color:var(--accent-regular);border-radius:999rem}.theme-dark .icon[data-astro-cid-x3pjskd3].light:before{transform:translate(100%)}.theme-dark .icon[data-astro-cid-x3pjskd3].dark,html:not(.theme-dark) .icon[data-astro-cid-x3pjskd3].light,button[data-astro-cid-x3pjskd3][aria-pressed=false] .icon[data-astro-cid-x3pjskd3].light{color:var(--accent-text-over)}@media (prefers-reduced-motion: no-preference){.icon[data-astro-cid-x3pjskd3],.icon[data-astro-cid-x3pjskd3].light:before{transition:transform var(--theme-transition),color var(--theme-transition)}}@media (forced-colors: active){.icon[data-astro-cid-x3pjskd3].light:before{background-color:SelectedItem}}\n"}],"routeData":{"route":"/refugio","isIndex":false,"type":"page","pattern":"^\\/refugio\\/?$","segments":[[{"content":"refugio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/refugio.astro","pathname":"/refugio","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CWIFjJbo.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.DOy5v81z.css"},{"type":"external","src":"/_astro/dashboard.BcjJeq2q.css"},{"type":"external","src":"/_astro/index.Dzu2mZsY.css"},{"type":"inline","content":"svg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}button[data-astro-cid-x3pjskd3]{display:flex;border:0;border-radius:999rem;padding:0;background-color:var(--gray-999);box-shadow:inset 0 0 0 1px var(--accent-overlay);cursor:pointer}.icon[data-astro-cid-x3pjskd3]{z-index:1;position:relative;display:flex;padding:.5rem;width:2rem;height:2rem;font-size:1rem;color:var(--accent-overlay)}.icon[data-astro-cid-x3pjskd3].light:before{content:\"\";z-index:-1;position:absolute;inset:0;background-color:var(--accent-regular);border-radius:999rem}.theme-dark .icon[data-astro-cid-x3pjskd3].light:before{transform:translate(100%)}.theme-dark .icon[data-astro-cid-x3pjskd3].dark,html:not(.theme-dark) .icon[data-astro-cid-x3pjskd3].light,button[data-astro-cid-x3pjskd3][aria-pressed=false] .icon[data-astro-cid-x3pjskd3].light{color:var(--accent-text-over)}@media (prefers-reduced-motion: no-preference){.icon[data-astro-cid-x3pjskd3],.icon[data-astro-cid-x3pjskd3].light:before{transition:transform var(--theme-transition),color var(--theme-transition)}}@media (forced-colors: active){.icon[data-astro-cid-x3pjskd3].light:before{background-color:SelectedItem}}\n"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.8bCdeQXG.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.DOy5v81z.css"},{"type":"external","src":"/_astro/dashboard.BcjJeq2q.css"},{"type":"external","src":"/_astro/dashboard.oc2AjTD-.css"},{"type":"inline","content":".pill[data-astro-cid-2qeywk4b]{display:flex;padding:.5rem 1rem;gap:.5rem;color:var(--accent-text-over);border:1px solid var(--accent-regular);background-color:var(--accent-regular);border-radius:999rem;font-size:var(--text-md);line-height:1.35;white-space:nowrap}header[data-astro-cid-qwekciqp]{padding-bottom:2.5rem;border-bottom:1px solid var(--gray-800)}.back-link[data-astro-cid-qwekciqp]{display:none}.details[data-astro-cid-qwekciqp]{display:flex;flex-direction:column;padding:.5rem;gap:1.5rem;justify-content:space-between;align-items:center}.tags[data-astro-cid-qwekciqp]{display:flex;gap:.5rem}.description[data-astro-cid-qwekciqp]{font-size:var(--text-lg);max-width:54ch}.content[data-astro-cid-qwekciqp]{max-width:65ch;margin-inline:auto}.content[data-astro-cid-qwekciqp]>*+*{margin-top:1rem}.content[data-astro-cid-qwekciqp] h1,.content[data-astro-cid-qwekciqp] h2,.content[data-astro-cid-qwekciqp] h3,.content[data-astro-cid-qwekciqp] h4,.content[data-astro-cid-qwekciqp] h5{margin:1.5rem 0}.content[data-astro-cid-qwekciqp] img{border-radius:1.5rem;box-shadow:var(--shadow-sm);background:var(--gradient-subtle);border:1px solid var(--gray-800)}.content[data-astro-cid-qwekciqp] blockquote{font-size:var(--text-lg);font-family:var(--font-brand);font-weight:600;line-height:1.1;padding-inline-start:1.5rem;border-inline-start:.25rem solid var(--accent-dark);color:var(--gray-0)}.back-link[data-astro-cid-qwekciqp],.content[data-astro-cid-qwekciqp] a{-webkit-text-decoration:1px solid underline transparent;text-decoration:1px solid underline transparent;text-underline-offset:.25em;transition:text-decoration-color var(--theme-transition)}.back-link[data-astro-cid-qwekciqp]:hover,.back-link[data-astro-cid-qwekciqp]:focus,.content[data-astro-cid-qwekciqp] a:hover,.content[data-astro-cid-qwekciqp] a:focus{text-decoration-color:currentColor}@media (min-width: 50em){.back-link[data-astro-cid-qwekciqp]{display:block;align-self:flex-start}.details[data-astro-cid-qwekciqp]{flex-direction:row;gap:2.5rem}.content[data-astro-cid-qwekciqp] blockquote{font-size:var(--text-2xl)}}\nsvg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}button[data-astro-cid-x3pjskd3]{display:flex;border:0;border-radius:999rem;padding:0;background-color:var(--gray-999);box-shadow:inset 0 0 0 1px var(--accent-overlay);cursor:pointer}.icon[data-astro-cid-x3pjskd3]{z-index:1;position:relative;display:flex;padding:.5rem;width:2rem;height:2rem;font-size:1rem;color:var(--accent-overlay)}.icon[data-astro-cid-x3pjskd3].light:before{content:\"\";z-index:-1;position:absolute;inset:0;background-color:var(--accent-regular);border-radius:999rem}.theme-dark .icon[data-astro-cid-x3pjskd3].light:before{transform:translate(100%)}.theme-dark .icon[data-astro-cid-x3pjskd3].dark,html:not(.theme-dark) .icon[data-astro-cid-x3pjskd3].light,button[data-astro-cid-x3pjskd3][aria-pressed=false] .icon[data-astro-cid-x3pjskd3].light{color:var(--accent-text-over)}@media (prefers-reduced-motion: no-preference){.icon[data-astro-cid-x3pjskd3],.icon[data-astro-cid-x3pjskd3].light:before{transition:transform var(--theme-transition),color var(--theme-transition)}}@media (forced-colors: active){.icon[data-astro-cid-x3pjskd3].light:before{background-color:SelectedItem}}\n"}],"routeData":{"route":"/work/[...slug]","isIndex":false,"type":"page","pattern":"^\\/work(?:\\/(.*?))?\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/work/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BViovLwN.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.DOy5v81z.css"},{"type":"external","src":"/_astro/dashboard.BcjJeq2q.css"},{"type":"external","src":"/_astro/index.Dzu2mZsY.css"},{"type":"inline","content":"svg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}button[data-astro-cid-x3pjskd3]{display:flex;border:0;border-radius:999rem;padding:0;background-color:var(--gray-999);box-shadow:inset 0 0 0 1px var(--accent-overlay);cursor:pointer}.icon[data-astro-cid-x3pjskd3]{z-index:1;position:relative;display:flex;padding:.5rem;width:2rem;height:2rem;font-size:1rem;color:var(--accent-overlay)}.icon[data-astro-cid-x3pjskd3].light:before{content:\"\";z-index:-1;position:absolute;inset:0;background-color:var(--accent-regular);border-radius:999rem}.theme-dark .icon[data-astro-cid-x3pjskd3].light:before{transform:translate(100%)}.theme-dark .icon[data-astro-cid-x3pjskd3].dark,html:not(.theme-dark) .icon[data-astro-cid-x3pjskd3].light,button[data-astro-cid-x3pjskd3][aria-pressed=false] .icon[data-astro-cid-x3pjskd3].light{color:var(--accent-text-over)}@media (prefers-reduced-motion: no-preference){.icon[data-astro-cid-x3pjskd3],.icon[data-astro-cid-x3pjskd3].light:before{transition:transform var(--theme-transition),color var(--theme-transition)}}@media (forced-colors: active){.icon[data-astro-cid-x3pjskd3].light:before{background-color:SelectedItem}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/alvar/front-luna/src/pages/work/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/work/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/alvar/front-luna/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/alvar/front-luna/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["C:/Users/alvar/front-luna/src/pages/pizarra.astro",{"propagation":"none","containsHead":true}],["C:/Users/alvar/front-luna/src/pages/refugio.astro",{"propagation":"none","containsHead":true}],["C:/Users/alvar/front-luna/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/alvar/front-luna/src/pages/register.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/auth/register@_@ts":"pages/api/auth/register.astro.mjs","\u0000@astro-page:src/pages/api/auth/signin@_@ts":"pages/api/auth/signin.astro.mjs","\u0000@astro-page:src/pages/api/auth/signout@_@ts":"pages/api/auth/signout.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/pizarra@_@astro":"pages/pizarra.astro.mjs","\u0000@astro-page:src/pages/refugio@_@astro":"pages/refugio.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/work/[...slug]@_@astro":"pages/work/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/alvar/front-luna/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_xKHvCosB.mjs","C:/Users/alvar/front-luna/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_Cn_39gLq.mjs","\u0000@astrojs-manifest":"manifest_y6a634cB.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.8bCdeQXG.js","/astro/hoisted.js?q=2":"_astro/hoisted.CWIFjJbo.js","/astro/hoisted.js?q=0":"_astro/hoisted.BViovLwN.js","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/dashboard.DOy5v81z.css","/_astro/dashboard.oc2AjTD-.css","/_astro/dashboard.BcjJeq2q.css","/_astro/index.Dzu2mZsY.css","/favicon.svg","/assets/backgrounds/bg-footer-dark-1440w.jpg","/assets/backgrounds/bg-footer-dark-800w.jpg","/assets/backgrounds/bg-footer-light-1440w.jpg","/assets/backgrounds/bg-footer-light-800w.jpg","/assets/backgrounds/bg-main-dark-1440w.jpg","/assets/backgrounds/bg-main-dark-800w.jpg","/assets/backgrounds/bg-main-dark.svg","/assets/backgrounds/bg-main-light-1440w.jpg","/assets/backgrounds/bg-main-light-800w.jpg","/assets/backgrounds/bg-main-light.svg","/assets/backgrounds/bg-subtle-1-dark-1440w.jpg","/assets/backgrounds/bg-subtle-1-dark-800w.jpg","/assets/backgrounds/bg-subtle-1-light-1440w.jpg","/assets/backgrounds/bg-subtle-1-light-800w.jpg","/assets/backgrounds/bg-subtle-2-dark-1440w.jpg","/assets/backgrounds/bg-subtle-2-dark-800w.jpg","/assets/backgrounds/bg-subtle-2-light-1440w.jpg","/assets/backgrounds/bg-subtle-2-light-800w.jpg","/assets/backgrounds/noise.png","/_astro/client.5I5BMcNS.js","/_astro/hoisted.8bCdeQXG.js","/_astro/hoisted.BViovLwN.js","/_astro/hoisted.CWIFjJbo.js","/_astro/ThemeToggle.astro_astro_type_script_index_0_lang.uzd8m1xC.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { AstroIntegrationLogger as A, DEFAULT_404_ROUTE as D, Logger as L, default404Instance as d, ensure404Route as e, getEventPrefix as g, levels as l, manifest as m };
