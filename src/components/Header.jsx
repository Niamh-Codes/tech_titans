import React from 'react';


function Header() {
  return (
    <div style={{ backgroundColor: '#1B1914', color: '#FFB53A' }} className="p-6 h-screen relative flex w-full flex-wrap">
      <h1 className="mb-5">HELLO CURIO</h1>
        <div className="mb-5 text-7xl  text-white relative flex w-full">Uncover global charm: Greet the world's quirks!</div>

        <hr className="border-t-0.5 border-neutral-100 dark:border-white/10 w-2/3 md:w-3/12 lg:w-2/12 mb-5 self-start" />



        
            <p className="mb-5 text-white relative flex w-full">
        Delve into captivating country trivia and fascinating facts, while mastering the art of greeting in diverse local languages.
            </p>
    </div>
  );
}

export default Header;
