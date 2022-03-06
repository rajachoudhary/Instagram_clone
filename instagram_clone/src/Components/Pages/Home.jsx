import React, { useState } from "react";
import { useEffect } from "react";
import style from "../../CSS/landingPage.module.css";
import { ReactComponent as Like } from "../../Svgfile/like.svg";
import { ReactComponent as ThreeDots } from "../../Svgfile/threedots.svg";
import { ReactComponent as Comment } from "../../Svgfile/comment.svg";
import { ReactComponent as Share } from "../../Svgfile/share.svg";
import { ReactComponent as Save } from "../../Svgfile/save.svg";
import { ReactComponent as BlackSave } from "../../Svgfile/BlackSave.svg";
import { ReactComponent as Smile } from "../../Svgfile/smile.svg";
import { ReactComponent as RedHeart} from "../../Svgfile/redHeart.svg";
import Navbar from "./../Navbar";
import HomeSignUp from "../UserLogin/HomeSignUp";
import { useSelector } from "react-redux";
import UserCard from "../UserLogin/UserCard";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Home = () => {
  const [state, setState] = useState([]);
  const [sliderRef, setSliderRef] = useState(null);
  const [like, setLike] = useState(true);
  const [comment, setComment] = useState([]);
  const [userComment, setUserComment] = useState({})
  const [pastComment,setPastComment] = useState([])
  const [save,setsave] = useState(true)
  const [follow,setFollow] = useState(true)

  const isAuth = useSelector((state) => state.auth.isUserLoggedIn);

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
  const handleSave = (id)=>{
    save ? setsave(false) : setsave(true)
  }
  const handleLike = (id) => {
    like ? setLike(false) : setLike(true);
    
  };
  const handleFollow = (id)=>{
    follow ? setFollow(false) : setFollow(true)
    console.log(id)
  }
  const handleComment = (comment,id) => {

    fetch(`https://json-server-skb-assignment.herokuapp.com/userDetails/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setUserComment(res)
        setPastComment(res.comments)
       
      })
      .catch((err) => {
        console.log("err");
      });

    fetch(`https://json-server-skb-assignment.herokuapp.com/userDetails/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...userComment,comments:[...pastComment,comment]}),
    });
   setComment("")
   getData()
   console.log(pastComment)
};

  const sliderSettings = {
    // ...
    slidesToShow: 5,
    lazyLoad: true,
    slidesToScroll: 3,
    infinite: false,
    arrows: false,
    speed: 900, // ms
    autoplay: false,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1168,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      }
    ],
  };

  const settings = {
    // fade: true,
    speed: 50, // ms
    autoplay: false,
    initialSlide: 2,
    // lazyLoad: true,
    autoplaySpeed: 3000,
    slidesToShow: 7,
    slideToScroll: 5,
    infinite: false,
  };

  useEffect(() => {
    getData();
  }, [comment]);

  return !isAuth ? (
    <HomeSignUp />
  ) : (
    <>
      <Navbar />
      <div className={style.container}>
        <div className={style.landingPagePost}>
          <div className={style.sliderContainer}>
            <button
              onClick={sliderRef?.slickPrev}
              className={style.leftSliderbuttton}
            >
              <FiChevronLeft className={style.leftButton} />
            </button>
            <button
              onClick={sliderRef?.slickNext}
              className={style.rightSliderButtton}
            >
              <FiChevronRight />
            </button>
            <Slider ref={setSliderRef} {...sliderSettings} {...settings}>
              {state.map((item) => {
                return (
                  <div className={style.sliderProfileContainer} key={item.id}>
                    <div className={style.SliderProfileImage}>
                      <img src={item.profile_url} alt="profile_logo" />
                    </div>
                    <div className={style.sliderUserName}>{item.username}</div>
                  </div>
                );
              })}
            </Slider>
          </div>
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
                    <div onClick={() => handleLike(item.id)}> {like ?  <Like /> : <RedHeart/>}</div> 
                    <Comment />
                    <Share />
                  </div>
                  <div onClick={()=> handleSave(item.id)}>
                    <div>{save? <Save/> : <BlackSave/> }</div>
                  </div>
                </div>
                <h4 className={style.likes}>{item.post[0].likes} likes</h4>
                <div className={style.username1}>{item.username} <span style={{color:"blue",fontSize:"13px"}}>@{item.username}</span> </div>
                <div className={style.allComment}>View all comments</div>
                <div className={style.comments}>{item.comments}</div>
                <div className={style.commentSection}>
                
                  <div>
                    <Smile />
                    <input
                      type="text"
                      placeholder="Add a comment"
                      value={comment}
                      onChange={(e) => setComment(e.currentTarget.value)}
                    />
                  </div>
                  <div>
                    <div style={{cursor : "pointer"}} onClick={()=>handleComment(comment,item.id)}>Post</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={style.container1}>
          <div>
            {" "}
            <UserCard />{" "}
          </div>

          <div className={style.suggestions}>
            <div>Suggestions for you</div>
            <div>See All</div>
          </div>
          {state.map((item) => {
            return (
              <div className={style.rightContent} key={item.id}>
                <div>
                  <div className={style.profileImage}>
                    <img src={item.profile_url} alt="profile_logo" />
                  </div>
                  <div className={style.username2}>{item.username} </div>
                </div>
                <div className={style.followBtn123} >Follow</div>
              </div>
            );
          })}
          <div className={style.container1}>
            {
                state.map((item)=>{
                    return(
                        <div key={item.id} className={style.rightContent}>
                            <div>
                                <div className={style.profileImage}>
                                    <img src={item.profile_url} alt="profile_logo" />
                                </div>
                                <div className={style.username2}>{item.username} </div>
                            </div>
                            <div onClick = {()=>handleFollow(item.id)}>{follow ?"Follow" : "Unfollow"}</div>
                        </div>
                    )
                })

            }
            <div className={style.container1Footer}>
              © 2022 INSTAGRAM FROM META
            </div>
          </div>
        </div>
      </div>
    </>
  );
};