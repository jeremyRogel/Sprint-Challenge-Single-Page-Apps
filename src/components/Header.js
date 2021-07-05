import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav className="navBar">
        <Link to={`/`}>Home Page</Link>
        <Link to={`/characters`}>Characters Cards</Link>
      </nav>
    </header>
  );
}