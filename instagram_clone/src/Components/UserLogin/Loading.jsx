import React from 'react'
import Styles from "./loginSignUp.module.css"

function Loading() {
  return (
    <div className={Styles.loadingIcon} >
        <img height={"13px"} src="https://i.ibb.co/gFWXHV3/cupertino-activity-indicator.gif" alt="" />
    </div>
  )
}

export default Loading