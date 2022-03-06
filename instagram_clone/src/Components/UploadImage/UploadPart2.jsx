import { Button, Dialog, Fab } from '@mui/material';
import React, { useState } from 'react'
import styles from "./UploadImage.module.css"
import { UploadPart3 } from './UploadImage3';

export const UploadPart2 = (props) => {
    const [open2,setOpen2] = useState(false)
    const { onClose, selectedValue, open } = props;
    const handleClose1 = () => {
        onClose(selectedValue);
        handleClickOpen2()
      };
      const handleClickOpen2 = () => {
        setOpen2(true);
      };
    
      const handleClose2 = (value) => {
        setOpen2(false);
      };  
  return (
    <div>
      <Dialog className={styles.diag} onClose={handleClose1} open={open}>    
        <div>
            <div className={styles.funct_nav} >
            <button></button>
            <button onClick={()=>handleClose1()}><span style={{color:"#0095f6",fontWeight:"700"}} >Next</span></button>
            </div>
            <hr />
            <div>
                <img className={styles.imageView_p2} src="https://i.ibb.co/QFhdByz/Instagram-logo-2016-svg.png" alt="img" />
            </div>
        </div>
        </Dialog>
    <UploadPart3 open={open2} onClose={handleClose2} />
    </div>
  )
}
