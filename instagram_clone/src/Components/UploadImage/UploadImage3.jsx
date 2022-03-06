import { Button, Dialog, Fab } from '@mui/material';
import React, { useState } from 'react'
import styles from "./UploadImage.module.css"
import { UploadPart4 } from './UploadImage4';

export const UploadPart3 = (props) => {
  const [open3,setOpen3] = useState(false)
  const [img,setImg] = useState("https://i.ibb.co/QFhdByz/Instagram-logo-2016-svg.png")
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

      const handleChange1=()=>{
        setImg("https://www.androidapksbox.com/wp-content/uploads/2018/07/instagram-lite.jpg")
      }
const handleChange2=()=>{
  setImg("https://images.hindustantimes.com/tech/img/2021/04/17/1600x900/image_-_2021-01-30T131056.370_1611992460978_1611992467840_1618649284491.jpg")
}
const handleChange3=()=>{
  setImg("https://igram.io/static/img/instagram-image.jpg")
}
const handleChange4=()=>{
  setImg("https://freepngimg.com/download/instagram/118546-logo-instagram-free-hd-image.png")
}
const handleChange5=()=>{
  setImg("https://sssinstagram.com/images/download-online.png")
}
const handleChange6=()=>{
  setImg("https://www.kindpng.com/picc/m/276-2764257_instagram-icon-instagram-logo-small-size-hd-png.png")
}
const handleChange7=()=>{
  setImg("https://freepngimg.com/download/logo/69813-instagram-logo-computer-royalty-free-icons-free-download-png-hq.png")
}
const handleChange8=()=>{
  setImg("https://sugarbeeapple.com/wp-content/uploads/2021/08/5ecec78673e4440004f09e77.png")
}
const handleChange9=()=>{
  setImg("https://i.ibb.co/QFhdByz/Instagram-logo-2016-svg.png")
}


  return (
    <div>
      <Dialog className={styles.diag} onClose={handleClose2} open={open}>    
        <div>
            <div className={styles.funct_nav} >
            <button></button>
            <button onClick={()=>handleClose2() }><span style={{color:"#0095f6",fontWeight:"700"}} >Next</span></button>
            </div>
            <hr />


            <div className={styles.container_p3} >
                <div>
                {
                  <img className={styles.imageView_p3} src={img} alt="img" />
                }
                </div>
                <div>
                  {/* <div className={styles.fragments} >
                    <p>Filter</p>
                    <p>Adjust</p>
                  </div> */}
                  <hr />
                  <div className={styles.filters} >
                    <button onClick={()=>handleChange1()} ><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                    <button onClick={()=>handleChange2()} ><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                    <button onClick={()=>handleChange3()} ><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                    <button onClick={()=>handleChange4()} ><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                    <button onClick={()=>handleChange5()} ><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                    <button onClick={()=>handleChange6()} ><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                    <button onClick={()=>handleChange7()} ><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                    <button onClick={()=>handleChange8()} ><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                    <button onClick={()=>handleChange9()} ><img src="https://i.pinimg.com/originals/ac/5e/ca/ac5ecafafb65e944dbfd46858bb1e34a.jpg" alt="" /></button>
                  </div>
                </div>
            </div>
        </div>
        </Dialog>
    <UploadPart4 open={open3} onClose={handleClose3} />
    </div>
  )
}
