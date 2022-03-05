import { Button, Dialog, Fab } from '@mui/material';
import React, { useState } from 'react'
import styles from "./UploadImage.module.css"
import { UploadPart4 } from './UploadImage4';

export const UploadPart3 = (props) => {
  const [open3,setOpen3] = useState(false)
    const { onClose, selectedValue, open } = props;
    const handleClose2 = () => {
        onClose(selectedValue);
        handleClickOpen3()
      };  
      const handleClickOpen3 = () => {
        setOpen3(true);
      };
    
      const handleClose3 = (value) => {
        setOpen3(false);
      };  
  return (
    <div>
      <Dialog className={styles.diag} onClose={handleClose2} open={open}>    
        <div>
            <div className={styles.funct_nav} >
            <button  >3perv</button>
            <button onClick={()=>handleClose2() }>next</button>
            </div>
            <hr />


            <div className={styles.container_p3} >
                <div>
                <img className={styles.imageView_p3} src="https://i.ibb.co/QFhdByz/Instagram-logo-2016-svg.png" alt="img" />
                </div>
                <div>
                  <div className={styles.fragments} >
                    <button>Filters</button>
                    <button>Adjustment</button>
                  </div>
                  <hr />
                  <div className={styles.filters} >
                    <button><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                    <button><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                    <button><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                    <button><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                    <button><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                    <button><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                    <button><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                    <button><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                    <button><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                  </div>
                </div>
            </div>
        </div>
        </Dialog>
    <UploadPart4 open={open3} onClose={handleClose3} />
    </div>
  )
}
