import React from "react";

export default function Header() {
  return <header style={headStyle}>Just Do It</header>;
}

const headStyle = {
  color: "var(--main-color)",
  letterSpacing: "5px",
  textTransform: "uppercase",
  textAlign: "center",
  fontSize: "1.5rem",
  padding: "2vh 0",
  borderBottom: "2px solid #393E46",
};
