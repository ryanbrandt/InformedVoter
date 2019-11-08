import React from "react";
import { Modal } from "react-bootstrap";

const AppModal = props => {
  const { children, title, bodyText, footer, active, onClose } = props;
  return (
    <Modal show={active} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
        {bodyText}
      </Modal.Body>
      <Modal.Footer>{footer}</Modal.Footer>
    </Modal>
  );
};

export default AppModal;
