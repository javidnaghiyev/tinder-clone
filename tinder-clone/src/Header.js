import React from 'react'
import './css/Header.css'
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='personIcon'/>
        </IconButton>
        
        <img className='tinderLogo' src='https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg' alt=''>

        </img>

        <IconButton>
            <ChatIcon fontSize='large'/>
        </IconButton>
    </div>
  )
}

export default Header