import React, {Component} from "react";
import {connect} from "react-redux";
import {setUserName} from "../actions/setUserName";
import HomePresenter from "../components/HomePresenter";
import {bindActionCreators} from 'redux';


export class HomeContainer extends Component {
  onUserChange(evt) {
    this.props.onUserChange(evt.target.value);
  }

  render() {
    return (
        <div className="article">
            <HomePresenter takeUserName={this.props.username} />
            <div className="form-container">
                <input
                    value={this.props.username}
                    className="inputStyle"
                    onChange={this.onUserChange.bind(this)}
                    placeholder="Type your GitHub username"
                />
            </div>
        </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    username: state.get("username", "")
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onUserChange: setUserName
  }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);
