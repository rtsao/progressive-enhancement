const React = require("react");
const ReactDOMServer = require("react-dom/server");
const { html } = require("htm/react");

const List = props =>
  html`
    <div>
      <h1>Showing ${props.items.length} items</h1>
      <ul>
        ${
          props.items.map(
            item => html`<li key="${item}">${item}</li>`
          )
        }
      </ul>
    </div>
  `;

const app = html`
  <div><${List} items=${["foo", "bar", "baz"]} /></div>
`;

const rendered = ReactDOMServer.renderToString(app);
console.log(rendered);
