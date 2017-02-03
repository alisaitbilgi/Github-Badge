import React, {Component} from "react";
import I from "immutable";
import smallImage from "../../public/styles/images/small.png";


// Initial response objects
let repos;
let users;

class ContentContainer extends Component {


  render() {

    if (!I.List.isList(this.props.responseData)) {
      repos = JSON.parse(this.props.responseData[0])[0];
      users = JSON.parse(this.props.responseData[1]);
    } else {
      repos = [{}];
      users = {
        message: ""
      };
    }

    return (
        <div className="content">
            <div className="col1">
                <div className="row_of_col1">
                    <a href={users.html_url || "https://github.com/404"}>
                        <img src={users.avatar_url || "https://avatars2.githubusercontent.com/u/5779565?v=3&s=88"} alt="avatar" />
                    </a>
                </div>
                <div className="row_of_col1" />
                <div className="row_of_col1"><img src={smallImage} alt="git-ninja"/></div>
            </div>
            <div className="col2">
                <div className="row_of_col2">
                    <span className="topOnes">
                        <a href={users.html_url || "https://github.com/404"}>
                            {users.login || users.message }
                        </a>
                    </span>
                </div>
                <div className="row_of_col2">
                    <span className="topOnes">
                        {repos ? repos.name : "no recent repo activity"} {repos ? "(" + repos.language + ")" : ""}
                    </span>
                </div>
                <div className="row_of_col2">
                    <span className="rightOnes"><b>{users.followers > 1000 ? Math.floor(users.followers / 1000, -1) + "k" : users.followers || 0}</b> Followers</span>
                    <span className="leftOnes"><b>{users.public_repos || 0}</b>  Repos</span>
                </div>
                <div className="row_of_col2">
                    <span className="leftOnes"><b>{repos ? repos.forks_count : 0}</b> Forks</span>
                    <span className="rightOnes"><b>{repos ? repos.stargazers_count : 0}</b> Stargazers</span>
                </div>
            </div>
        </div>
    );
  }
}

export default ContentContainer;
