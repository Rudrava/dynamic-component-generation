import React, { useCallback, useEffect, useState } from "react";
import Modal from "react-modal";
import { genComponent } from "../lib/Filter";

const ModalSection = ({ compData }) => {
  useEffect(() => Modal.setAppElement("#root"), []);
  const [open, setOpen] = useState();
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <>
      <Modal
        isOpen={open}
        onRequestClose={onClose}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          },
          content: {
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        {compData.child.map((d) => genComponent(d.type, d.data))}
      </Modal>
      <button onClick={() => setOpen(true)}>{compData.buttonLabel}</button>
    </>
  );
};

export default ModalSection;

export const genModal = (compData) => {
  return (
    <>
      <ModalSection compData={compData} />
    </>
  );
};
