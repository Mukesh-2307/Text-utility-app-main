import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: props.mode === "dark" ? "#1F1E1E" : "#242582",
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ color: props.mode === "dark" ? "white" : "white" }}
          >
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/Textform"
                  style={{ color: props.mode === "dark" ? "white" : "white" }}
                >
                  {props.obj1}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/About"
                  style={{ color: props.mode === "dark" ? "white" : "white" }}
                >
                  {props.obj2}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}

            <div className={"form-check form-switch"}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className={`form-check-label`}
                htmlFor="flexSwitchCheckDefault"
                style={{ color: props.mode === "dark" ? "white" : "white" }}
              >
                enable {props.mode === "dark" ? "light" : "dark"} mode
              </label>
            </div>

            {/* <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height: "30px",width: "30px",cursor:"pointer"}}></div>
              <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}}style={{height: "30px",width: "30px"}}></div>
              <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}}style={{height: "30px",width: "30px"}}></div>
              <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}}style={{height: "30px",width: "30px"}}></div> */}
            {/* </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

// the below code will restrict other users from accidentally sending any number insted of sending string values to the above mentioned props.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  obj2: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "set your title here",
  obj1: "set item here",
  obj2: "set item here",
};
