import React from 'react';

function Header() {
  return (
    <div className="p-6 h-screen flex-wrap bg-body">
      <h1 className="mb-5 text-customOrange">HELLO CURIO</h1>
      <div className="mb-5 text-7xl text-white subtitle">Uncover global charm: Greet the world's quirks!</div>

      {/* Container for left content */}
      <div className="w-1/2 pr-2">
        <p className="mb-2 text-white">
          Delve into captivating country trivia and fascinating facts, while mastering the art of greeting in diverse local languages.
        </p>
      </div>

      {/* Container for right content */}
      <div className="w-1/2 pl-2">
        <div className="h-0.5 bg-neutral-100 dark:bg-white/10 m-auto"></div>
      </div>
    </div>
  );
}

export default Header;
