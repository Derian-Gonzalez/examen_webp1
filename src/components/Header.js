import React from 'react';

function Header() {
  return (
    <header className="App-header">
      <div className="contact-info">
        <span>Proyecto Parcial 1 - React</span>
      </div>
      <div className="profile-section">
        <img 
          src="/assets/profile.jpg" 
          alt="Derian Octavio González Conde" 
          className="profile-img" 
        />
        <h1>Derian Octavio González Conde</h1>
        <a 
          href="https://www.linkedin.com/in/derian-octavio-gonzalez-conde-5384813a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="App-link"
          style={{fontSize: '20px', padding: '10px 20px', display: 'inline-block'}}
        >
          LINKEDIN DE MI PERFIL
        </a>
      </div>
    </header>
  );
}

export default Header;