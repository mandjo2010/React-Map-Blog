import { BrowserRouter, Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
          <BrowserRouter> 
            <Link className="link" to="/">
              HOME
            </Link>
            </BrowserRouter> 
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
          <BrowserRouter> 
            <Link className="link" to="/write">
              WRITE
            </Link>
            </BrowserRouter> 
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
        <BrowserRouter> 
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
          </BrowserRouter> 
        ) : (
          <ul className="topList">
            <li className="topListItem">
            <BrowserRouter> 
              <Link className="link" to="/login">
                LOGIN
              </Link>
              </BrowserRouter> 
            </li>
            <li className="topListItem">
            <BrowserRouter> 
              <Link className="link" to="/register">
                REGISTER
              </Link>
              </BrowserRouter>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
