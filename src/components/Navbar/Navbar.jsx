import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>

      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

/*let c1 = 'item';
let c2 = 'active';

let classes = c1 + " " + c2;
let classesNew = '${s.item} ${s.active}';

let classes = {
   'nav': 'Navbar_nav__J6b4i ',
   'item': 'Navbar_item__1qPqD'
}*/
