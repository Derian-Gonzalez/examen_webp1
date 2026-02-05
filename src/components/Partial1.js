import React from 'react';

function Partial1() {
  const linkedinUrl = "https://www.linkedin.com/in/derian-octavio-gonzalez-conde-5384813a5";

  return (
    <section className="partial1-section">
      <h2>PARCIAL 1</h2>
      <p>Web site created using create-react-app</p>
      <p className="website-url">Mi Perfil de LinkedIn</p>
      <a 
        href={linkedinUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="App-link"
        style={{fontSize: '16px', wordBreak: 'break-all'}}
      >
        {linkedinUrl}
      </a>
      {/* HORA ELIMINADA */}
    </section>
  );
}

export default Partial1;