import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";


const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."/>
          <SearchIcon/>
        </div>
        <div className="items">
          <div className="item">
          <LanguageIcon className="icon"/>
          English
          </div>
          <div className="item">
          <BedtimeOutlinedIcon className="icon" onClick={()=> dispatch({type:"TOGGLE"})}/>
          
          </div>
          <div className="item">
          <FullscreenExitOutlinedIcon className="icon"/>
          
          </div>
          <div className="item">
          <NotificationsNoneOutlinedIcon className="icon"/>
          <div className="counter">1</div>
          </div>
          <div className="item">
          <ChatBubbleOutlineOutlinedIcon className="icon"/>
          <div className="counter">2</div>
          </div>
          <div className="item">
          <TocOutlinedIcon className="icon"/>
          
          </div>
          <div className="item">
          
          <img src="https://cdn.pixabay.com/photo/2013/05/11/08/28/sunset-110305_960_720.jpg" alt="" 
            className= "avatar"
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
