/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CPYYwRLo.mjs';
import 'kleur/colors';
import { $ as $$LayoutIntro } from '../chunks/Layout-intro_D7ym68jZ.mjs';
import { $ as $$Hero } from '../chunks/Footer_wwukW7eV.mjs';
export { renderers } from '../renderers.mjs';

const $$Register = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutIntro, { "title": "Registro" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Registro", "tagline": " " })} <div style="text-align: center;"> <p>¿Ya tienes una cuenta? <a class="hover:text-fuchsia-300 hover:underline" href="/">Iniciar sesión</a></p> <form action="/api/auth/register" method="post"> <p> <input type="text" name="name" id="name" class="input-form" placeholder="Nombre"> </p> <p> <input type="email" name="email" id="email" class="input-form" placeholder="Correo Electrónico"> </p> <p> <input type="password" name="password" id="password" class="input-form" placeholder="Contraseña"> </p> <button type="submit" class="ext-white font-bold bg-gradient-to-b from-violet-950 to-transparent p-2 rounded-lg
        hover:bg-purple-900 transition-colors duration-300 border-[1px] border-violet-900">Registrarse</button> </form> </div> </div> ` })}`;
}, "C:/Users/alvar/front-luna/src/pages/register.astro", void 0);

const $$file = "C:/Users/alvar/front-luna/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
