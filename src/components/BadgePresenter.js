import React, {Component} from "react";
import I from "immutable";
import smallImage from "../../public/styles/images/small.png";
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';


let repos;
let users;
let values = [];
let responseArray = [];
let length = 0;
let lastWeek = new Date();

export default class BadgePresenter extends Component {

  render() {

    if (!I.List.isList(this.props.responseData)) {

      responseArray = JSON.parse(this.props.responseData[0]);
      length = responseArray.length;
      lastWeek.setDate((lastWeek.getDate()) - 7);

      for(let i = 0; i < length; i++) {
        if(new Date(responseArray[i].updated_at).getTime() > lastWeek.getTime()) {
          values.push (responseArray[i].size);
        } else {
          values.push(0);
        }
      }

      repos = responseArray[0];
      users = JSON.parse(this.props.responseData[1]);

    } else {
      repos = [{}];
      users = {
        message: ""
      };
    }

    return (
      <div className="styleOfIframe">
        <div className="column-1">
          <div className="row">
            <a target={"_blank"} href={users.html_url || "https://github.com/404"} >
              <img className="badge-image" src={users.avatar_url || "https://avatars2.githubusercontent.com/u/5779565?v=3&s=88"} alt="avatar" />
            </a>
          </div>
          <div className="row">
            <div className="svg-wrapper">
              <Sparklines data={values} margin={6}>
                <SparklinesLine style={{ strokeWidth: 10, stroke: "#2c3cff", fill: "aliceblue" }} />
                <SparklinesSpots size={4} style={{ stroke: "#336aff", strokeWidth: 3, fill: "white" }} />
              </Sparklines>
            </div>
          </div>
          <div className="row">
            <img className="badge-image" src={smallImage} alt="git-ninja"/>
          </div>
        </div>
        <div className="column-5">
          <div className="row">
            <a className="link-tag" target={"_blank"} href={users.html_url || "https://github.com/404"}>
              {users.login || users.message }
            </a>
          </div>
          <div className="row">
              <p className="last-activity">
                {repos ? repos.name : "no recent repo activity"} {repos ? "(" + repos.language + ")" : ""}
              </p>
          </div>
          <div className="row">
            <div className="column-5">
              <div className="text-item">
                <span className="bold-item">
                  {users.followers > 1000 ? Math.floor(users.followers / 1000, -1) + "k" : users.followers || 0}
                </span> followers
              </div>
            </div>
            <div className="column-5">
              <div className="text-item">
                <span className="bold-item">
                  {users.public_repos || 0}
                </span> repos
              </div>
            </div>
          </div>
          <div className="row">
            <div className="column-5">
              <div className="text-item">
                <span className="bold-item">
                  {repos ? repos.forks_count : 0}
                </span> forks
              </div>
            </div>
            <div className="column-5">
              <div className="text-item">
                <span className="bold-item">
                  {repos ? repos.stargazers_count : 0}
                </span> stargazers
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

