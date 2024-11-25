import React from "react";
import { Modal, Fade, Box, SxProps } from "@mui/material";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  sx?: SxProps;
}

export const CustomModal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  sx,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      aria-labelledby="reusable-modal"
      aria-describedby="reusable-modal-description"
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "90%",
            minWidth: "90vw",
            width: "auto",
            maxHeight: "90vh",
            overflowY: "auto",
            background: "linear-gradient(180deg, #EEF3F7 0%, #FFFFFF 100%)",
            boxShadow: `
            0px 1.3px 2.21px 0px #07081705,
            0px 3.13px 5.32px 0px #07081707,
            0px 5.89px 10.02px 0px #07081709,
            0px 10.5px 17.87px 0px #0708170B,
            0px 19.64px 33.42px 0px #0708170D,
            0px 47px 80px 0px #07081712
          `,
            borderRadius: "16px",
            p: 4,
            ...sx,
          }}
        >
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
