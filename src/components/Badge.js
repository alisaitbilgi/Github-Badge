import React from "react";
import {connect} from "react-redux";
import I from "immutable";
import smallImage from "../../public/styles/images/small.png";
import {Sparklines, SparklinesLine, SparklinesSpots} from "react-sparklines";
import loading from "../../public/styles/images/loading.svg";

export function Badge({badgeUserInfo, badgeRepoInfo, badgeGraphInfo}) {
  if (I.List.isList(badgeUserInfo) || I.List.isList(badgeRepoInfo)) {
    return (
        <div className="styleOfIframe">
            <img className="loader" src={loading} alt="loading..."/>
        </div>
    );
  }
  return (
      <div>
          <div className="styleOfIframe">
              <div className="column-1">
                  <div className="row">
                      <a target={"_blank"} href={badgeUserInfo.html_url || "https://github.com/404"} >
                          <img className="badge-image"
                              src={badgeUserInfo.avatar_url || "https://avatars2.githubusercontent.com/u/5779565?v=3&s=88"}
                              alt="avatar"
                          />
                      </a>
                  </div>
                  <div className="row">
                      <div className="svg-wrapper">
                          <Sparklines data={badgeGraphInfo} margin={6}>
                              <SparklinesLine style={{strokeWidth: 10, stroke: "#2c3cff", fill: "aliceblue"}} />
                              <SparklinesSpots size={4} style={{stroke: "#336aff", strokeWidth: 3, fill: "white"}} />
                          </Sparklines>
                      </div>
                  </div>
                  <div className="row">
                      <img className="badge-image" src={smallImage} alt="git-ninja"/>
                  </div>
              </div>
              <div className="column-5">
                  <div className="row">
                      <a className="link-tag" target={"_blank"} href={badgeUserInfo.html_url || "https://github.com/404"}>
                          {badgeUserInfo.login || badgeUserInfo.message }
                      </a>
                  </div>
                  <div className="row">
                      <p className="last-activity">
                          {badgeRepoInfo ? badgeRepoInfo.name : "no recent repo activity"} {badgeRepoInfo && badgeRepoInfo.language ? "(" + badgeRepoInfo.language + ")" : ""}
                      </p>
                  </div>
                  <div className="row">
                      <div className="column-5">
                          <div className="text-item">
                              <span className="bold-item">
                                  {badgeUserInfo.followers > 1000 ? Math.floor(badgeUserInfo.followers / 1000, -1) + "k" : badgeUserInfo.followers || 0}
                              </span> followers
                          </div>
                      </div>
                      <div className="column-5">
                          <div className="text-item">
                              <span className="bold-item">
                                  {badgeUserInfo.public_repos || 0}
                              </span> repos
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="column-5">
                          <div className="text-item">
                              <span className="bold-item">
                                  {badgeRepoInfo && badgeRepoInfo.forks_count ? badgeRepoInfo.forks_count : 0}
                              </span> forks
                          </div>
                      </div>
                      <div className="column-5">
                          <div className="text-item">
                              <span className="bold-item">
                                  {badgeRepoInfo && badgeRepoInfo.stargazers_count ? badgeRepoInfo.stargazers_count : 0}
                              </span> stargazers
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

function mapStateToProps(state) {
  return {
    badgeUserInfo: state.get("badgeUserInfo", I.List()),
    badgeRepoInfo: state.get("badgeRepoInfo", I.List()),
    badgeGraphInfo: state.get("badgeGraphInfo", [])
  };
}

export default connect(mapStateToProps)(Badge);
