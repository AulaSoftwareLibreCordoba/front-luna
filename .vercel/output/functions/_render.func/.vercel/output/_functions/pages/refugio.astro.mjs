/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro } from '../chunks/astro/server_BZCkA_Su.mjs';
import 'kleur/colors';
import { a as app } from '../chunks/server_1hFA-0b5.mjs';
import { getAuth } from 'firebase-admin/auth';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CmOZTSLB.mjs';
import { $ as $$Hero } from '../chunks/Footer_DEfN_QFa.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

const FormComponent = () => {
  const [name, setName] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [reason, setReason] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const handleReasonChange = (e) => {
    const text = e.target.value;
    const words = text.split(/\s+/);
    const wordCount2 = words.length;
    if (wordCount2 <= 300) {
      setReason(text);
      setWordCount(wordCount2);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      selectedClass,
      reason
    });
    window.location.assign("/pizarra");
  };
  return /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "mt-4 w-auto md:w-[50%] max-w-screen-lg mx-auto p-6 bg-white bg-opacity-5 border-2 border-violet-500 shadow-md rounded-lg backdrop-blur-md",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "name",
              className: "block text-gray-500 font-bold text-xl mb-2",
              children: "Denunciantes"
            }
          ),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "name",
              value: name,
              onChange: (e) => setName(e.target.value),
              className: "w-full p-3 bg-transparent border-2 border-violet-500 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-violet-500 text-lg placeholder-gray-400",
              rows: "2",
              placeholder: "Escribe tu nombre aquí"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "class",
              className: "block text-gray-500 font-bold text-xl mb-2",
              children: "Clase"
            }
          ),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "class",
              value: selectedClass,
              onChange: (e) => setSelectedClass(e.target.value),
              className: "w-full p-3 bg-transparent border-2 border-violet-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 text-lg",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Selecciona una clase" }),
                /* @__PURE__ */ jsx("option", { value: "clase1", children: "Clase 1" }),
                /* @__PURE__ */ jsx("option", { value: "clase2", children: "Clase 2" }),
                /* @__PURE__ */ jsx("option", { value: "clase3", children: "Clase 3" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { for: "birthdate", className: "block text-gray-500 font-bold text-xl mb-2", children: "Fecha de los hechos" }),
          /* @__PURE__ */ jsx("input", { id: "birthdate", type: "date", min: "1900-01-01", max: "2100-01-01", class: "datepicker rounded-md w-full p-3 bg-transparent border-2 mb-3 border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500 text-lg ", name: "fecha_nacimiento", required: true })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "class", className: "block text-gray-500 font-bold text-xl mb-2", children: " Letra " }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "letra",
              value: selectedClass,
              onChange: (e) => setSelectedClass(e.target.value),
              className: "w-full p-3 bg-transparent border-2 border-violet-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 text-lg",
              children: [
                /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Selecciona la letra de la clase" }),
                /* @__PURE__ */ jsx("option", { value: "A", children: "A" }),
                /* @__PURE__ */ jsx("option", { value: "B", children: "B" }),
                /* @__PURE__ */ jsx("option", { value: "C", children: "C" }),
                /* @__PURE__ */ jsx("option", { value: "D", children: "D" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              htmlFor: "reason",
              className: "block text-gray-500 font-bold text-xl mb-2",
              children: "Motivo"
            }
          ),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "reason",
              value: reason,
              onChange: handleReasonChange,
              className: "w-full p-3 bg-transparent border-2 border-violet-500 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-violet-500 text-lg placeholder-gray-400",
              rows: "5",
              placeholder: "Escribe tu motivo aquí"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "text-right text-gray-500 text-lg", children: [
            wordCount,
            "/300 palabras"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "flex font-bold bg-gradient-to-b from-violet-950 to-transparent p-4 rounded-lg hover:bg-purple-900 text-white transition-colors duration-300 border-[1px] border-violet-900",
            children: "Enviar"
          }
        ) })
      ]
    }
  );
};

const $$Astro = createAstro();
const $$Refugio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Refugio;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "title": "Luna - Mi refugio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "\xBFQuiere realizar una denuncia?", "tagline": "Responda el formulario y nuestro equipo se pondra en contacto contigo." })} ${renderComponent($$result2, "Denuncias", FormComponent, {})} ` })}`;
}, "C:/Users/alvar/front-luna/src/pages/refugio.astro", void 0);

const $$file = "C:/Users/alvar/front-luna/src/pages/refugio.astro";
const $$url = "/refugio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Refugio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };