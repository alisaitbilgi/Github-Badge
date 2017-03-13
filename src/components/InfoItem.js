import React from "react";

export function InfoItem(props) {
  return (
    <div className="column-5">
      <div className="text-item">
        <span className="bold-item">
          {props.num}
        </span> {props.name}
      </div>
    </div>
  );
}
