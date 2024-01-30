import React from 'react'
import c2c_logo2 from "../Asset/c2c_logo2.png";
// import Button from './Button';
const Nav = () => {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <a href="">
          <img src={c2c_logo2} alt="" />
        </a>
      </div>
      <div>
        <nav>
          <ul className="nav-button">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Agents</a>
            </li>
            <li>
              <a href="">About</a>{" "}
            </li>
            <li>
              <a href="">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        {/* <Button id={nav-btn1}className={nav-btn} label={Our Services} />
        <Button id={nav-btn2} className={nav-btn} label={Our Services}/> */}
      </div>
    </div>
  );
};
export default Nav;
