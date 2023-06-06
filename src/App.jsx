import Theme from "./pages/one.jsx";
import { useState } from "react";

function App() {
  const [state, setState] = useState(false);
  const [button, setButton] = useState("NightMode");
  var noflag;
  state == true ? (noflag = "black") : (noflag = "white");
  const divStyle = {
    background: `${noflag}`,
    width: "100%",
    height: "100%",
    textAlign: "center",
  };

  function Theme2() {
    setState((state) => !state);
    setButton((btn) => (btn = "DayMode"));

    if (button == "DayMode") {
      setButton((btn) => (btn = "NightMode"));
    }
  }

  return (
    <Theme state={state} divstyle={divStyle} Theme={Theme2} btn={button} />
  );
}

export default App;
