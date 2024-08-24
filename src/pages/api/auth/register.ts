import type { APIRoute } from "astro";
import { getAuth } from "firebase-admin/auth";
import { app } from "../../../firebase/server";
import { auth } from "../../../firebase/client"; // Importa 'auth' desde 'client.ts'
import { signInWithEmailAndPassword } from "firebase/auth"; // Para iniciar sesión en el cliente

export const POST: APIRoute = async ({ request, redirect, cookies }) => {
  const authAdmin = getAuth(app);

  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const name = formData.get("name")?.toString();

  if (!email || !password || !name) {
    return new Response("Faltan datos del formulario", { status: 400 });
  }

  try {
    // Crear el usuario en Firebase Auth (administrador)
    await authAdmin.createUser({
      email,
      password,
      displayName: name,
    });
    console.log("Usuario creado con éxito:", email);

    // Iniciar sesión en el cliente (para generar el ID token)
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Obtener el ID token y crear una cookie de sesión
    const idToken = await user.getIdToken();
    const sessionCookie = await authAdmin.createSessionCookie(idToken, { expiresIn: 60 * 60 * 24 * 5 * 1000 }); // Cookie válida por 5 días

    // Establecer la cookie de sesión en la respuesta
    cookies.set("__session", sessionCookie, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 5 * 1000,
      path: "/",
    });

  } catch (error: any) {
    console.error("Error al crear usuario o iniciar sesión:", error);
    return new Response("Algo salió mal", { status: 400 });
  }

  return redirect("/dashboard");
};