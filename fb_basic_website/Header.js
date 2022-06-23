import React from 'react';
import "./Header.css";
///import "./Searchbar.js";
// import SearchIcon from '@material-ui/icons/Search';
import SearchIcon from '@mui/icons-material/Search';
import FlagIcon from '@mui/icons-material/Flag';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import {Avatar, IconButton} from '@material-ui/core';
import ForumIcon from '@mui/icons-material/Forum';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {
  return (
    <div className = "header">
            <div className = "header_left">
                <img src = "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                    alt = "hi">
                </img>
                <div className = "header_input">
                <SearchIcon />
                <input type = "text" />
                </div>
            </div>
      <div className = "header_center">
        <div className = "header_option">
            <HomeIcon fontSize = "large" />
        </div>
        <div className = "header_option">
            <FlagIcon fontSize = "large" />
        </div>
        <div className = "header_option">
            <SubscriptionsOutlinedIcon fontSize = "large" />
        </div>
        <div className = "header_option">
            <StorefrontOutlinedIcon fontSize = "large" />
        </div>
        <div className = "header_option">
            <SupervisedUserCircleIcon fontSize = "large" />
        </div>
    
      </div>
      <div className = "header_right">
      <div className = "header_info">
            <Avatar/>
            <h4>Hari</h4>
        </div>
        <IconButton>
            <AddIcon />
        </IconButton>
        <IconButton>
            <ForumIcon />
        </IconButton>
        <IconButton>
            <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
            <ExpandMoreIcon />
        </IconButton>
        </div> 
    </div>
  );
}

export default Header;
