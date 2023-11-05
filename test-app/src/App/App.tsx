import React from "react";
import "./global.scss";

import ReactIframeDynamicHeight from "../../../src";

export default function App() {
  const srcDoc = `<p>Hey</p>`;

  return (
    <div>
      <p>normal iframe:</p>
      <iframe srcDoc={srcDoc} title="google" />
      <br />

      <p>iframe with dynamic height:</p>
      <ReactIframeDynamicHeight srcDoc={srcDoc} />
    </div>
  );
}
