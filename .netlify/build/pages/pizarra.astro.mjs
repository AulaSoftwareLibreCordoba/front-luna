/* empty css                                     */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, b as createAstro } from '../chunks/astro/server_CPYYwRLo.mjs';
import 'kleur/colors';
import { a as app } from '../chunks/server_1hFA-0b5.mjs';
import { getAuth } from 'firebase-admin/auth';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_zJu30Dj-.mjs';
import { $ as $$Hero } from '../chunks/Footer_wwukW7eV.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
export { renderers } from '../renderers.mjs';

const Cards = ({ id, text }) => {
  return /* @__PURE__ */ jsxs("div", { className: "w-48 h-48 relative p-2 m-5 flex justify-center items-center text-white text-base shadow-2xl rotate-6", children: [
    /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-white absolute rounded-md translate-x-[-50%] top-[-7px] left-[50%] shadow-lg" }),
    /* @__PURE__ */ jsx("div", { className: "w-full h-full text-base text-white overflow-hidden flex justify-center items-center text-center", children: text })
  ] });
};

const $$Pizarracomponent = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  const randomUser = data[0];
  return renderTemplate`${maybeRenderHead()}<div> <div class="xl:w-[60%] md:w-[90%] h-[50%] p-3 mx-auto border rounded-xl border-violet-900 mt-14"> <div class=" p-3 pizarra justify-center overflow-hidden overflow-y-scroll h-[34rem] grid border rounded-xl border-violet-950 bg-green-950"> <div class="md:flex justify-center"> ${renderComponent($$result, "Cards", Cards, { "id": randomUser.id, "text": randomUser.name })} ${renderComponent($$result, "Cards", Cards, { "id": 1, "text": "hola mundo" })} ${renderComponent($$result, "Cards", Cards, { "id": 1, "text": "hola mundo" })} </div> <div class="md:flex justify-center"> ${renderComponent($$result, "Cards", Cards, { "id": 1, "text": "hola mundo" })} ${renderComponent($$result, "Cards", Cards, { "id": 1, "text": "hola mundo" })} ${renderComponent($$result, "Cards", Cards, { "id": 1, "text": "hola mundo" })} </div> <div class="md:flex justify-center"> ${renderComponent($$result, "Cards", Cards, { "id": 1, "text": "hola mundo" })} ${renderComponent($$result, "Cards", Cards, { "id": 1, "text": "hola mundo" })} ${renderComponent($$result, "Cards", Cards, { "id": 1, "text": "hola mundo" })} </div> </div> </div> </div>`;
}, "C:/Users/alvar/front-luna/src/components/pizarracomponent.astro", void 0);

const $$Astro = createAstro();
const $$Pizarra = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pizarra;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Luna - Pizarra" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=""> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Pizarra" })} <hr class="w-[30%] mx-auto mt-3 border-violet-600"> ${renderComponent($$result2, "Pizarracomponent", $$Pizarracomponent, {})} </div> ` })}`;
}, "C:/Users/alvar/front-luna/src/pages/pizarra.astro", void 0);

const $$file = "C:/Users/alvar/front-luna/src/pages/pizarra.astro";
const $$url = "/pizarra";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pizarra,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
