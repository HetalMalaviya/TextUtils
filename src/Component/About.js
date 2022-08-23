import React from "react";
import Navbar from "./Navbar";

export default function About(props) {
  // const [MyStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let MyStyle = {
    color: props.mode === "dark" ? "white" : "#6aa392",
    backgroundColor: props.mode === "dark" ? "#6aa392" : "white",
    border: "2px, solid",
    borderColor: props.mode === "dark" ? "white" : "black",
  };

  // const [btntext, setBtntext] = useState("Enable Dark Mode ");
  // const handleChangemode = () => {
  //   if (MyStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: " black",
  //     });
  //     setBtntext("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: " black",
  //       backgroundColor: "white",
  //     });
  //     setBtntext("Enable Dark Mode");
  //   }
  // };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#6aa392" }}
      >
        <h1>About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                style={MyStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <strong> Free to Use</strong>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              style={MyStyle}
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={MyStyle}>
                Text utils is free word and charachter counter tool. As well as
                you change your text in Uppercase , Lowercase, Copy,
                Capitalization e.t.c
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                style={MyStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <strong> Anlayze your text</strong>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={MyStyle}>
                Textutils gives you anlayze your text quickly and efficieantly.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                style={MyStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <strong>Browser Compability</strong>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={MyStyle}>
                This wrod counter software works in any web browser such as
                chrome, mozila firefox, Internet Explorer, Safari.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
