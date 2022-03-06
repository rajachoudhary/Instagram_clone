import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from '../Navbar';
import Styles from "../../CSS/settingpage.module.css"
import { UserDataContext } from '../../Context/UserDataContext';
import { useSelector } from 'react-redux';
import { Link, Navigate } from "react-router-dom"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const { userName , profileName , userImg, getDataLoggedUser, userEmail  } = useContext(UserDataContext)



  const  isAuth  = useSelector((state) => state.auth.isUserLoggedIn)


  useEffect(() => {
    getDataLoggedUser()
  },[])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return isAuth ? (
      <>
    <Navbar/>
    <div style={{ border : "0.2px solid rgb(189, 185, 185)", margin : "auto" , width : "80%",marginTop : "100px"}} >

    <Box 
      sx={{ flexGrow: 1, bgcolor: 'white', display: 'flex'}}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderColor: 'black' }}
        style={{ border : "0.2px solid rgb(189, 185, 185)", width : "260px" }}
      >
        <Tab style={{ paddingRight : "130px" , height : "55px", color : "black", fontSize : "15px", width : "260px" }} label="Edit Profile" {...a11yProps(0)} />
        <Tab style={{ paddingRight : "80px" , height : "55px", color : "black", fontSize : "15px" , width : "260px"  }} label="Change Password" {...a11yProps(1)} />
        <Tab style={{ paddingRight : "85px" , height : "55px", color : "black", fontSize : "15px" , width : "260px"  }} label="Apps and Website" {...a11yProps(2)} />
        <Tab style={{ paddingRight : "115px" , height : "55px", color : "black", fontSize : "15px" , width : "260px" }} label="Email and SMS" {...a11yProps(3)} />
        <Tab style={{ paddingRight : "72px" , height : "55px", color : "black", fontSize : "15px" , width : "260px" }} label="Push Notifications" {...a11yProps(4)} />
        <Tab style={{ paddingRight : "82px" , height : "55px", color : "black", fontSize : "15px", width : "260px"   }} label="Manage Contacts" {...a11yProps(5)} />
        <Tab style={{ paddingRight : "50px" , height : "55px", color : "black", fontSize : "15px" , width : "260px"  }} label="Privacy and Security" {...a11yProps(6)} />
        <Tab style={{ paddingRight : "115px" , height : "55px", color : "black", fontSize : "15px", width : "260px"   }} label="Login Activity" {...a11yProps(7)} />
        <Tab style={{ paddingRight : "35px" , height : "55px", color : "black", fontSize : "15px" , width : "260px"  }} label="Emails from Instagram" {...a11yProps(8)} />
        <Tab style={{ paddingRight : "200px" , height : "55px", color : "black", fontSize : "15px" , width : "260px"  }} label="Help" {...a11yProps(9)} />
        <Tab style={{ color : "rgb(24,155,248)", fontWeight : "Bold", marginTop : "30px" }} label="Switch to Professional Account" {...a11yProps(10)} />
        <Tab style={{ borderTop : "0.2px solid grey" , marginTop  : "40px", fontSize : "11.5px", padding : "60px 20px 60px 20px", textAlign : "left" }} label="Control settings for connected experiences across Instagram, the Facebook app and Messenger, including story and post sharing and logging in." {...a11yProps(11)} />


      </Tabs>
      <TabPanel value={value} index={0} className={Styles.underMain}  >
          <div>
             <div className={Styles.UserNameDiv} >
               <img src={userImg} alt="" height={"45px"} width={"45px"} />
               <div className={Styles.userANDchange} >
                 <p>{userName}</p>
                 <p>Change Profile Photo</p>
               </div>
             </div>
             <div className={Styles.nameInput} >
               <label>Name</label> <input type="text" value={profileName} />
             </div>
             <div className={Styles.helpInputLine} >
               <p>Help people discover your account by using the name you're known by: either your full name, nickname, or business name.</p>
               <p>You can only change your name twice within 14 days.</p>
             </div>
             <div className={Styles.usernameInputDiv} >
                <label>Username</label> <input type="text" value={userName}/>
             </div>
             <div className={Styles.userNameDownText} >
               <p>In most cases, you'll be able to change your username back to pwr_chetan for another 14 days. <b>Learn More</b></p>
             </div>
             <div className={Styles.websiteInput} >
               <label>Website</label> <input type="text" placeholder='Website' />
             </div>
             <div className={Styles.bioInput} >
               <label>Bio</label> <input type="text" placeholder='Bio' />
             </div>
             <div className={Styles.personalInfoText} >
               <h5>Personal Information</h5>
               <p>Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.</p>
             </div>
             <div className={Styles.emailInput} >
               <label>Email</label> <input type="text" value={userEmail} />
             </div>
             <div className={Styles.numberInput} >
               <label>Phone Number</label> <input type="text" placeholder='Phone Number' />
             </div>
             <div className={Styles.genderInput} >
               <label>Gender</label> <input type="text" value={"Male"} />
             </div>
             <div className={Styles.suggestion} >
               <label>Similar Account Suggestions</label> <input type="checkbox" checked/> <p>Include your account when recommending similar accounts people might want to follow.</p>
             </div>
             <div className={Styles.bothBtnSubandDis} >
               <button>Submit</button>
               <button>Temporarily disable my account</button>
             </div>
          </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
         
    </div>

    <div className={Styles.footerSignUpLink} >
                <Link className={Styles.footerPages} to={""}>Meta</Link>
                <Link className={Styles.footerPages}  to={""}>About</Link>
                <Link className={Styles.footerPages}  to={""}>Blog</Link>
                <Link className={Styles.footerPages}  to={""}>Jobs</Link>
                <Link className={Styles.footerPages}  to={""}>Help</Link>
                <Link className={Styles.footerPages}  to={""}>API</Link>
                <Link className={Styles.footerPages}  to={""}>Privacy</Link>
                <Link className={Styles.footerPages}  to={""}>Terms</Link>
                <Link className={Styles.footerPages}  to={""}>Top Accounts</Link>
                <Link className={Styles.footerPages}  to={""}>Hashtags</Link>
                <Link className={Styles.footerPages}  to={""}>Locations</Link>
                <Link className={Styles.footerPages}  to={""}>Instagram Lite</Link>
            </div>

            <div className={Styles.lastfooterForg} >
                <select className={Styles.languageList}>
                    <option value="">English</option>
                    <option value="">Afrikans</option>
                    <option value="">English (UK)</option>
                    <option value="">Suomi</option>
                    <option value="">Italiano</option>
                    <option value="">Norsk</option>
                    <option value="">Polski</option>
                    <option value="">Portugus</option>
                    <option value="">Hindi</option>
                    <option value="">Nederlands</option>
                </select>
                <img src="https://i.ibb.co/0YVKrqX/icons8-circled-c-50.png" height={"11px"} alt="credit" /> <p> 2022 Instagram from Meta</p>
            </div>
    
    </>
  ) : <Navigate to={"/"} />
}
