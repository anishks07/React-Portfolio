import React from 'react';

function Header() {
  return (
    <header>
      <div className="container header-container">
        <a href="#home" className="logo">Anish Sai Konda</a>
        <nav>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
