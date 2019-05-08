import { React } from "https://unpkg.com/es-react";
import htm from "https://unpkg.com/htm@latest?module";
import { styled } from "https://unpkg.com/styletron-react@es-react/dist/browser.es2017.es.js?module";
const html = htm.bind(React.createElement);

export const Title = styled("h1", {
  color: "black"
});

export const Panel = styled("div", {
  borderRadius: "6px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  padding: "30px"
});

export const Button = styled("button", {
  cursor: "pointer",
  borderRadius: "4px",
  fontSize: "16px",
  fontWeight: "bold",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  background: "linear-gradient(135deg, #6e8efb, #a777e3)",
  padding: "20px 36px",
  color: "white",
  ":hover": {
    background: "linear-gradient(135deg, #b3c3fb, #d5b5fd)"
  }
});

export const Layout = styled("div", {
  fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
  padding: "30px 30px 0 30px"
});
