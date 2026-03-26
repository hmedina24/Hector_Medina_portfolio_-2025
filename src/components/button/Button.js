import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab}) {
  if (href) {
    return (
      <div className={className}>
        <a className="main-button" href={href} target={newTab && "_blank"}>
          {text}
        </a>
      </div>
    );
  }

  return (
    <div className={className}>
      <button className="main-button">{text}</button>
    </div>
  );
}
