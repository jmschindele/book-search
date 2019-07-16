import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function SearchRow({ children }) {
  return (
    <div className="styled-row">
      <ul className="list-group">{children}</ul>
    </div>
  );
}
