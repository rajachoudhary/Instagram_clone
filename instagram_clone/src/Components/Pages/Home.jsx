import React, { useState } from "react";
import { useEffect } from "react";
import style from "../../CSS/landingPage.module.css";
import { ReactComponent as Like } from "../../Svgfile/like.svg";
import { ReactComponent as ThreeDots } from "../../Svgfile/threedots.svg";
import { ReactComponent as Comment } from "../../Svgfile/comment.svg";
import { ReactComponent as Share } from "../../Svgfile/share.svg";
import { ReactComponent as Save } from "../../Svgfile/save.svg";
import { ReactComponent as Smile } from "../../Svgfile/smile.svg";
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
  const [like, setLike] = useState(false);
  const [comment, setComment] = useState([]);

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
  const handleLike = (id) => {
    like ? setLike(false) : setLike(true);
  };
  const payload = {
      comment
  }
  const handleComment = (comment) => {
    fetch("https://json-server-skb-assignment.herokuapp.com/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    console.log(comment);
};

  const sliderSettings = {
    // ...
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
        },
      },
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
  }, []);

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
                  <div className={style.sliderProfileContainer}>
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
                    <Like
                      onClick={() => handleLike(item.id)}
                      style={{
                        backgroundColor: like ? "red" : "white",
                      }}
                      className={style.like}
                    />
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
                    <input
                      type="text"
                      placeholder="Add a comment"
                      value={comment}
                      onChange={(e) => setComment(e.currentTarget.value)}
                    />
                  </div>
                  <div>
                    <div onClick={()=>handleComment(comment)}>Post</div>
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
              <div className={style.rightContent}>
                <div>
                  <div className={style.profileImage}>
                    <img src={item.profile_url} alt="profile_logo" />
                  </div>
                  <div className={style.username2}>{item.username} </div>
                </div>
                <div>Follow</div>
              </div>
            );
          })}
          <div className={style.container1Footer}>
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
                            <div>Follow</div>
                        </div>
                    )
                })

            }
            <div className={style.container1Footer}>
            "About.Help.Press.API.Jobs.Privacy.Terms.Locations.Top AccountsHashtags.LanguageEnglish" © 2022 INSTAGRAM FROM META
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
