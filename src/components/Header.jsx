import React from 'react'
import "./styles/Header.css";

function Header() {

    return (
      <>
<div
  className="p-6 h-screen flex-wrap bg-body">
  <h1 className="mb-5 h-400px  text-customOrange font-semibold">HELLO CURIO</h1>
  <p className='h-400px text-8xl text-balance flex-wrap text-white'> Uncover global charm: Greet the world's quirks!</p>
  <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
  <p className="mb-4 text-5xl text-balance flex-wrap text-white">
    To delve into captivating country trivia and fascinating facts, while mastering the art of greeting in diverse local languages. 
  </p>
</div>
      </>
    )
  }

  export default Header;