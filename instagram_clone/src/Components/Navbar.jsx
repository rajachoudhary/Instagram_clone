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
import Home from '@mui/icons-material/Home';
import { Message, SlowMotionVideo } from '@material-ui/icons';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {ReactComponent as Massenger} from "../../src/Svgfile/messenger.svg"
import { useDispatch, useSelector } from 'react-redux';
import { logout_user } from "../Components/../Redux/Auth/auth.actions"
import { Link } from "react-router-dom"
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
  const [open, setOpen] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState("")
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


  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={() => dispatch(logout_user()) }>Logout</MenuItem>
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
    <Container maxWidth="lg" >
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:"white",color:"black"}} position="static">
        <Toolbar>
          <Typography >
            <Link to={"/home"} > <img height={30} width={100} src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" /> </Link>
          </Typography>
          <Search sx={{ display: { xs: 'none', sm: 'block' } }} style={{width:"30%",marginLeft:"150px"}}>
          
            <Button onClick={()=>handleSearch()}><SearchIcon /></Button>
            <StyledInputBase
              onChange={(e)=>setUser(e.currentTarget.value)}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            /> 
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box  sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Home/>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Message/>
            </IconButton>
            <IconButton onClick={handleClickOpen} size="large" aria-label="show 4 new mails" color="inherit">
              <AddBoxOutlinedIcon/>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <SlowMotionVideo/>
            </IconButton>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <FavoriteBorderIcon/>
            </IconButton>
            
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <UploadImage open={open} onClose={handleClose} />
    </Box>
    </Container>

  );
}