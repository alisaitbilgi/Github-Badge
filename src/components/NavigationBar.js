import React from "react";
import {Link} from "react-router";

export default function NavigationBar(props) {
  return (
    <div>
      {props.children}
      <footer>
        <Link to="/">Home </Link>
        <Link to="/profile">Profile</Link>
      </footer>
    </div>
  );
}

