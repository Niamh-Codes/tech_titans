import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home <i class="fa-solid fa-house"></i>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="Profile"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home <i class="fa-regular fa-id-card"></i>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="Resume"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home <i class="fa-solid fa-file"></i>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home <i class="fa-solid fa-at"></i>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact/learn"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home <i class="fa-solid fa-square-phone-flip"></i>
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
