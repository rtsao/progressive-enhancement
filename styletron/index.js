import { React, ReactDOM } from "https://unpkg.com/es-react";
import htm from "https://unpkg.com/htm@latest?module";
import {
  styled,
  Provider,
  DebugEngine
} from "https://unpkg.com/styletron-react@es-react/dist/browser.es2017.es.js?module";
import { Client as Styletron } from "https://unpkg.com/styletron-engine-atomic@es?module";

import Root from "./app.js";

const html = htm.bind(React.createElement);

ReactDOM.render(
  html`
  <${Provider} value=${new Styletron()} debug=${new DebugEngine()}><${Root}/><//>
`,
  document.getElementById("root")
);
