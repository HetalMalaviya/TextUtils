import { useState } from "react";
import "./App.css";
import Alert from "./Component/Alert.js";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Textform from "./Component/Textform";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const enablemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3e6257";
      showAlert("Dark mode Enabled", " success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enabled", " success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={mode} enablemode={enablemode}></Navbar>
        <Alert alert={alert} />
        <div className=" container my-3">
          <Routes>
            <Route
              path="/about"
              element={<About mode={mode} enablemode={enablemode} />}
            />
            <Route
              path="/"
              element={
                <Textform heading="Add Your Text Here" mode={mode}></Textform>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
