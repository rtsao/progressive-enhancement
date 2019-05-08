const React = require("react");
const ReactDOMServer = require("react-dom/server");

const List = props => (
  <div>
    <h1>Showing {props.items.length} items</h1>
    <ul>
      {props.items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const app = (
  <div>
    <List items={["foo", "bar", "baz"]} />
  </div>
);

const rendered = ReactDOMServer.renderToString(app);

console.log(rendered);
