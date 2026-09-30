import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    const validPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (password === validPassword) {
      return NextResponse.json({
        success: true,
        token: "admin_authenticated_session_mg_2026",
        message: "Autenticación exitosa",
      });
    }

    return NextResponse.json(
      { success: false, message: "Contraseña incorrecta" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Error procesando la solicitud" },
      { status: 500 }
    );
  }
}
