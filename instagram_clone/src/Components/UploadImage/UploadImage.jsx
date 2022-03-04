import { Dialog, DialogTitle } from '@mui/material';
import React from 'react'

export const UploadImage = (props) => {
    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
        onClose(selectedValue);
      };
  return (
    <div>
        <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Popup Data</DialogTitle>
    </Dialog>
    </div>
  )
}
