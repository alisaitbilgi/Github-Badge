import React, {Component} from "react";
import {Link} from "react-router";


class NavigationBar extends Component {

  render() {
    return (
        <div>
            {this.props.children}
            <footer>
                <Link to="/">Home </Link>
                <Link to="/profile">Profile</Link>
            </footer>
        </div>
    );
  }
}

export default NavigationBar;
