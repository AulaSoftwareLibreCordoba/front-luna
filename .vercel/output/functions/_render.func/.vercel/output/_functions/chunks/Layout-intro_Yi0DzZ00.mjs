import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as addAttribute, b as createAstro, i as renderHead, h as renderSlot } from './astro/server_BZCkA_Su.mjs';
import 'kleur/colors';
import { a as $$Icon, b as $$ThemeToggle, c as $$MainHead, d as $$Footer } from './Footer_DEfN_QFa.mjs';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$NavInicio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavInicio;
  const textLinks = [
    { label: "Inicio", href: "/" },
    { label: "Mi Refugio", href: "/work/" },
    { label: "Pizarra", href: "/about/" }
  ];
  const iconLinks = [
    /*{ label: 'GitHub', href: 'https://github.com/AulaSoftwareLibreCordoba/', icon: 'github-logo' },
    { label: 'YouTube', href: 'https://www.youtube.com/AulaSoftwareLibreCordoba/', icon: 'youtube-logo' },*/
  ];
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-7gjmswse> <div class="menu-header" data-astro-cid-7gjmswse> <a href="/" class="site-title" data-astro-cid-7gjmswse> ${renderComponent($$result, "Icon", $$Icon, { "icon": "moon-stars", "color": "var(--accent-regular)", "size": "1.6em", "gradient": true, "data-astro-cid-7gjmswse": true })}
LUNA
</a> ${renderComponent($$result, "menu-button", "menu-button", { "data-astro-cid-7gjmswse": true }, { "default": () => renderTemplate` <div data-astro-cid-7gjmswse></div> <div class="theme-toggle" data-astro-cid-7gjmswse> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-7gjmswse": true })} </div> ` })} </div> <noscript> <ul class="nav-items" data-astro-cid-7gjmswse> ${textLinks.map(({ label, href }) => renderTemplate`<li data-astro-cid-7gjmswse> <a${addAttribute(Astro2.url.pathname === href, "aria-current")}${addAttribute([
    "link",
    {
      active: Astro2.url.pathname === href || href !== "/" && Astro2.url.pathname.startsWith(href)
    }
  ], "class:list")}${addAttribute(href, "href")} data-astro-cid-7gjmswse> ${label} </a> </li>`)} </ul> </noscript> <noscript> <div class="menu-footer" data-astro-cid-7gjmswse> <div class="socials" data-astro-cid-7gjmswse> ${iconLinks.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")} class="social" data-astro-cid-7gjmswse> <span class="sr-only" data-astro-cid-7gjmswse>${label}</span> ${renderComponent($$result, "Icon", $$Icon, { "icon": icon, "data-astro-cid-7gjmswse": true })} </a>`)} </div> </div> </noscript> <div id="menu-content" hidden data-astro-cid-7gjmswse> <div data-astro-cid-7gjmswse></div> <div class="menu-footer" data-astro-cid-7gjmswse> <div class="socials" data-astro-cid-7gjmswse> ${iconLinks.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")} class="social" data-astro-cid-7gjmswse> <span class="sr-only" data-astro-cid-7gjmswse>${label}</span> ${renderComponent($$result, "Icon", $$Icon, { "icon": icon, "data-astro-cid-7gjmswse": true })} </a>`)} </div> </div> </div> </nav>  `;
}, "C:/Users/alvar/front-luna/src/components/Nav-inicio.astro", void 0);

const $$Astro = createAstro();
const $$LayoutIntro = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutIntro;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-35n6arrm> <head>${renderComponent($$result, "MainHead", $$MainHead, { "title": title, "description": description, "data-astro-cid-35n6arrm": true })}${renderHead()}</head> <body data-astro-cid-35n6arrm> <div class="stack backgrounds" data-astro-cid-35n6arrm> ${renderComponent($$result, "Nav", $$NavInicio, { "data-astro-cid-35n6arrm": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-35n6arrm": true })} </div>   </body> </html>`;
}, "C:/Users/alvar/front-luna/src/layouts/Layout-intro.astro", void 0);

export { $$LayoutIntro as $ };
