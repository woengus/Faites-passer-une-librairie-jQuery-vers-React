import React from "react";

const Modal = () => {
  /** la fenêtre modale s'ouvrira au milieu du DOM, quelles que soient les dimensions de l'écran. Les coordonnées de positionnement sont calculées en fonction de la largeur et de la hauteur de la fenêtre modale ainsi que des dimensions de l'écran. La méthode moveTo() déplace ensuite la fenêtre modale aux coordonnées calculées.**/
  const openModalWindow = () => {
    const modalWidth = 300;
    const modalHeight = 200;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const leftPosition = (screenWidth - modalWidth) / -1.4;
    const topPosition = (screenHeight - modalHeight) / 1.4;

    const modalWindow = window.open(
      "",
      "_blank",
      `width=${modalWidth},height=${modalHeight}`
    );
    modalWindow.document.write(`
      <html>
        <head>
          <title>Modal Window</title>
          <style>
            .modal {
              controlbox=false;
              width: ${modalWidth}px;
              height: ${modalHeight}px;
              background-color: #f0f0f0;
              border: 1px solid #ccc;
              border-radius: 4px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 20px;
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            
            .modal p {
              margin-bottom: 1rem;
            }
            
            .modal button {
              padding: 0.5rem 1rem;
              background-color: #333;
              color: #fff;
              border: none;
              border-radius: 4px;
              cursor: pointer;
            }
          </style>
        </head>
        <body>
          <div class="modal">
            <p>Employee Created!</p>
            <button onclick="window.close()"><span class="text-modal">X</span></button>
          </div>
        </body>
      </html>
    `);
    modalWindow.document.close();
    modalWindow.moveTo(leftPosition, topPosition);
  };

  return <button onClick={openModalWindow}>Save</button>;
};

export default Modal;
