// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = (cls) => {
    if (mode === "light") {
      removeBg()
      // document.body.classList.add("bg-"+cls)
      setMode("dark");
      document.body.style.backgroundColor = "#131312";
      // showAlert("dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("light mode has been enabled", "success");
    }
  };

  const removeBg=()=>{
    document.body.classList.remove("bg-light")
    document.body.classList.remove("bg-dark")
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-warning")
  }

  const [theme,setTheme]=useState("primary")

  const toggleTheme = ()=>{

  }

  // const [alertMsg, setAlertMsg] = useState(null);

  // const showAlert = (Message, type) => {
  //   setAlertMsg({
  //     msg: Message,
  //     type: type,
  //   });
  //   setTimeout(() => {
  //     setAlertMsg(null);
  //   }, 1500);
  // };
  return (
    <>
      {/* the below code is used to give a basic idea about the JSX and JSX fragment
    <h1 className="head">this is my website</h1>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}

      {/* pract code
      <nav className="navbar">
        <h4>New Site</h4>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav> */}

      <Router>
        <Navbar
          title="Textutility"
          obj1="Home"
          obj2="About TextUtility"
          mode={mode}
          toggleMode={toggleMode}
          theme={theme}
          toggleTheme = {toggleTheme}
        ></Navbar>
        {/* <Alert alert={alertMsg} mode={mode} /> */}

        <Routes>
        <Route path="/" element={<Home
          mode={mode}
          // toggleMode={toggleMode}
           />} />
          <Route
            path="/Textform"
            element={
              <Textform
              heading="Enter your text below to analyze"
              theme={theme}
              mode={mode}
              // showAlert={showAlert}
               />
            }
          />
          <Route path="/About" element={<About
          // mode={mode}
          toggleMode={toggleMode} />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
