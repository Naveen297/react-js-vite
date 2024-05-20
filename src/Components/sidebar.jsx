import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
function Sidebar() {
  return (
    <div className='w-1/5 mx-2 border border-[#ff6e46] rounded-xl  h-screen'>
      {/* Your sidebar content goes here */}
      <div className='flex justify-center mt-10 border rounded-2xl border-[#ff6e46] m-3 p-3 hover:bg-[#ff6e46]'>
        <IoHomeOutline size={22} className='text-[#633f36] mr-2'/>
        <p className='text-[#633f36] font-georama '>Home</p>
      </div>
      <div className='flex justify-center mt-5 border rounded-2xl border-[#ff6e46] m-3 p-3 hover:bg-[#ff6e46]'>
        <CiSettings size={22} className='text-[#633f36] mr-2'/>
        <p className='text-[#633f36] font-georama '>Settings</p>
      </div>
    </div>
  );
}

export default Sidebar;