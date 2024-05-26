import React from 'react';
import './Modal.scss';

const Modal = ({ show, onClose, user }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{user.fullName}</h2>
        <div className="modal-gallery">
          {user.kycPhotos.map((photo, index) => (
            <img key={index} src={photo} alt={`${user.fullName} KYC ${index + 1}`} className="modal-photo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
