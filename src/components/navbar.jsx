import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'lightblue', padding: '5px 20px', height: '50px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
          <li style={{ marginRight: '10px' }}><a href="#">Home</a></li>
          <li style={{ marginRight: '10px' }}><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
