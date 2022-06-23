import React, {useState} from 'react';
import "./Footer.css";
import {Avatar, IconButton} from '@material-ui/core';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { listItemSecondaryActionClasses } from '@mui/material';
export default function Footer() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div className = "footer">
      <div className = 'topavatar'>
        <Avatar/>
        <h4>Randomuser</h4>
      </div>
      <img src = "https://scontent.fixc1-3.fna.fbcdn.net/v/t39.30808-6/283852902_563495788466196_1038850469842099698_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=eg0yO4ZIjzQAX_Lgn1E&_nc_oc=AQkRnwWcW7rXq02k8nnAX3HF0ox19V3nD5ChvhSxxNBJUN0C3VsvRhJdULn39l1CdcOtYCxoazcnm-lrtJgbxvBP&_nc_ht=scontent.fixc1-3.fna&oh=00_AT_wual38_xJ3Ke6eUdf7t2YjFt-B93xBPGvjFSy6awR7g&oe=62B90A37" alt = "a random photo"></img>
      <div className = "image_below">
        <div className ='thumbu' onClick = {() => setCount(count+1)}><ThumbUpIcon fontSize = "large"/></div> 
        <p>{count}</p>
          <div className ='dil'><FavoriteIcon fontSize = "large" onClick = {()=>setCount2(count2+1)} /></div>
        <p>{count2}</p>  
          <div className = 'reac'><AddReactionIcon fontSize = "large"/></div>
      </div>
    </div>
  );
}
