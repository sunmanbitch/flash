export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/flash') {
      // TODO: Add your custom /api/* logic here.
      return new Response('Not found flash', { status: 404 });
    }
    // Otherwise, serve the static assets.
    // Without this, the Worker will error and no assets will be served.
    return new Response('Not found', { status: 404 });
  },
}