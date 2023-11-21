import React, { useRef, useState } from "react";
import htm from "htm";

const html = htm.bind(React.createElement);

export function Counter() {
  const [count, setCount] = useState(0);

  return html`
    <div>
      <button onClick=${() => setCount(count + 1)}>
        Clicked ${count} times
      </button>
    </div>
  `;
}
