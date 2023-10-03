import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import {Link} from "react-router-dom"
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className="top">
      <Link to="/" style={{textDecoration: "none"}}>
        <span className="logo">ADMIN</span>
      </Link>
    </div>
    <hr />
      <div className="center">
      <ul>
      <p className="title">MAIN</p>
      
        <li>
        <span className="icon"><DashboardIcon/></span>
              
            <span>Dashboard</span>
        </li>
        <p className="title">LISTS</p>
        <Link to="/users" style={{textDecoration: "none"}}>
        <li>
        <span className="icon"><PersonOutlineOutlinedIcon/></span>
            
            <span>Users</span>
        </li>
        </Link>
         <Link to="/products" style={{textDecoration: "none"}}>
        <li>
        <span className="icon"><Inventory2OutlinedIcon/></span>
            
            <span>Products</span>
        </li>
        </Link>
        <p className="title">MAIN</p>
        <li>
        <span className="icon"><GradingOutlinedIcon/></span>
            
            <span>Orders</span>
        </li>
        
        <li>
        <span className="icon"><DeliveryDiningOutlinedIcon/></span>
            
            <span>Delivery</span>
        </li>
        <p className="title">USEFUL</p>
        <li>
        <span className="icon"><QueryStatsOutlinedIcon/></span>
            
            <span>Stats</span>
        </li>
        
        <li>
        <span className="icon"><NotificationsOutlinedIcon/></span>
            
            <span>Notification</span>
        </li>
        <p className="title">SERVICE</p>
        <li>
        <span className="icon"><MonitorHeartOutlinedIcon/></span>
            
            <span>System Health</span>
        </li>
        
        <li>
        <span className="icon"><PsychologyOutlinedIcon/></span>
            
            <span>Logs</span>
        </li>
        
        <li>
        <span className="icon"><SettingsOutlinedIcon/></span>
            
            <span>Settings</span>
        </li>
        <p className="title">USER</p>
        <li>
        <span className="icon"><FolderSharedOutlinedIcon/></span>
            
            <span>Profile</span>
        </li>
        
        <li>
        <span className="icon"><ExitToAppOutlinedIcon/></span>
            
            <span>Logout</span>
        </li>
        
      </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=> dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={()=> dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar