/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BZCkA_Su.mjs';
import 'kleur/colors';
import { a as app } from '../chunks/server_1hFA-0b5.mjs';
import { getAuth } from 'firebase-admin/auth';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CmOZTSLB.mjs';
import { $ as $$Hero } from '../chunks/Footer_DEfN_QFa.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const Cards = ({ id, text }) => {
  return /* @__PURE__ */ jsxs("div", { className: "post-it bg-violet-950 text-white", children: [
    /* @__PURE__ */ jsx("div", { className: "pin" }),
    /* @__PURE__ */ jsx("div", { className: "post-it-text p-10", children: text })
  ] });
};

const Pizarracomponent = () => {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./info.json");
        if (!response.ok) {
          throw new Error("Error al cargar el archivo JSON: " + response.statusText);
        }
        const data = await response.json();
        console.log("Datos cargados:", data);
        setCardsData(data);
      } catch (error2) {
        console.error("Error al cargar el archivo JSON:", error2);
        setError(error2.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "xl:w-[60%] md:w-[90%] h-[50%] mx-auto border rounded-xl border-violet-900 mt-14", children: /* @__PURE__ */ jsxs("div", { className: " p-3 pizarra justify-center overflow-hidden overflow-y-scroll h-[34rem] grid border-[20px] rounded-xl border-violet-950 bg-transparent", children: [
    cardsData.map((card) => /* @__PURE__ */ jsx(Cards, { text: card.text }, card.id)),
    /* @__PURE__ */ jsxs("div", { className: "md:flex justify-center", children: [
      /* @__PURE__ */ jsx(Cards, { id: 1, text: "hola mundo" }),
      /* @__PURE__ */ jsx(Cards, { id: 1, text: "hola mundo" }),
      /* @__PURE__ */ jsx(Cards, { id: 1, text: "hola mundo" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:flex justify-center", children: [
      /* @__PURE__ */ jsx(Cards, { id: 1, text: "hola mundo" }),
      /* @__PURE__ */ jsx(Cards, { id: 1, text: "hola mundo" }),
      /* @__PURE__ */ jsx(Cards, { id: 1, text: "hola mundo" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:flex justify-center", children: [
      /* @__PURE__ */ jsx(Cards, { id: 1, text: "hola mundo" }),
      /* @__PURE__ */ jsx(Cards, { id: 1, text: "hola mundo" }),
      /* @__PURE__ */ jsx(Cards, { id: 1, text: "hola mundo" })
    ] })
  ] }) }) });
};

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
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Luna - Pizarra" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=""> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Pizarra" })} <hr class="w-[30%] mx-auto mt-3"> ${renderComponent($$result2, "Pizarracomponent", Pizarracomponent, {})} </div> ` })}`;
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
