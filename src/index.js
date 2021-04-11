import "./style/style.scss";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const HEART = "❤️";

function App() {
  let [hearts, setHearts] = useState(HEART);

  useEffect(() => {
    setTimeout(() => {
      let h = hearts + HEART;
      h = h === HEART.repeat(4) ? HEART : h;
      setHearts(h);
    }, 1000);
  }, [hearts]);

  return (
    <div style={{textAlign: "center"}}>
      <h1>React</h1>
      <h1>Berry</h1>
      <h1>Webpack</h1>
      <h1>{hearts}</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
