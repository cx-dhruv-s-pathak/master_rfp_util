import React from 'react';
import './rfpModal.css';

const RfpModal = ({ visible, onClose, title, content }) => {
  if (!visible) return null;

  return (
    <div className="rfp-modal-backdrop">
      <div className="rfp-modal">
        <h2>{title}</h2>
        <textarea readOnly value={content} />
        <div className="modal-buttons">
          <button onClick={() => {
            navigator.clipboard.writeText(content);
          }}>Copy</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default RfpModal;
