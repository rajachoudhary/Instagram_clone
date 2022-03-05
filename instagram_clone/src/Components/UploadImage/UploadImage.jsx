import { Button, Dialog, Fab } from '@mui/material';
import React, { useState } from 'react'
import styles from "./UploadImage.module.css"
import {ReactComponent as PhotoAdd} from "../../Svgfile/PhotoAdd.svg"
import { UploadPart2 } from './UploadPart2';
export const UploadImage = (props) => {
  const [open1,setOpen1] = useState(false)
    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
        onClose(selectedValue);
        handleClickOpen1()
      };
      const handleClickOpen1 = () => {
        setOpen1(true);
      };
    
      const handleClose1 = (value) => {
        setOpen1(false);
      };
  return (
    <div>
      <Dialog className={styles.diag} onClose={handleClose} open={open}>    
        <div className={styles.dialog} >
            <h4 style={{padding:"5px"}}  >Create new post</h4>
            <hr />
            <div className={styles.drag_element} >
                <div>
                  <PhotoAdd/>
                </div>
                <div>
                  <p className={styles.drag} >Drag photos and videos here</p>
                <div className={styles.drag_button}>
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    />
                  <Button variant="contained" component="span">
                  Select from computer
                 </Button>
                 </label>
                </div>
                </div>
            </div>
           
        </div>
        <Button onClick={()=>handleClose()} >Continue</Button>
    </Dialog>
    <UploadPart2 open={open1} onClose={handleClose1} />
    </div>
  )
}
