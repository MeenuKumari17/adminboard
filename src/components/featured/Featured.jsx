import React from 'react';
import "./featured.scss";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';




const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Current Download</h1>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="title">Downloads</p>
            
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Today</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize="small"/>
                        <div className="resultAmount">678</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize="small"/>
                        <div className="resultAmount">985</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize="small"/>
                        <div className="resultAmount">2,568</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured;
