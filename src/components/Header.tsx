import React from "react";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="brand">
        <span className="title">
          CH.dev<span className="tick">|</span>
        </span>
      </a>
      <nav>
        <ul>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
