// https://dev.to/devalnor/running-jsx-in-your-browser-without-babel-1agc

import ReactDOM from "react-dom";
import React, { useRef, useState } from "react";
import htm from "htm";

const html = htm.bind(React.createElement);

function Counter() {
  const [count, setCount] = useState(0);

  return html`
    <div>
      <button onClick=${() => setCount(count + 1)}>
        Clicked ${count} times
      </button>
    </div>
  `;
}

ReactDOM.render(html`<${Counter} />`, document.getElementById("root"));
