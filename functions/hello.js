export async function onRequest(context) {
  return new Response("Hello from Cloudflare Pages Functions integrated with Vue!", {
    headers: { "Content-Type": "text/plain" }
  });
}
