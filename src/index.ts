addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  return new Response('Hello, World!', {
    headers: { 'content-type': 'text/plain' },
  });
}
