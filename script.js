import { html } from "htm/preact";
import { createElement, render } from "preact";

// console log
console.log("Hello!");

// fetch
let resp = await fetch("https://no-cors.deno.dev/https://example.com");
let idx = await resp.text();
console.log(idx);

// top level await
console.log(new Date());
await new Promise((resolve) => setTimeout(resolve, 3000));
console.log(new Date());

// mutating dom && listening to events
window.addEventListener("message", ({ data }) => {
  if (data.source === "react-devtools-content-script") {
    return;
  }
  console.log(new Date(), "got message", data);
  let a = document.createElement("div");
  render(html`<pre>${new Date().toISOString()}: ${data}</pre>`, a);
  app.appendChild(a);
});
window.postMessage("Ping");
