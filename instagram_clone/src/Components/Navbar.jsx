import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
// import Home from '@mui/icons-material/Home';
// import { Message, SlowMotionVideo } from '@material-ui/icons';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {ReactComponent as Massenger} from "../../src/Svgfile/messenger.svg"
import { useDispatch, useSelector } from 'react-redux';
import { logout_user } from "../Components/../Redux/Auth/auth.actions"
import { Link } from "react-router-dom"
import { UploadImage } from './UploadImage/UploadImage';
import {ReactComponent as Home} from "../../src/Svgfile/Home.svg"
import {ReactComponent as Add} from "../../src/Svgfile/Add.svg"
import {ReactComponent as Explore} from "../../src/Svgfile/Explore.svg"
import {ReactComponent as Heart} from "../../src/Svgfile/Heart.svg"
import {ReactComponent as Message} from "../../src/Svgfile/Message.svg"
import {ReactComponent as Profile} from "../../src/Svgfile/Profile.svg"
import {ReactComponent as Saved} from "../../src/Svgfile/Saved.svg"
import {ReactComponent as Switch} from "../../src/Svgfile/Switch.svg"
import {ReactComponent as Setting} from "../../src/Svgfile/Setting.svg"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import styles from "./Navbar.module.css"
import { UserDataContext } from '../Context/UserDataContext';
import { height } from '@mui/system';


const Search = styled('div')(() => ({
  position: 'relative',
  color:'black',
  border:"1px solid #EFE4E2",
  backgroundColor: "white",
  '&:hover': {
    backgroundColor:"#ECECEC",
  },
  borderRadius:"10px"
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState("")
  const { userImg, getDataLoggedUser  } = React.useContext(UserDataContext)

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const  isAuth  = useSelector((state) => state.auth.isUserLoggedIn)
  

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      className={styles.dropDown}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div className={styles.dropDown_content}>
      <MenuItem
      className={styles.displayDropdown}
       onClick={() => {
        navigate("/profile")
        handleMenuClose()
      }}><Profile/> <span>Profile</span></MenuItem>
      <MenuItem className={styles.displayDropdown} onClick={handleMenuClose}><BookmarkBorderIcon/><span>Saved</span></MenuItem>
      <MenuItem className={styles.displayDropdown} onClick={handleMenuClose}><Setting/><span>Setting</span></MenuItem>
      <MenuItem className={styles.displayDropdown} onClick={handleMenuClose}><Switch/><span>Switch Account</span></MenuItem>
      <hr/>
      <MenuItem className={styles.displayDropdown} onClick={() => dispatch(logout_user()) }>Logout</MenuItem>
      </div>
    </Menu>
  );

  
  
  const handleSearch = ()=>{
    navigate(`/${user}`)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <Box className={styles.navbar_container}  sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:"white"}} >
        <Toolbar className={styles.navbar}>
          <Typography >
            <Link to={"/home"} > <img className={styles.logo} src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" /> </Link>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 1 }} />
          <Search sx={{ display: { xs: 'none', sm: 'none' ,md:'flex' , lg:'flex' } }} style={{width:"30%"}}>
            <Button onClick={()=>handleSearch()}><SearchIcon /></Button>
            <StyledInputBase
              style={{marginLeft:"-50px"}}
              onChange={(e)=>setUser(e.currentTarget.value)}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            /> 
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box  sx={{ display: { xs: 'flex', md: 'flex' } }} >
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Home/>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Message/>
            </IconButton>
            <IconButton onClick={handleClickOpen} size="large" aria-label="show 4 new mails" color="inherit">
              <Add/>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Link to="/explore" ><Explore/></Link>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
             <Heart/>
            </IconButton>
            
            <IconButton
              size="large"
              onClick={handleProfileMenuOpen}
            >
              {/* <Profile/> */}
              <img src={userImg} alt="userimage" style={{width:"35px", height:"35px",borderRadius:"50%"}}/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <UploadImage open={open} onClose={handleClose} />
    </Box>
  );
}