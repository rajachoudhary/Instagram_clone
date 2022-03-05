import React, { useContext, useEffect } from 'react'
import Styles from "./loginSignUp.module.css"
import { UserDataContext } from '../../Context/UserDataContext'
import { Link } from "react-router-dom"


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
        <Link className={Styles.userCardLink} to={"/profile"} >
          <h5>{userName}</h5>
          <p>{profileName}</p>
          </Link>
        </div>
        <div>
            <button>Switch</button>
        </div>
    </div>
    
  )
}

export default UserCard