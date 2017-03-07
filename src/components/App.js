import React from "react";
import Home from "./Home";
import forkImage from "../../public/styles/images/fork.png";


export default function App() {
  return (
      <div className="main">
          <div className="sidebar">
              <a href={"https://github.com/alisaitbilgi/Github-Badge"}>
                  <img className="fork-image" alt="fork-me" src={forkImage} />
              </a>
          </div>
          <div className="article">
              <Home/>
          </div>
          <div className="sidebar" />
      </div>
  );
}

