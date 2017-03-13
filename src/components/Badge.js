import React from "react";
import {connect} from "react-redux";
import I from "immutable";
import smallImage from "../../public/styles/images/small.png";
import {Sparklines, SparklinesLine, SparklinesSpots} from "react-sparklines";
import {InfoItem} from "./InfoItem";
import {LoadingIndicator} from "./LoadingIndicator";
import {ErrorMessage} from "./ErrorMessage";
import {RateLimit} from "./RateLimit";

function suitFollower(number) {
  const abbrv = ["k", "m", "b"];
  const power = parseInt(Math.log10(number) / 3, 10);
  return parseInt(number / Math.pow(1000, power), 10) + abbrv[power - 1] || number || 0;
}

function suitResponse(repoInfo, userInfo) {
  return {
    htmlUrl: userInfo.html_url || "https://github.com/404",
    avatarUrl: userInfo.avatar_url || "https://avatars2.githubusercontent.com/u/5779565?v=3&s=88",
    login: userInfo.login || userInfo.message,
    name: repoInfo.name || "no recent repo activity",
    language: repoInfo.language ? "(" + repoInfo.language + ")" : "",
    followers: suitFollower(userInfo.followers),
    repos: userInfo.public_repos || 0,
    forks: repoInfo.forks_count || 0,
    stargazzers: repoInfo.stargazers_count || 0
  };
}

export function Badge({badgeUserInfo, badgeRepoInfo, badgeGraphInfo, errorMessage}) {
  if (I.List.isList(badgeUserInfo) || I.List.isList(badgeRepoInfo) || !badgeGraphInfo) {
    return <LoadingIndicator />;
  }
  if (errorMessage) {
    return <ErrorMessage/>;
  }
  if (badgeUserInfo.status) {
    return <RateLimit />;
  }

  const {htmlUrl, avatarUrl, login, name, language, followers, repos, forks, stargazzers} = suitResponse(badgeRepoInfo, badgeUserInfo, badgeGraphInfo);
  return (
    <div>
      <div className="styleOfIframe">
        <div className="column-1">
          <div className="row">
            <a target="_blank" href={htmlUrl} >
              <img className="badge-image"
                src={avatarUrl}
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
            <a className="link-tag" target={"_blank"} href={htmlUrl}>
              {login}
            </a>
          </div>
          <div className="row">
            <p className="last-activity">
              {name} {language}
            </p>
          </div>
          <div className="row">
            <InfoItem
              num={followers}
              name="followers"
            />
            <InfoItem
              num={repos}
              name="repos"
            />
          </div>
          <div className="row">
            <InfoItem
              num={forks}
              name="forks"
            />
            <InfoItem
              num={stargazzers}
              name="stargazzers"
            />
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
    badgeGraphInfo: state.get("badgeGraphInfo"),
    errorMessage: state.get("errorMessage")
  };
}

export default connect(mapStateToProps)(Badge);
