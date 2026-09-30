import { NextResponse } from "next/server";
import { initialProjects } from "@/lib/initialData";

export async function GET() {
  return NextResponse.json({ success: true, data: initialProjects });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({ success: true, data: body });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }
}
