import jwt from "jsonwebtoken";

// OBTENIDA DE LA API PUBLICA
const SECRET_KEY = "clave_secreta";

// Generar el token
const payload = {
  username: "nombre_usuario",
  role: "admin",
  exp: Math.floor(Date.now() / 1000) + 60 * 60, // Expira en 1 hora
};

const token = jwt.sign(payload, SECRET_KEY);

export function getToken() {
  return token;
}

// Verificar el token
export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (error) {
    console.error("Token inválido:", error);
    return null;
  }
}
