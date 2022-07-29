import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPalette, FaList, FaUserCircle, FaBell, FaUser } from 'react-icons/fa';
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from "react";
import Link from 'next/link';

const Sidebar = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const themeSymbols = theme === 'light' ? '🌙' : '🌞' 
    
    useEffect(() => setMounted(true), [])
    
    if (!mounted) return null
    return (
      <div>
        <div className="fixed top-0 left-0 z-10 flex flex-col w-16 h-screen text-white shadow-lg dark:bg-gray-900">

        <Link href="/">
          <a>
            <SideBarIcon icon={<FaFire size="28" />} text={"Home ⌂"} />
          </a>
        </Link>
        <Divider />
        <button onClick={()=> 
          document.getElementById("ButtonGroupUser").style.display = document.getElementById("ButtonGroupUser").style.display === 'none'?'block':'none'}>
          <SideBarIcon icon={<FaUserCircle size="32" />} text={'User Menus'}/>
        </button>
        <div className='ml-2' id='ButtonGroupUser' display='none'>
          <Link href="">
            <button className="relative inline-block" onClick={()=>
                                                document.getElementById('Nofitication').classList.toggle('hidden')}>
              <SideBarIcon icon={<FaBell size="20" />} text={'Notification'} />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">0</span>
            </button>
          </Link>
          <a>
            <SideBarIcon icon={<FaUser size="20" />} text={'User Page'} />
          </a>
        </div>
        <Divider />
        <button onClick={()=> 
          document.getElementById("ButtonGroup").style.display = document.getElementById("ButtonGroup").style.display === 'none'?'block':'none'}>
          <SideBarIcon icon={<BsPlus size="32" />} text={'More Menus'}/>
        </button>
        <div className='ml-2' id='ButtonGroup' display='none'>
          <Link href="/ProductsIndex">
            <a>
              <SideBarIcon icon={<FaList size="20" />} text={'Product List Menu'} />
            </a>
          </Link>
          <a>
            <SideBarIcon icon={<BsFillLightningFill size="20" />} />
          </a>
        </div>
        <Divider />
        <button id='themeSet' onClick={()=> setTheme(theme === 'light'?'dark':'light')}>
            <SideBarIcon icon={<FaPalette size="20" />} text={'Set Theme to '+ nextTheme+themeSymbols}/>
        </button>
        <SideBarIcon icon={<BsGearFill size="22" />} text={"Setting ⚙️"}/>
        </div>
        {/* End Sidebar */}
        {/* Notif Modal */}
        <div className="fixed mt-10 flex flex-col justify-center left-20 z-20" id="Nofitication">
              <div className="max-w-xs px-4 py-3 text-slate-800 dark:text-white bg-white dark:bg-gray-900 shadow-md roundbg-ed-lg ">
                  <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">New Notification</span>
                      <button type="button" className="p-2 bg-gray-200 rounded-full" onClick={()=>
                                                document.getElementById('Nofitication').classList.toggle('hidden')}>
                          <svg className="w-3 h-3 fill-current text-slate-800" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                      </button>
                  </div>
          {/* notif 1 */}
                  <div className="flex items-center px-1 py-1 mt-3 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                      <div className="flex items-end flex-shrink-0">
                          <img className="w-16 h-16 rounded-full" src="http://drive.google.com/uc?export=view&id=1zliUy5PaN7GwFF5v8K7ss6CuDDOmviGy"></img>
                      </div>
                      <div className="ml-3">
                          <span className="text-sm font-medium">John Doe</span>
                          <p className="text-sm">reacted to your comment: "Comment..."</p>
                          <span className="text-sm font-semibold text-blue">a few seconds ago</span>
                      </div>
                  </div>
          {/* notif 2 */}
                  <div className="flex items-center px-1 py-1 mt-3 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                      <div className="flex items-end flex-shrink-0">
                          <img className="w-16 h-16 rounded-full" src="http://drive.google.com/uc?export=view&id=1zliUy5PaN7GwFF5v8K7ss6CuDDOmviGy"></img>
                      </div>
                      <div className="ml-3">
                          <span className="text-sm font-medium">John Doe</span>
                          <p className="text-sm">reacted to your comment: "Comment..."</p>
                          <span className="text-sm font-semibold text-blue">a few seconds ago</span>
                      </div>
                  </div>
          {/* notif 3 */}
                  <div className="flex items-center px-1 py-1 mt-3 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                      <div className="flex items-end flex-shrink-0">
                          <img className="w-16 h-16 rounded-full" src="http://drive.google.com/uc?export=view&id=1zliUy5PaN7GwFF5v8K7ss6CuDDOmviGy"></img>
                      </div>
                      <div className="ml-3">
                          <span className="text-sm font-medium">John Doe</span>
                          <p className="text-sm">reacted to your comment: "Comment..."</p>
                          <span className="text-sm font-semibold text-blue">a few seconds ago</span>
                      </div>
                  </div>
          {/* notif 4 */}
                  <div className="flex items-center px-1 py-1 mt-3 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
                      <div className="flex items-end flex-shrink-0">
                          <img className="w-16 h-16 rounded-full" src="http://drive.google.com/uc?export=view&id=1zliUy5PaN7GwFF5v8K7ss6CuDDOmviGy"></img>
                      </div>
                      <div className="ml-3">
                          <span className="text-sm font-medium">John Doe</span>
                          <p className="text-sm">reacted to your comment: "Comment..."</p>
                          <span className="text-sm font-semibold text-blue">a few seconds ago</span>
                      </div>
                  </div>
                  <button className="px-4 py-2 cente font-bold tracking-wider uppercase bg-gray-300 rounded-full shadow-lg dark:text-white dark:bg-slate-700 hover:border-transparent hover:text-slate-100 hover:bg-gray-800 dark:hover:text-blue-500 dark:hover:bg-slate-100">See More</button>
              </div>
              
        </div>
      </div>
    );
};
const SideBarIcon = ({ icon, text = 'tooltip 💡'}) => (
    <div className="sidebar-icon group">
      {icon}
      
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
    </div>
  );
  
const Divider = () => <hr className="sidebar-hr" />;

export default Sidebar;