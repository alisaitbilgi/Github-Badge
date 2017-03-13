import React from "react";

export function RateLimit() {
  return (
    <div>
      <div className="column-1">
        <p className="bold-item">Rate Limit Exceeded</p>
        <p>(Request is forbidden)</p>
      </div>
      <p>Please checkout:
        <a target="_blank" href="https://developer.github.com/v3/rate_limit/">Github Rate Limit </a>
      </p>
    </div>
  );
}
