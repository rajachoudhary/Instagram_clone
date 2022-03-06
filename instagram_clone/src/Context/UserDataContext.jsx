import { createContext, useState } from "react";
import { getValue, updateValue } from "../utils/localStorage";

export const UserDataContext = createContext();

export const UserDataContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [profileName, setProfileName] = useState("");
  const [userImg, setUserImg] = useState("");
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userNumPosts, setUserNumPosts] = useState("");
  const [userFollower, setUserFollower] = useState("");
  const [userFollowing, setUserFollowing] = useState("");
  const [userPosts, setUserPosts] = useState("");
  const [userCaption, setUserCaption] = useState("")
  const [userEmail, setEmail] = useState("")

  const getDataLoggedUser = () => {
    const userValues = getValue("loggedUserId");
    setUserName(userValues[0]);
    setProfileName(userValues[1]);
    setUserImg(userValues[2]);
    setUserId(userValues[3]);
    setUserPassword(userValues[4]);
    setUserNumPosts(userValues[5]);
    setUserFollower(userValues[6]);
    setUserFollowing(userValues[7]);
    setUserPosts(userValues[8]);
    setUserCaption(userValues[9])
    setEmail(userValues[10])
  };

  const updateLoggedUser = (totalData, i) => {
    updateValue("loggedUserId", [
      totalData[i].username,
      totalData[i].name,
      totalData[i].profile_url,
      totalData[i].id,
      totalData[i].passowrd,
      totalData[i].no_of__post,
      totalData[i].no_of_followers,
      totalData[i].no_of_follwing,
      totalData[i].post,
      totalData[i].details,
      totalData[i].email
    ]);
  };

  return (
    <UserDataContext.Provider
      value={{
        updateLoggedUser,
        getDataLoggedUser,
        userName,
        profileName,
        userImg,
        userId,
        userPassword,
        userFollower,
        userNumPosts,
        userFollowing,
        userPosts,
        userCaption,
        userEmail
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
