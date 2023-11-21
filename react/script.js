// https://dev.to/devalnor/running-jsx-in-your-browser-without-babel-1agc

import ReactDOM from "react-dom";
import React from "react";
import { Counter } from "./Counter.js";
import htm from "htm";

const html = htm.bind(React.createElement);

ReactDOM.render(html`<${Counter} />`, document.getElementById("root"));
