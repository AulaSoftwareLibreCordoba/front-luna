import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_CPYYwRLo.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/alvar/front-luna/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.8bCdeQXG.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.WwpDJf4k.css"},{"type":"external","src":"/_astro/dashboard.jei2AKSR.css"},{"type":"external","src":"/_astro/dashboard.Bq2PGZ3Z.css"},{"type":"inline","content":"svg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}button[data-astro-cid-x3pjskd3]{display:flex;border:0;border-radius:999rem;padding:0;box-shadow:inset 0 0 0 1px #7611a6;cursor:pointer}.icon[data-astro-cid-x3pjskd3]{z-index:1;position:relative;display:flex;padding:.5rem;width:2rem;height:2rem;font-size:1rem;color:#7611a6}.icon[data-astro-cid-x3pjskd3].light:before{content:\"\";z-index:-1;position:absolute;inset:0;background-color:var(--accent-regular);border-radius:999rem}.theme-dark .icon[data-astro-cid-x3pjskd3].light:before{transform:translate(100%)}.theme-dark .icon[data-astro-cid-x3pjskd3].dark,html:not(.theme-dark) .icon[data-astro-cid-x3pjskd3].light,button[data-astro-cid-x3pjskd3][aria-pressed=false] .icon[data-astro-cid-x3pjskd3].light{color:var(--accent-text-over)}@media (prefers-reduced-motion: no-preference){.icon[data-astro-cid-x3pjskd3],.icon[data-astro-cid-x3pjskd3].light:before{transition:transform var(--theme-transition),color var(--theme-transition)}}@media (forced-colors: active){.icon[data-astro-cid-x3pjskd3].light:before{background-color:SelectedItem}}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/register","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/register\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/register.ts","pathname":"/api/auth/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signin.ts","pathname":"/api/auth/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/signout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/signout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/signout.ts","pathname":"/api/auth/signout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.8bCdeQXG.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.WwpDJf4k.css"},{"type":"external","src":"/_astro/dashboard.jei2AKSR.css"},{"type":"external","src":"/_astro/dashboard.Bq2PGZ3Z.css"},{"type":"inline","content":"svg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}button[data-astro-cid-x3pjskd3]{display:flex;border:0;border-radius:999rem;padding:0;box-shadow:inset 0 0 0 1px #7611a6;cursor:pointer}.icon[data-astro-cid-x3pjskd3]{z-index:1;position:relative;display:flex;padding:.5rem;width:2rem;height:2rem;font-size:1rem;color:#7611a6}.icon[data-astro-cid-x3pjskd3].light:before{content:\"\";z-index:-1;position:absolute;inset:0;background-color:var(--accent-regular);border-radius:999rem}.theme-dark .icon[data-astro-cid-x3pjskd3].light:before{transform:translate(100%)}.theme-dark .icon[data-astro-cid-x3pjskd3].dark,html:not(.theme-dark) .icon[data-astro-cid-x3pjskd3].light,button[data-astro-cid-x3pjskd3][aria-pressed=false] .icon[data-astro-cid-x3pjskd3].light{color:var(--accent-text-over)}@media (prefers-reduced-motion: no-preference){.icon[data-astro-cid-x3pjskd3],.icon[data-astro-cid-x3pjskd3].light:before{transition:transform var(--theme-transition),color var(--theme-transition)}}@media (forced-colors: active){.icon[data-astro-cid-x3pjskd3].light:before{background-color:SelectedItem}}\n"}],"routeData":{"route":"/dashboard","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard.astro","pathname":"/dashboard","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.8bCdeQXG.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.WwpDJf4k.css"},{"type":"external","src":"/_astro/dashboard.jei2AKSR.css"},{"type":"external","src":"/_astro/dashboard.Bq2PGZ3Z.css"},{"type":"inline","content":"svg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}button[data-astro-cid-x3pjskd3]{display:flex;border:0;border-radius:999rem;padding:0;box-shadow:inset 0 0 0 1px #7611a6;cursor:pointer}.icon[data-astro-cid-x3pjskd3]{z-index:1;position:relative;display:flex;padding:.5rem;width:2rem;height:2rem;font-size:1rem;color:#7611a6}.icon[data-astro-cid-x3pjskd3].light:before{content:\"\";z-index:-1;position:absolute;inset:0;background-color:var(--accent-regular);border-radius:999rem}.theme-dark .icon[data-astro-cid-x3pjskd3].light:before{transform:translate(100%)}.theme-dark .icon[data-astro-cid-x3pjskd3].dark,html:not(.theme-dark) .icon[data-astro-cid-x3pjskd3].light,button[data-astro-cid-x3pjskd3][aria-pressed=false] .icon[data-astro-cid-x3pjskd3].light{color:var(--accent-text-over)}@media (prefers-reduced-motion: no-preference){.icon[data-astro-cid-x3pjskd3],.icon[data-astro-cid-x3pjskd3].light:before{transition:transform var(--theme-transition),color var(--theme-transition)}}@media (forced-colors: active){.icon[data-astro-cid-x3pjskd3].light:before{background-color:SelectedItem}}\n"}],"routeData":{"route":"/pizarra","isIndex":false,"type":"page","pattern":"^\\/pizarra\\/?$","segments":[[{"content":"pizarra","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pizarra.astro","pathname":"/pizarra","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.8bCdeQXG.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.WwpDJf4k.css"},{"type":"external","src":"/_astro/dashboard.jei2AKSR.css"},{"type":"external","src":"/_astro/dashboard.Bq2PGZ3Z.css"},{"type":"inline","content":"svg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}button[data-astro-cid-x3pjskd3]{display:flex;border:0;border-radius:999rem;padding:0;box-shadow:inset 0 0 0 1px #7611a6;cursor:pointer}.icon[data-astro-cid-x3pjskd3]{z-index:1;position:relative;display:flex;padding:.5rem;width:2rem;height:2rem;font-size:1rem;color:#7611a6}.icon[data-astro-cid-x3pjskd3].light:before{content:\"\";z-index:-1;position:absolute;inset:0;background-color:var(--accent-regular);border-radius:999rem}.theme-dark .icon[data-astro-cid-x3pjskd3].light:before{transform:translate(100%)}.theme-dark .icon[data-astro-cid-x3pjskd3].dark,html:not(.theme-dark) .icon[data-astro-cid-x3pjskd3].light,button[data-astro-cid-x3pjskd3][aria-pressed=false] .icon[data-astro-cid-x3pjskd3].light{color:var(--accent-text-over)}@media (prefers-reduced-motion: no-preference){.icon[data-astro-cid-x3pjskd3],.icon[data-astro-cid-x3pjskd3].light:before{transition:transform var(--theme-transition),color var(--theme-transition)}}@media (forced-colors: active){.icon[data-astro-cid-x3pjskd3].light:before{background-color:SelectedItem}}\n"}],"routeData":{"route":"/refugio","isIndex":false,"type":"page","pattern":"^\\/refugio\\/?$","segments":[[{"content":"refugio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/refugio.astro","pathname":"/refugio","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CWIFjJbo.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.WwpDJf4k.css"},{"type":"external","src":"/_astro/dashboard.jei2AKSR.css"},{"type":"inline","content":"nav[data-astro-cid-7gjmswse]{z-index:9999;position:relative;font-family:var(--font-brand);font-weight:500;margin-bottom:3.5rem}.menu-header[data-astro-cid-7gjmswse]{display:flex;justify-content:space-between;gap:.5rem;padding:1.5rem}.site-title[data-astro-cid-7gjmswse]{display:flex;gap:.5rem;align-items:center;line-height:1.1;color:var(--gray-0);text-decoration:none}.menu-button[data-astro-cid-7gjmswse]{position:relative;display:flex;border:0;border-radius:999rem;padding:.5rem;font-size:1.5rem;color:var(--gray-300);background:radial-gradient(var(--gray-900),var(--gray-800) 150%);box-shadow:var(--shadow-md)}.menu-button[data-astro-cid-7gjmswse][aria-expanded=true]{color:var(--gray-0);background:linear-gradient(180deg,var(--gray-600),transparent),radial-gradient(var(--gray-900),var(--gray-800) 150%)}.menu-button[data-astro-cid-7gjmswse][hidden]{display:none}.menu-button[data-astro-cid-7gjmswse]:before{position:absolute;inset:-1px;content:\"\";background:var(--gradient-stroke);border-radius:999rem;z-index:-1}.menu-content[data-astro-cid-7gjmswse]{position:absolute;left:0;right:0}.nav-items[data-astro-cid-7gjmswse]{margin:0;display:flex;flex-direction:column;gap:1rem;font-size:var(--text-md);line-height:1.2;list-style:none;padding:2rem;background-color:var(--gray-999);border-bottom:1px solid var(--gray-800)}.link[data-astro-cid-7gjmswse]{display:inline-block;color:var(--gray-300);text-decoration:none}.link[data-astro-cid-7gjmswse].active{color:var(--gray-0)}.menu-footer[data-astro-cid-7gjmswse]{--icon-size: var(--text-xl);--icon-padding: .5rem;display:flex;justify-content:space-between;gap:.75rem;padding:1.5rem 2rem 1.5rem 1.5rem;background-color:var(--gray-999);border-radius:0 0 .75rem .75rem;box-shadow:var(--shadow-lg)}.socials[data-astro-cid-7gjmswse]{display:flex;flex-wrap:wrap;gap:.625rem;font-size:var(--icon-size)}.social[data-astro-cid-7gjmswse]{display:flex;padding:var(--icon-padding);text-decoration:none;color:var(--accent-dark);transition:color var(--theme-transition)}.social[data-astro-cid-7gjmswse]:hover,.social[data-astro-cid-7gjmswse]:focus{color:var(--accent-text-over)}.theme-toggle[data-astro-cid-7gjmswse]{display:100%;align-items:center;height:calc(var(--icon-size) + 2 * var(--icon-padding))}@media (min-width: 50em){nav[data-astro-cid-7gjmswse]{display:flex;grid-template-columns:1fr auto 1fr;align-items:center;padding:2.5rem 5rem;gap:1rem}.menu-header[data-astro-cid-7gjmswse]{padding:0;flex:1}.site-title[data-astro-cid-7gjmswse]{font-size:var(--text-lg)}.menu-content[data-astro-cid-7gjmswse]{display:contents}.nav-items[data-astro-cid-7gjmswse]{position:relative;flex-direction:row;font-size:var(--text-sm);border-radius:999rem;border:0;padding:.5rem .5625rem;background:radial-gradient(var(--gray-900),var(--gray-800) 150%);box-shadow:var(--shadow-md)}.nav-items[data-astro-cid-7gjmswse]:before{position:absolute;inset:-1px;content:\"\";background:var(--gradient-stroke);border-radius:999rem;z-index:-1}.link[data-astro-cid-7gjmswse]{padding:.5rem 1rem;border-radius:999rem;transition:color var(--theme-transition),background-color var(--theme-transition)}.link[data-astro-cid-7gjmswse]:hover,.link[data-astro-cid-7gjmswse]:focus{color:var(--gray-100);background-color:var(--accent-subtle-overlay)}.link[data-astro-cid-7gjmswse].active{color:var(--accent-text-over);background-color:var(--accent-regular)}.menu-footer[data-astro-cid-7gjmswse]{--icon-padding: .375rem;justify-self:flex-end;align-items:center;padding:0;background-color:transparent;box-shadow:none}.socials[data-astro-cid-7gjmswse]{display:none}}@media (min-width: 60em){.socials[data-astro-cid-7gjmswse]{display:flex;justify-content:flex-end;gap:0}}@media (forced-colors: active){.link[data-astro-cid-7gjmswse].active{color:SelectedItem}}:root{.backgrounds{background:linear-gradient(90deg,#efc3e6,#dee2ff,#feeafa)}}:root.theme-dark{.backgrounds{background:linear-gradient(90deg,#090f30,#000,#190631)}}.backgrounds[data-astro-cid-35n6arrm]{min-height:100%;isolation:isolate}\nsvg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}button[data-astro-cid-x3pjskd3]{display:flex;border:0;border-radius:999rem;padding:0;box-shadow:inset 0 0 0 1px #7611a6;cursor:pointer}.icon[data-astro-cid-x3pjskd3]{z-index:1;position:relative;display:flex;padding:.5rem;width:2rem;height:2rem;font-size:1rem;color:#7611a6}.icon[data-astro-cid-x3pjskd3].light:before{content:\"\";z-index:-1;position:absolute;inset:0;background-color:var(--accent-regular);border-radius:999rem}.theme-dark .icon[data-astro-cid-x3pjskd3].light:before{transform:translate(100%)}.theme-dark .icon[data-astro-cid-x3pjskd3].dark,html:not(.theme-dark) .icon[data-astro-cid-x3pjskd3].light,button[data-astro-cid-x3pjskd3][aria-pressed=false] .icon[data-astro-cid-x3pjskd3].light{color:var(--accent-text-over)}@media (prefers-reduced-motion: no-preference){.icon[data-astro-cid-x3pjskd3],.icon[data-astro-cid-x3pjskd3].light:before{transition:transform var(--theme-transition),color var(--theme-transition)}}@media (forced-colors: active){.icon[data-astro-cid-x3pjskd3].light:before{background-color:SelectedItem}}\n"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.8bCdeQXG.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.WwpDJf4k.css"},{"type":"external","src":"/_astro/dashboard.jei2AKSR.css"},{"type":"external","src":"/_astro/dashboard.Bq2PGZ3Z.css"},{"type":"inline","content":".pill[data-astro-cid-2qeywk4b]{display:flex;padding:.5rem 1rem;gap:.5rem;color:var(--accent-text-over);border:1px solid var(--accent-regular);background-color:var(--accent-regular);border-radius:999rem;font-size:var(--text-md);line-height:1.35;white-space:nowrap}header[data-astro-cid-qwekciqp]{padding-bottom:2.5rem;border-bottom:1px solid var(--gray-800)}.back-link[data-astro-cid-qwekciqp]{display:none}.details[data-astro-cid-qwekciqp]{display:flex;flex-direction:column;padding:.5rem;gap:1.5rem;justify-content:space-between;align-items:center}.tags[data-astro-cid-qwekciqp]{display:flex;gap:.5rem}.description[data-astro-cid-qwekciqp]{font-size:var(--text-lg);max-width:54ch}.content[data-astro-cid-qwekciqp]{max-width:65ch;margin-inline:auto}.content[data-astro-cid-qwekciqp]>*+*{margin-top:1rem}.content[data-astro-cid-qwekciqp] h1,.content[data-astro-cid-qwekciqp] h2,.content[data-astro-cid-qwekciqp] h3,.content[data-astro-cid-qwekciqp] h4,.content[data-astro-cid-qwekciqp] h5{margin:1.5rem 0}.content[data-astro-cid-qwekciqp] img{border-radius:1.5rem;box-shadow:var(--shadow-sm);background:var(--gradient-subtle);border:1px solid var(--gray-800)}.content[data-astro-cid-qwekciqp] blockquote{font-size:var(--text-lg);font-family:var(--font-brand);font-weight:600;line-height:1.1;padding-inline-start:1.5rem;border-inline-start:.25rem solid var(--accent-dark);color:var(--gray-0)}.back-link[data-astro-cid-qwekciqp],.content[data-astro-cid-qwekciqp] a{-webkit-text-decoration:1px solid underline transparent;text-decoration:1px solid underline transparent;text-underline-offset:.25em;transition:text-decoration-color var(--theme-transition)}.back-link[data-astro-cid-qwekciqp]:hover,.back-link[data-astro-cid-qwekciqp]:focus,.content[data-astro-cid-qwekciqp] a:hover,.content[data-astro-cid-qwekciqp] a:focus{text-decoration-color:currentColor}@media (min-width: 50em){.back-link[data-astro-cid-qwekciqp]{display:block;align-self:flex-start}.details[data-astro-cid-qwekciqp]{flex-direction:row;gap:2.5rem}.content[data-astro-cid-qwekciqp] blockquote{font-size:var(--text-2xl)}}\nsvg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}button[data-astro-cid-x3pjskd3]{display:flex;border:0;border-radius:999rem;padding:0;box-shadow:inset 0 0 0 1px #7611a6;cursor:pointer}.icon[data-astro-cid-x3pjskd3]{z-index:1;position:relative;display:flex;padding:.5rem;width:2rem;height:2rem;font-size:1rem;color:#7611a6}.icon[data-astro-cid-x3pjskd3].light:before{content:\"\";z-index:-1;position:absolute;inset:0;background-color:var(--accent-regular);border-radius:999rem}.theme-dark .icon[data-astro-cid-x3pjskd3].light:before{transform:translate(100%)}.theme-dark .icon[data-astro-cid-x3pjskd3].dark,html:not(.theme-dark) .icon[data-astro-cid-x3pjskd3].light,button[data-astro-cid-x3pjskd3][aria-pressed=false] .icon[data-astro-cid-x3pjskd3].light{color:var(--accent-text-over)}@media (prefers-reduced-motion: no-preference){.icon[data-astro-cid-x3pjskd3],.icon[data-astro-cid-x3pjskd3].light:before{transition:transform var(--theme-transition),color var(--theme-transition)}}@media (forced-colors: active){.icon[data-astro-cid-x3pjskd3].light:before{background-color:SelectedItem}}\n"}],"routeData":{"route":"/work/[...slug]","isIndex":false,"type":"page","pattern":"^\\/work(?:\\/(.*?))?\\/?$","segments":[[{"content":"work","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/work/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BViovLwN.js"}],"styles":[{"type":"external","src":"/_astro/dashboard.WwpDJf4k.css"},{"type":"external","src":"/_astro/dashboard.jei2AKSR.css"},{"type":"inline","content":"nav[data-astro-cid-7gjmswse]{z-index:9999;position:relative;font-family:var(--font-brand);font-weight:500;margin-bottom:3.5rem}.menu-header[data-astro-cid-7gjmswse]{display:flex;justify-content:space-between;gap:.5rem;padding:1.5rem}.site-title[data-astro-cid-7gjmswse]{display:flex;gap:.5rem;align-items:center;line-height:1.1;color:var(--gray-0);text-decoration:none}.menu-button[data-astro-cid-7gjmswse]{position:relative;display:flex;border:0;border-radius:999rem;padding:.5rem;font-size:1.5rem;color:var(--gray-300);background:radial-gradient(var(--gray-900),var(--gray-800) 150%);box-shadow:var(--shadow-md)}.menu-button[data-astro-cid-7gjmswse][aria-expanded=true]{color:var(--gray-0);background:linear-gradient(180deg,var(--gray-600),transparent),radial-gradient(var(--gray-900),var(--gray-800) 150%)}.menu-button[data-astro-cid-7gjmswse][hidden]{display:none}.menu-button[data-astro-cid-7gjmswse]:before{position:absolute;inset:-1px;content:\"\";background:var(--gradient-stroke);border-radius:999rem;z-index:-1}.menu-content[data-astro-cid-7gjmswse]{position:absolute;left:0;right:0}.nav-items[data-astro-cid-7gjmswse]{margin:0;display:flex;flex-direction:column;gap:1rem;font-size:var(--text-md);line-height:1.2;list-style:none;padding:2rem;background-color:var(--gray-999);border-bottom:1px solid var(--gray-800)}.link[data-astro-cid-7gjmswse]{display:inline-block;color:var(--gray-300);text-decoration:none}.link[data-astro-cid-7gjmswse].active{color:var(--gray-0)}.menu-footer[data-astro-cid-7gjmswse]{--icon-size: var(--text-xl);--icon-padding: .5rem;display:flex;justify-content:space-between;gap:.75rem;padding:1.5rem 2rem 1.5rem 1.5rem;background-color:var(--gray-999);border-radius:0 0 .75rem .75rem;box-shadow:var(--shadow-lg)}.socials[data-astro-cid-7gjmswse]{display:flex;flex-wrap:wrap;gap:.625rem;font-size:var(--icon-size)}.social[data-astro-cid-7gjmswse]{display:flex;padding:var(--icon-padding);text-decoration:none;color:var(--accent-dark);transition:color var(--theme-transition)}.social[data-astro-cid-7gjmswse]:hover,.social[data-astro-cid-7gjmswse]:focus{color:var(--accent-text-over)}.theme-toggle[data-astro-cid-7gjmswse]{display:100%;align-items:center;height:calc(var(--icon-size) + 2 * var(--icon-padding))}@media (min-width: 50em){nav[data-astro-cid-7gjmswse]{display:flex;grid-template-columns:1fr auto 1fr;align-items:center;padding:2.5rem 5rem;gap:1rem}.menu-header[data-astro-cid-7gjmswse]{padding:0;flex:1}.site-title[data-astro-cid-7gjmswse]{font-size:var(--text-lg)}.menu-content[data-astro-cid-7gjmswse]{display:contents}.nav-items[data-astro-cid-7gjmswse]{position:relative;flex-direction:row;font-size:var(--text-sm);border-radius:999rem;border:0;padding:.5rem .5625rem;background:radial-gradient(var(--gray-900),var(--gray-800) 150%);box-shadow:var(--shadow-md)}.nav-items[data-astro-cid-7gjmswse]:before{position:absolute;inset:-1px;content:\"\";background:var(--gradient-stroke);border-radius:999rem;z-index:-1}.link[data-astro-cid-7gjmswse]{padding:.5rem 1rem;border-radius:999rem;transition:color var(--theme-transition),background-color var(--theme-transition)}.link[data-astro-cid-7gjmswse]:hover,.link[data-astro-cid-7gjmswse]:focus{color:var(--gray-100);background-color:var(--accent-subtle-overlay)}.link[data-astro-cid-7gjmswse].active{color:var(--accent-text-over);background-color:var(--accent-regular)}.menu-footer[data-astro-cid-7gjmswse]{--icon-padding: .375rem;justify-self:flex-end;align-items:center;padding:0;background-color:transparent;box-shadow:none}.socials[data-astro-cid-7gjmswse]{display:none}}@media (min-width: 60em){.socials[data-astro-cid-7gjmswse]{display:flex;justify-content:flex-end;gap:0}}@media (forced-colors: active){.link[data-astro-cid-7gjmswse].active{color:SelectedItem}}:root{.backgrounds{background:linear-gradient(90deg,#efc3e6,#dee2ff,#feeafa)}}:root.theme-dark{.backgrounds{background:linear-gradient(90deg,#090f30,#000,#190631)}}.backgrounds[data-astro-cid-35n6arrm]{min-height:100%;isolation:isolate}\nsvg[data-astro-cid-patnjmll]{vertical-align:middle;width:var(--size, 1em);height:var(--size, 1em)}button[data-astro-cid-x3pjskd3]{display:flex;border:0;border-radius:999rem;padding:0;box-shadow:inset 0 0 0 1px #7611a6;cursor:pointer}.icon[data-astro-cid-x3pjskd3]{z-index:1;position:relative;display:flex;padding:.5rem;width:2rem;height:2rem;font-size:1rem;color:#7611a6}.icon[data-astro-cid-x3pjskd3].light:before{content:\"\";z-index:-1;position:absolute;inset:0;background-color:var(--accent-regular);border-radius:999rem}.theme-dark .icon[data-astro-cid-x3pjskd3].light:before{transform:translate(100%)}.theme-dark .icon[data-astro-cid-x3pjskd3].dark,html:not(.theme-dark) .icon[data-astro-cid-x3pjskd3].light,button[data-astro-cid-x3pjskd3][aria-pressed=false] .icon[data-astro-cid-x3pjskd3].light{color:var(--accent-text-over)}@media (prefers-reduced-motion: no-preference){.icon[data-astro-cid-x3pjskd3],.icon[data-astro-cid-x3pjskd3].light:before{transition:transform var(--theme-transition),color var(--theme-transition)}}@media (forced-colors: active){.icon[data-astro-cid-x3pjskd3].light:before{background-color:SelectedItem}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/alvar/front-luna/src/pages/work/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/work/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/alvar/front-luna/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/alvar/front-luna/src/pages/dashboard.astro",{"propagation":"none","containsHead":true}],["C:/Users/alvar/front-luna/src/pages/pizarra.astro",{"propagation":"none","containsHead":true}],["C:/Users/alvar/front-luna/src/pages/refugio.astro",{"propagation":"none","containsHead":true}],["C:/Users/alvar/front-luna/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/alvar/front-luna/src/pages/register.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/auth/register@_@ts":"pages/api/auth/register.astro.mjs","\u0000@astro-page:src/pages/api/auth/signin@_@ts":"pages/api/auth/signin.astro.mjs","\u0000@astro-page:src/pages/api/auth/signout@_@ts":"pages/api/auth/signout.astro.mjs","\u0000@astro-page:src/pages/dashboard@_@astro":"pages/dashboard.astro.mjs","\u0000@astro-page:src/pages/pizarra@_@astro":"pages/pizarra.astro.mjs","\u0000@astro-page:src/pages/refugio@_@astro":"pages/refugio.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/work/[...slug]@_@astro":"pages/work/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_BhMpjpmn.mjs","C:/Users/alvar/front-luna/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_Cn_39gLq.mjs","/astro/hoisted.js?q=2":"_astro/hoisted.8bCdeQXG.js","/astro/hoisted.js?q=1":"_astro/hoisted.CWIFjJbo.js","/astro/hoisted.js?q=0":"_astro/hoisted.BViovLwN.js","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/dashboard.WwpDJf4k.css","/_astro/dashboard.Bq2PGZ3Z.css","/_astro/dashboard.jei2AKSR.css","/_astro/client.5I5BMcNS.js","/_astro/hoisted.8bCdeQXG.js","/_astro/hoisted.BViovLwN.js","/_astro/hoisted.CWIFjJbo.js","/_astro/ThemeToggle.astro_astro_type_script_index_0_lang.uzd8m1xC.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
