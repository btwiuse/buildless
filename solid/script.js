// https://kofi.sexy/blog/modern-spasur-browser-without-babel-1agc

// standard import declarations thanks to the import map
import html from "solid-js/html";
import { render } from "solid-js/web";

const HelloWorld = () => {
  // tagged template literals feel close enough to JSX (the defacto standard)
  return html`<div>Hello World!</div>`;
};

render(HelloWorld, document.getElementById("app"));
