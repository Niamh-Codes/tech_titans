import React from 'react';


function Header() {
  return (
    <div style={{ backgroundColor: '#1B1914', color: '#FFB53A' }} className="p-6 h-screen relative flex w-full flex-wrap">
      <h1 className="mb-5">HELLO CURIO</h1>
        <div className="mb-5 text-7xl  text-white relative flex w-full">Uncover global charm: Greet the world's quirks!</div>

        <div className="h-0.5 bg-neutral-100 dark:bg-white/10 mx-auto w-4/12 content-start relative flex w-full"></div>
        
            <p className="mb-5 text-white relative flex w-full">
        Delve into captivating country trivia and fascinating facts, while mastering the art of greeting in diverse local languages.
            </p>
    </div>
  );
}

export default Header;
