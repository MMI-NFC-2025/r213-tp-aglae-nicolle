import * as backend from "../../backend.mjs";

export async function GET({ searchParams }) {
    const surface = searchParams.get("surface") || 80;
    const offres = await backend.bySurface(surface);
    return new Response(JSON.stringify(offres), {
        headers: { "Content-Type": "application/json" },
    });
}
