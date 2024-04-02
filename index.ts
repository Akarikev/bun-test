console.log("Elorm is cool!");

//creating a server in bun
const server = Bun.serve({
  port: Bun.env.PORT || 8000,
  fetch(req) {
    return new Response("elorm.tsx! is awesome!");
  },
});

console.log(`Listening on port ${server.port}`);

//creating server routes
const server2 = Bun.serve({
  port: Bun.env.PORT2!,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Homepage");
    if (url.pathname === "/blog") return new Response("blog");

    return new Response("Returned a 404 Response");
  },
});

console.log(`Listening on PORT : ${server2.port}`);
