import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleonChange = () => {
    //console.log("uppercase clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleonClick = () => {
    //console.log("lowecase clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleclearClick = () => {
    //console.log("lowecase clicked" + text);
    let newtext = "";
    setText(newtext);
  };
  const handlecapClick = () => {
    //console.log("lowecase clicked" + text);
    let newtext = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newtext);
  };
  const handlecopyClick = () => {
    //console.log("lowecase clicked" + text);
    // let newtext = "";
    // setText(newtext);
    // var text = document.getElementById("myBox");
    console.log(text);
    //text.select();
    // text?.setSelectionRange(0, 9999);
    document.getSelection.removeAllRanges();
    navigator.clipboard.writeText(text);
  };

  const handleupClick = (event) => {
    console.log("onchange");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#3e6257" }}
      >
        <h1>{props.heading}</h1>
        <div className="TextArea">
          <textarea
            className="form-control"
            value={text}
            onChange={handleupClick}
            id="TextArea"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#2a384c" : "white",
              color: props.mode === "dark" ? "white" : "#3e6257",
            }}
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-3 my-3"
          onClick={handleonChange}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={handleonClick}
        >
          convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={handleclearClick}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={handlecapClick}
        >
          Capitalization
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-3"
          onClick={handlecopyClick}
          // style={{
          //   backgroundColor: props.mode === "dark" ? "#3e6257" : "white",
          //   color: props.mode === "dark" ? "black" : "#3e6257",
          // }}
        >
          Copy
        </button>
      </div>

      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#3e6257" }}
      >
        <h2>Word Count</h2>
        <p>
          {/* {text.split(" ").length} word and charcter{text.length} */}
          {
            text
              .trim()
              .split(" ")
              .filter(function (element) {
                return element !== "";
              }).length
          }{" "}
          words and {text.length} characters{" "}
        </p>

        <p>
          {0.008 *
            text.split(" ").filter(function (element) {
              return element !== "";
            }).length}{" "}
          Minutes Read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter Something in above Text box "}</p>
      </div>
    </>
  );
}
