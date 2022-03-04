import React, { useState } from "react";
import { useEffect } from "react";
import style from "../../CSS/landingPage.module.css";
import { ReactComponent as Like } from "../../Svgfile/like.svg";
import { ReactComponent as ThreeDots } from "../../Svgfile/threedots.svg";
import { ReactComponent as Comment } from "../../Svgfile/comment.svg";
import { ReactComponent as Share } from "../../Svgfile/share.svg";
import { ReactComponent as Save } from "../../Svgfile/save.svg";
import { ReactComponent as Smile } from "../../Svgfile/smile.svg";
import Navbar from "./../Navbar"
import HomeSignUp from "../UserLogin/HomeSignUp";
import { useSelector } from "react-redux";


export const Home = () => {
  const [state, setState] = useState([]);
const [user,setUser] = useState({})
const [like,setLike] = useState("")

const  isAuth  = useSelector((state) => state.auth.isUserLoggedIn)

  const getData = () => {
    fetch("https://json-server-skb-assignment.herokuapp.com/userDetails")
      .then((res) => res.json())
      .then((res) => {
        setState(res);
      })
      .catch((err) => {
        console.log("err");
      });
  };

const handleLikeButton = (id) =>{
    fetch(`https://json-server-skb-assignment.herokuapp.com/userDetails/${id}`)
    // , {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify()
    // })
     .then(res=>res.json())
     .then(res =>{
         
         setUser(res)
     }) 
     
    //  setLike(user.post[0].likes+1)
    //  setUser(user.post[0].likes + 1)
     

    //  console.log(user.post[0].likes)  
    //  console.log(like)
     
    postLike(id)

}

const postLike = (id)=>{
    fetch(`https://json-server-skb-assignment.herokuapp.com/userDetails/${id}`
    , {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user.post[0].likes+1)
    })
    
    //  .then(res=>res.json())
    //  .then(res =>{
         
    //      setUser(res)
    //  }) 
     
}
// console.log(user)
  useEffect(() => {
    getData();
    // handleLikeButton()
  }, []);

  return !isAuth ? <HomeSignUp/> : (
      <>
    <Navbar/>  
    <div className={style.container} >
        <div className={style.landingPagePost}>
            {state.map((item) => {
            
                return (
                    <div key={item.id} className={style.postProfilePicture}>
                        <div>
                            <div>
                                <div className={style.profileImage}>
                                    <img src={item.profile_url} alt="profile_logo" />
                                </div>
                                <div className={style.userName}>{item.username}</div>
                            </div>
                            <div className={style.svgIcon}>
                                <ThreeDots />
                            </div>
                        </div>
                        <div className={style.userPost}>
                            <img src={item.post[0].img} alt="post" />
                        </div>
                        <div className={style.postSvgIcon}>
                            <div>
                                <Like onClick={()=>{
                                    handleLikeButton(item.id)
                                    postLike(item.id)
                                }}/>
                                <Comment />
                                <Share />
                            </div>
                            <div>
                                <Save />
                            </div>
                        </div>
                        <h4 className={style.likes}>{item.post[0].likes} likes</h4>
                        <div className={style.username1}>{item.username} </div>
                        <div className={style.commentSection}>
                            <div>
                                <Smile />
                                <input type="text" placeholder="Add a comment" />
                            </div>
                            <div>
                                <div>post</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
        <div className={style.container1}>
            
            <div  className={style.suggestions}>
                <div>Suggestions for you</div>
                <div>See All</div>
            </div>
            {
                state.map((item)=>{
                    return(
                        <div className={style.rightContent}>
                            <div>
                                <div className={style.profileImage}>
                                    <img src={item.profile_url} alt="profile_logo" />
                                </div>
                                <div className={style.username2}>{item.username} </div>
                            </div>
                            <div>Follow</div>
                        </div>
                    )
                })
            }
            <div className={style.container1Footer}>{"About.Help.Press.API.Jobs.Privacy.Terms.Locations.Top AccountsHashtags.LanguageEnglish"}
            <div className={style.container1Footer}>© 2022 INSTAGRAM FROM META</div>
          </div>
        </div>
            
    </div>
    </>
  );
};
