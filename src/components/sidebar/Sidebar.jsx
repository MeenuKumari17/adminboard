import "./sidebar.scss";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PersonIcon from '@material-ui/icons/Person';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import NoteIcon from '@material-ui/icons/Note';
import EmailIcon from '@material-ui/icons/Email';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top"><DashboardOutlinedIcon color="primary"/><span className="dashboard">Minimal UI</span></div>
      <div className="center">
        <ul>
          <li className="list">
            GENERAL
          </li>
          <li>
            <AppsIcon className="icons"/>
            <span>App</span>
          </li>
          
          <li>
          <LocalMallIcon className="icons"/>
            <span>E-Commerce</span>
          </li>
          <li>
            <EqualizerIcon className="icons"/>
            <span>Analytics</span>
          </li>
          <li>
            <AccountBalanceIcon className="icons"/>
            <span>Banking</span>
          </li>
          <li>
            <EventAvailableIcon className="icons"/>
            <span>Booking</span>
          </li>
          <li className="list">
            MANAGEMENT
          </li>
          <li>
            <PersonIcon className="icons"/>
            <span>User</span>
          </li>
          <li>
            <ShoppingCartIcon className="icons"/>
            <span>E-Commerce</span>
          </li>
          <li>
            <NoteIcon className="icons"/>
            <span>Bolg</span>
          </li>
          <li className="list">
            APP
          </li>
          <li>
            <EmailIcon className="icons"/>
            <span>Mail</span>
            <span className="num">2</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Sidebar;