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
import {SlowMotionVideo } from '@material-ui/icons';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import { logout_user } from "../Components/../Redux/Auth/auth.actions"
import { Link } from "react-router-dom"
// import { UploadImage } from './UploadImage/UploadImage';
import {ReactComponent as Home} from "../../src/Svgfile/Home.svg"
import {ReactComponent as Add} from "../../src/Svgfile/Add.svg"
import {ReactComponent as Explore} from "../../src/Svgfile/Explore.svg"
import {ReactComponent as Heart} from "../../src/Svgfile/Heart.svg"
import {ReactComponent as Message} from "../../src/Svgfile/Message.svg"
import {ReactComponent as Profile} from "../../src/Svgfile/Profile.svg"
import {ReactComponent as Saved} from "../../src/Svgfile/Saved.svg"
import {ReactComponent as Switch} from "../../src/Svgfile/Switch.svg"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import styles from "./Navbar.module.css"
import { style } from '@mui/system';
import { UploadImage } from './UploadImage/UploadImage';


const Search = styled('div')(() => ({
  position: 'relative',
  color:'black',
  border:"1px solid #EFE4E2",
  backgroundColor: "white",
  '&:hover': {
    backgroundColor:"#EFE4E2",
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
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()


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

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={styles.dropdown}
    >


      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>

      <MenuItem onClick={() => {
        navigate("/profile")
        handleMenuClose()
      }}>Profile</MenuItem>

      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      style={{padding:"10px",marginTop:"40px"}}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Home/>
        </IconButton>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <AddBoxOutlinedIcon/>
        </IconButton>
        <p>Post</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <SlowMotionVideo/>
        </IconButton>
        <p>Videos</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Message/>
        </IconButton>
        <p>Message</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>

      <div className={styles.dropDown_content}>
          <MenuItem className={styles.content}  onClick={handleMenuClose}><Profile/> <span>Profile</span></MenuItem>
          <MenuItem className={styles.content} onClick={handleMenuClose}><Saved/><span>Saved</span></MenuItem>
          <MenuItem className={styles.content} onClick={handleMenuClose}><BookmarkBorderIcon/><span>Setting</span></MenuItem>
          <MenuItem className={styles.content} onClick={handleMenuClose}><Switch/><span>Switch Account</span></MenuItem>
          <hr />
          <MenuItem className={styles.content} onClick={() => dispatch(logout_user()) }>Logout</MenuItem>
      </div>
      

    </Menu>
  );
  
  const handleSearch = ()=>{
    navigate(`/${user}`)
  }
  const handleClickOpen = ()=>{
    
  }

  // React.useEffect(()=>{

  // })
  return (


    <Box className={styles.navbar_container}   sx={{ flexGrow: 1 }}>
      <AppBar style={{background:"white"}} position="static">
        <Toolbar style={{width:"75%",margin:"auto"}}>
          <Typography >
            <Link to={"/home"} > <img className={styles.logo} src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" /> </Link>

          </Typography>
          <Search sx={{ display: { xs: 'none', sm: "none",md:"flex",lg:"flex" } }} style={{width:"30%",marginLeft:"150px"}}>
            {/* <Button  onClick={()=>handleSearch()}><SearchIcon /></Button> */}
            <Button style={{marginRight:"-40px"}} >
              <SearchIcon onClick={()=>handleSearch()} />
            </Button>
            <StyledInputBase
              style={{marginLeft:"0px"}}
              onChange={(e)=>setUser(e.currentTarget.value)}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            /> 
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box  sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <IconButton size="large"  color="inherit">
              <Home/>
            </IconButton>
            <IconButton size="large"  color="inherit">
              <Message/>
            </IconButton>

            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <AddBoxOutlinedIcon/>

              </IconButton>

          

            <IconButton onClick={handleClickOpen} size="large"  color="inherit">
              <Add/>
              
            </IconButton>
            <IconButton size="large"  style={{marginTop:"5px"}} color="inherit">
              <Link to="./explore" ><Explore/></Link>
            </IconButton>
            <IconButton size="large"  color="inherit">
              <Heart/>
            </IconButton>
            
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              className={styles.account}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <UploadImage/>
    </Box>

  );
}