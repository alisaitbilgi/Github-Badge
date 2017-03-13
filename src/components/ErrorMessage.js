import React from "react";

export function ErrorMessage() {
  return (
    <div>An error occurred on GithubAPI server!
      Please checkout:
      <a target="_blank" href="https://developer.github.com/"> GitHub Developer Guide </a>
       for more details...
    </div>
  );
}
