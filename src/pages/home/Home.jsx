import React from 'react';
import "./home.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';





const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Header/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="install"/>
            <Widget type="download" />
            
          </div>
          
          
          <div className="charts">
            <Featured />
            <Chart/>
          </div>
        </div>
    </div>
  );
};

export default Home;