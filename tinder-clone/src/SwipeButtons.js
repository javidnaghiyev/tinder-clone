import React from 'react'
import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BoltIcon from '@mui/icons-material/Bolt';
import './css/SwipeButtons.css'


function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        <IconButton>
            <ReplayIcon></ReplayIcon>
        </IconButton>
        <IconButton>
            <CloseIcon></CloseIcon>
        </IconButton>
        <IconButton>
            <StarRateIcon></StarRateIcon>
        </IconButton>
        <IconButton>
            <FavoriteIcon></FavoriteIcon>
        </IconButton>
        <IconButton>
            <BoltIcon></BoltIcon>
        </IconButton>
    </div>
  )
}

export default SwipeButtons