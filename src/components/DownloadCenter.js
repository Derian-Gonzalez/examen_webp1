import React, { useState } from 'react';

function DownloadCenter() {
  const [showMenu, setShowMenu] = useState(false);

  // NOMBRES EXACTOS según tu captura
  const pdfFiles = [
    { 
      name: "COMANDOS BÁSICOS DE REACT", 
      fileName: "COMANDOS.pdf",
      downloadName: "COMANDOS_BASICOS_REACT.pdf"
    },
    { 
      name: "ISO / ESTANDAR IEEE", 
      fileName: "ieee.pdf",
      downloadName: "ISO_ESTANDAR_IEEE.pdf"
    },
    { 
      name: "REQUERIMIENTOS FUNCIONALES Y NO FUNCIONALES", 
      fileName: "Requerimientos funcionales y no funcionales.pdf",
      downloadName: "REQUERIMIENTOS_FUNCIONALES_Y_NO_FUNCIONALES.pdf"
    },
    { 
      name: "CÓDIGO PYTHON ALGORITMO SHA-256", 
      fileName: "_Codigo_sha_256.pdf",
      downloadName: "CODIGO_PYTHON_SHA256.pdf"
    },
  ];

  const handleDownload = (fileName, downloadName) => {
    const link = document.createElement('a');
    link.href = `/assets/${encodeURIComponent(fileName)}`;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="download-center">
      <h2>Centro de Descargas</h2>
      <p>Haz clic en los botones para obtener tus archivos PDF.</p>
      
      <div className="main-download-section">
        <button 
          className="pdf-button main-toggle-button"
          onClick={() => setShowMenu(!showMenu)}
          style={{width: '100%', fontSize: '18px', padding: '20px'}}
        >
          {showMenu ? '▲ OCULTAR MENÚ DE DESCARGAS' : '▼ MOSTRAR MENÚ DE DESCARGAS'}
        </button>

        {showMenu && (
          <div className="pdf-menu">
            {pdfFiles.map((pdf, index) => (
              <button
                key={index}
                onClick={() => handleDownload(pdf.fileName, pdf.downloadName)}
                className="pdf-button"
                style={{width: '100%', marginTop: '10px'}}
              >
                📄 {pdf.name}
              </button>
            ))}
            {/* BOTÓN DE REGRESAR ELIMINADO */}
          </div>
        )}
      </div>
    </section>
  );
}

export default DownloadCenter;