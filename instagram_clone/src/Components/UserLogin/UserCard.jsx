import React, { useContext, useEffect } from 'react'
import Styles from "./loginSignUp.module.css"
import { UserDataContext } from '../../Context/UserDataContext'


function UserCard() {

    const { userName , profileName, userImg, getDataLoggedUser  } = useContext(UserDataContext)

    useEffect(() => {
        getDataLoggedUser()
    }, [])

  return (
    <div className={Styles.userCrd} > 
        <div>
          <img src={userImg} height={"60px"} width={"60px"} alt="" />
        </div>
        <div>
          <h5>{userName}</h5>
          <p>{profileName}</p>
        </div>
        <div>
            <button>Switch</button>
        </div>
    </div>
  )
}

export default UserCard