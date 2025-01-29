import React, { useState } from "react";
import "./Textform.css";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("upclick was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("Text has been converted into uppercase.","primary")
  };

  const handlelowClick = () => {
    // console.log("lowclick was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    // props.showAlert("Text has been converted into lowercase.","primary")
  };

  const handledmyClick = () => {
    // console.log("lowclick was clicked");
    let newText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus veritatis repellendus harum, sunt ipsam tempora architecto eaque consectetur qui voluptas nihil tempore asperiores molestiae blanditiis ducimus, id non? Laudantium illo iusto sunt maxime aperiam excepturi doloribus necessitatibus repellat quae consectetur nobis error nulla itaque rerum officia, non distinctio commodi. Commodi, beatae perspiciatis omnis in ullam quas vel. Quisquam laudantium laborum praesentium minima iure perferendis quia! Natus, molestiae blanditiis possimus ipsa porro veniam amet, quasi dolores corrupti provident tenetur? Illum doloremque, adipisci odit voluptas nobis hic delectus harum itaque! Ab enim ex accusantium, ullam fugit voluptates sit eius sint numquam debitis.";
    setText(newText);
    // props.showAlert("Dummy text has been added.","primary")
  };

  const handleClrClick = () => {
    // console.log("lowclick was clicked");
    let newText = "";
    setText(newText);
    // props.showAlert("Text has been cleared.","primary")
  };

  const handleOnChange = (event) => {
    // console.log("Onchange was triggered");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="super container">
        <h1 className="container mb-4 mt-4" 
        style={{color: props.mode==="light"?"black":"white"}}
        >{props.heading}</h1>
        <div className="container mb-4">
          <textarea
            className={"form-control"}
            id="Textarea"
            rows={8}
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode === "dark"?"#1F1E1E":"white",  
            // color: props.mode==="light"?"black":"white"
            color: "black"
          }}
          ></textarea>
        </div>
        <div className="container btns mb-4">
          <button
            type="button"
            className={"btn"}
            style={{backgroundColor: props.mode === "dark"?"#BB87FD":"#242582",color: "white"}}
            onClick={handleUpClick}
          >
            Convert to uppercase
          </button>
          <button
            type="button"
            className={"btn"}
            style={{backgroundColor: props.mode === "dark"?"#BB87FD":"#242582",color: "white"}}
            onClick={handlelowClick}
          >
            Convert to lowercase
          </button>
          <button
            type="button"
            className={"btn"}
            style={{backgroundColor: props.mode === "dark"?"#BB87FD":"#242582",color: "white"}}
            onClick={handledmyClick}
          >
            Dummy text
          </button>
          <button
            type="button"
            className={"btn"}
            style={{backgroundColor: props.mode === "dark"?"#BB87FD":"#242582",color: "white"}}
            onClick={handleClrClick}
          >
            Clear text
          </button>
        </div>
        <div className="container preview" style={{color: props.mode==="light"?"black":"white"}}>
          <h1>Your text summary</h1>
          <p>
            {text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} minutes to read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
