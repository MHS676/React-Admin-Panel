import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className="logo">hasanadmin</span>
    </div>
    <hr />
      <div className="center">
      <ul>
        <li>
              <DashboardIcon/>
            <span>Dashboard</span>
        </li>
        <li>
            <span>Users</span>
        </li>
        <li>
            <span>Products</span>
        </li>
        <li>
            <span>Orders</span>
        </li>
      </ul>
      </div>
      <div className="bottom">color option</div>
    </div>
  )
}

export default Sidebar