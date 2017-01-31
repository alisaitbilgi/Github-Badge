import React, {Component} from "react";
import I from "immutable";

const smallImage = require("/Users/alibilgi/Desktop/projects/GithubBadge/public/styles/images/small.png");

// Initial response objects
let repos = [{}];
let users = {
    message: ""
};

class ContentContainer extends Component {

    shouldComponentUpdate(nextProps) {
        return !I.is(this.props.responseData, nextProps.responseData);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.responseData.get("responseObject") !== this.props.responseData.get("responseObject")) {
            /*
                In case of server's response being 403 (Forbidden), the 'type' of the response object changes and
            in order not have a parse error, i needed to check it from the users.message property.
            */
            if(users.message === "" || users.message === "Not Found") {
                repos = JSON.parse(nextProps.responseData.getIn(["responseObject", 0]));
                users = JSON.parse(nextProps.responseData.getIn(["responseObject", 1]));
            } else {
                repos = [{}];
                users = {
                    message: ""
                };
            }
        }
    }

    render() {
        return(
            <div className="content">
                <div className="col1">
                    <div className="row_of_col1">
                        <a href={users.html_url || "https://github.com/404"}>
                            <img src={users.avatar_url || "https://avatars2.githubusercontent.com/u/5779565?v=3&s=88"} alt="empty" />
                        </a>
                    </div>
                    <div className="row_of_col1"></div>
                    <div className="row_of_col1"><img src={smallImage} alt="empty"/></div>
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
                            {repos[0] ? repos[0].name : "no recent repo activity"} {repos[0] ? "(" + repos[0].language + ")" : ""}
                        </span>
                    </div>
                    <div className="row_of_col2">
                        <span className="rightOnes"><b>{users.followers > 1000 ? Math.floor(users.followers/1000, -1) + "k" : users.followers || 0}</b> Followers</span>
                        <span className="leftOnes"><b>{users.public_repos || 0}</b>  Repos</span>
                    </div>
                    <div className="row_of_col2">
                        <span className="leftOnes"><b>{repos[0] ? repos[0].forks_count : 0}</b> Forks</span>
                        <span className="rightOnes"><b>{repos[0] ? repos[0].stargazers_count : 0}</b> Stargazers</span>
                    </div>
                </div>
            </div>
        );
    };
}

export default ContentContainer;
