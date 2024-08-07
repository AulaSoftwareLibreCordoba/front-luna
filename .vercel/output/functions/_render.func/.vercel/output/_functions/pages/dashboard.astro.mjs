/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BZCkA_Su.mjs';
import 'kleur/colors';
import { a as app } from '../chunks/server_1hFA-0b5.mjs';
import { getAuth } from 'firebase-admin/auth';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CmOZTSLB.mjs';
import { $ as $$Hero } from '../chunks/Footer_DEfN_QFa.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const auth = getAuth(app);
  const sessionCookie = Astro2.cookies.get("__session");
  if (!sessionCookie) {
    return Astro2.redirect("/signin");
  }
  const decodedCookie = await auth.verifySessionCookie(sessionCookie.value);
  let user;
  if (decodedCookie) {
    user = await auth.getUser(decodedCookie.uid);
  }
  if (!user) {
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Luna - Inicio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Bienvenido," }, { "default": ($$result3) => renderTemplate`<h1 class="text-3xl">${user?.displayName || "Usuario"}</h1>` })} <br> <hr class="w-[70%] mx-auto"> <br> <p class="text-center">Nos alegra verte aquí</p> </div> ` })}`;
}, "C:/Users/alvar/front-luna/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/alvar/front-luna/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
