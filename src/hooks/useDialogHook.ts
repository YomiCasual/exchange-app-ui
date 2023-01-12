import { useState } from "react";

export interface CustomDialogProps {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  toggleDialog: () => void;
}

export const useDialogHook = (): CustomDialogProps => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggleDialog = () => setOpen(!open);

  return { open, handleOpen, handleClose, toggleDialog };
};
