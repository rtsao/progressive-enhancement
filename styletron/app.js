import { React } from "https://unpkg.com/es-react";
import htm from "https://unpkg.com/htm@latest?module";

import { Button, Layout, Title, Panel } from "./components.js";

const html = htm.bind(React.createElement);

export default function App() {
  const [count, setCount] = React.useState(0);

  return html`
  <${Layout}>
    <${Panel}>
      <${Title}>Count is ${count}<//>
      <${Button} onClick=${() => setCount(count - 1)}>
        Decrement
      <//>
      <${Button} onClick=${() => setCount(count + 1)}>
        Increment
      <//>
    <//>
  <//>
  `;
}
