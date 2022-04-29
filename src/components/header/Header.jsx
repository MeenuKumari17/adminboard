import React from 'react';
import "./header.scss";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';




const Header = () => {
  return (
    <div className='header'>
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder='Search here' />
          </div>
          <div className="items">
            
            <div className="item"><PeopleIcon className='icon'/></div>
            <div className="item"><NotificationsIcon className='icon'/>
            <div className="counter">2</div>
            </div>
            <div className="item"><img src="https://images.pexels.com/photos/9879466/pexels-photo-9879466.jpeg?cs=srgb&dl=pexels-beytlik-9879466.jpg&fm=jpg" alt="" className='avatar'/> </div>
            


          </div>
        </div>
    </div>
  )
}

export default Header;