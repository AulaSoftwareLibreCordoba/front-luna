/* empty css                                     */
import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_CPYYwRLo.mjs';
import 'kleur/colors';
import { a as app } from '../chunks/server_1hFA-0b5.mjs';
import { getAuth } from 'firebase-admin/auth';
import { $ as $$LayoutIntro } from '../chunks/Layout-intro_D7ym68jZ.mjs';
import { $ as $$Hero } from '../chunks/Footer_wwukW7eV.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  getAuth(app);
  return renderTemplate`${renderComponent($$result, "Layout", $$LayoutIntro, { "title": "Luna - Inicia sesi\xF3n" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div style="text-align: center;"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Inicio de Sesi\xF3n" })} <hr class="w-1/3 mx-auto border-violet-600 pb-3"> <p>¿Eres nuevo aquí? <a class="hover:text-fuchsia-400 transition-all duration- hover:underline" href="/register">Crear una cuenta</a></p> <div style="margin:5%" class="md:m-20 "> <form class="grid w-[165px] mx-auto justify-center gap-3" action="/api/auth/signin" method="post"> <input type="email" name="email" id="email" class="input-form focus:border-violet-800" placeholder="Correo electrónico" autocomplete="off"> <input type="password" name="password" id="password" class="input-form" placeholder="Contraseña"> <div class="grid mx-auto w-[165px] gap-3 mt-5"> <button type="submit" class="text-white font-bold bg-violet-800 to-transparent p-2 rounded-lg hover:bg-violet-950 transition-colors duration-300 border-[1px] border-violet-900">Iniciar sesión</button> <button id="google" class="flex font-bold bg-violet-800  p-2 rounded-lg hover:bg-violet-950 text-white transition-colors duration-300 border-[1px] border-violet-900"> <svg class="size-6 flex my-auto mx-1 " height="262" viewBox="0 0 256 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>
Iniciar sesión con Google
</button> </div> </form> </div> </div> ` })} `;
}, "C:/Users/alvar/front-luna/src/pages/index.astro", void 0);

const $$file = "C:/Users/alvar/front-luna/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
