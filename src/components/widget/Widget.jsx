import React from 'react';
import "./widget.scss";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import OfflinePinIcon from '@material-ui/icons/OfflinePin';




const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "user":
       data = {
        icon: <AccountBoxIcon className='user'/>,
        title: "Total Active Users",
        counter: "18,765",
        
        text: "+2.6%",
        
      }; 
      break; 
    default:
      break;
  }
  switch (type) {
    case "install":
      data = {
        icon: <SystemUpdateAltIcon className='install'/>,
        title: "Total installed",
        counter: "4,876",
        
        text: "+0.2%",
        
      };
      break;
    default:
      break;
  }
  switch (type) {
    case "download":
      data = {
        icon: <OfflinePinIcon className='download'/>,
        title: "Total downloads",
        counter: "678",
        text: "-0.1%",
        
      };
      break;
    default:
      break;
  }
 

  return (
    <div className='widget'>
      <div className="left">
        {data.icon}
        <span className="title">{data.title}</span>
        <span className="counter">{data.counter}</span>
      </div>
      <hr className='hr'/>
      <div className="right">
        <div className="percentage">
          <p className='text'> {data.text} </p> <p className='sentence'> {data.sentence} </p>
        </div>
      </div>
    </div>
  )
}

export default Widget;
