import React from 'react';
import ReactDOM from 'react-dom';

import './RulesModal.css';
import rulesImg from './image-rules.svg';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const RulesModal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-body">
        <div className="modal-header">
          <h2 className="modal-title">Rules</h2>
          <div onClick={onClose} className="modal-close-btn">
            <span></span>
            <span></span>
          </div>
        </div>
        <img className="rules-img" src={rulesImg} alt="rules" />
      </div>
    </div>,
    document.body
  );
};
