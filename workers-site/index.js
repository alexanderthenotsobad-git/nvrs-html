addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    // Your request handling logic goes here
    return new Response('Hello, World!', { status: 200 });
  }
  