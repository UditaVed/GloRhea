import React from 'react'
import {motion} from "framer-motion"
function Navbar({onLoad}) {
  
  return (
    <motion.div initial={{opacity:0  }} animate={{opacity:1,scale:1}} transition={{duration:1}}  className="navbar bg-[#e5c7c3cc] h-[10vh] py-4 fixed z-40">
  <div className="navbar-start">
    <div className="dropdown">
      <label className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
        <li><a href='#Home'>Home</a></li>
        <li><a href='#FAQ'>FAQ</a></li>
        <li ><a href='#Counsellor'>Counsellors</a></li>
        <li><a href='#Stories'>Stories</a></li>

      </ul>
    </div>
    <img src="GloRhea.svg" width={80} hight={45} alt="logo" onLoad={()=>{ console.log("trigger"); onLoad();}}/>
    <a className="btn btn-ghost normal-case text-[#D5596C] text-3xl">GloRhea</a>
  </div>
  <div className="navbar-center hidden lg:flex text-white ">
    <ul className="menu menu-horizontal gap-12 px-1">
    <li className='border-l px-2'><a className="active:bg-[#ba9b9b]" href='#Home'>Home</a></li>
    <li className='border-l px-2'><a className="active:bg-[#ba9b9b]" href='#FAQ'>FAQ</a></li>
    <li className='border-l px-2'><a className="active:bg-[#ba9b9b]" href='#Counsellor'>Counsellors</a> </li>
    <li className='border-l px-2'><a className="active:bg-[#ba9b9b]" href='#Stories'>Stories</a></li>
    </ul>
  </div>
  <div className="navbar-end hidden sm:flex  ">
    <a href="https://discord.gg/w5UaubDdk9" className="btn border-none bg-[#BA9B9B] hover:bg-[#875c5c] text-white ">Join Community</a>
   
  </div>
</motion.div>
  )
}

export default Navbar