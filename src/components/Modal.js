/**
 * Composant Modal pour afficher une superposition modale avec un message et un bouton de fermeture.
 */
import React, { useState } from "react";

/**
 * Représente une superposition modale.
 * @returns {JSX.Element} La superposition modale.
 */
const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Ouvre la superposition modale.
   */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /**
   * Ferme la superposition modale.
   */
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Save</button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Employee created !</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      <style>
        {`
           .modal-overlay {
             position: fixed;
             top: 0;
             left: 0;
             width: 100%;
             height: 100%;
             display: flex;
             justify-content: center;
             align-items: center;
             background-color: rgba(0, 0, 0, 0.5);
             z-index: 9999;
           }
           
           .modal {
             width: 180px;
             height: 50px;
             background-color: #f0f0f0;
             border: 1px solid #ccc;
             border-radius: 4px;
             display: flex;
             flex-direction: column;
             justify-content: center;
             align-items: center;
             padding: 20px;
             background-color: aquamarine;
           }
           
           .modal p {
             margin: 0;
           }
           
           .modal button {
             background-color: transparent;
             border: none;
             cursor: pointer;
             padding: 0;
             color: #333;
             font-weight: bold;
             font-size: 18px;
             margin-top: 10px;
           }
         `}
      </style>
    </>
  );
};

export default Modal;
