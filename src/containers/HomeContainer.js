import React, {Component} from "react";
import {debounce} from "throttle-debounce";
import {connect} from "react-redux";
import {setUserName} from "../actions/setUserName";
import HomePresenter from "../components/HomePresenter";


export class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.callSubmit();
    this.callSubmit = debounce(520, this.callSubmit);
  }

  handleSubmit(evt) {
    this.callSubmit(evt.target.value);
  }

  callSubmit(input) {
    this.props.dispatch(setUserName(input));
  }

  render() {
    return (
        <div className="article">
            <HomePresenter takeUserName={this.props.username} />
            <div className="form-container">
                <input
                    className="inputStyle"
                    onKeyUp={this.handleSubmit}
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

export default connect(mapStateToProps)(HomeContainer);
