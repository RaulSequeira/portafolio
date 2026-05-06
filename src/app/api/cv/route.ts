import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

const CV_FILENAME = "CV-Raul-Alejandro-Sequeira.pdf";

export async function GET() {
  const filePath = path.join(process.cwd(), "data", CV_FILENAME);

  try {
    const file = await fs.readFile(filePath);

    return new NextResponse(file, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${CV_FILENAME}"`,
        "Cache-Control": "public, max-age=3600"
      }
    });
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return NextResponse.json({ error: "CV no encontrado" }, { status: 404 });
    }
    throw error;
  }
}
