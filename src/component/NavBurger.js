import React, {useState} from "react";
import "../css/NavBurger.css"; 

function Sidenav() {
  const [sidenavWidth, setSidenavWidth] = useState(0);

  const openNav = () => {
    setSidenavWidth(250);
  }

  const closeNav = () => {
    setSidenavWidth(0);
  }

  return (
    <div>
      <div id="mySidenav" className="sidenav" style={{ width: sidenavWidth + 'px' }}>
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <a href="#">About</a>
        <div style={{ marginTop: '26px',marginBottom: '7rem'}}>
        <p>At Lezada, we put a strong emphasis on simplicity, quality and usefulness of fashion products over other factors. Our fashion items never get outdated. They are not short-lived as normal fashion clothes.</p>

        </div>
      </div>
      <span style={{ fontSize: '30px', cursor: 'pointer', marginLeft: '48px' }} onClick={openNav}>&#9776;</span>
    </div>
  );
}

export default Sidenav;
