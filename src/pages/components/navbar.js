import React from "react";
import Image from "next/image";
import Link from "next/link";
import {  MdDarkMode,MdLightMode} from "react-icons/md";
import { useSelector,useDispatch } from "react-redux";
import { darkMode,lightMode } from "@/features/slices/ModeSlice";

const Navbar = () => {
  const mode =useSelector(state=>state.Mode.value);
  const dispatch = useDispatch();
  return (
    <div className={mode}>
    <div className=" dark:bg-zinc-950 dark:text-white flex flex-row flex-wrap items-center navbar w-full fixed top-0 left-0 z-20 sm:h-16 h-12 bg-slate-50 mt-0">
    <div className="sm:w-4/5 w-11/12">
    <div className="flex flex-row flex-wrap items-center navbar ">
      <div className="pl-5">
        <Link href={"/"}>
          <Image
            className="rounded-full m-1 "
            src={"/images/icon.png"}
            alt="Abhishek Kumar"
            width={40}
            height={40}
          />
        </Link>
      </div> 
      <div className="p-1 ml-4  rounded-xl cursor-pointer">
       <Link href={'/components/projects'} as={'/Projects'} className="hover:bg-red-400 p-1 rounded-lg font-bold text-base sm:text-xl"> Projects</Link>  
      </div> 
      <div className="p-1 mx-3 rounded-xl cursor-pointer">
      <Link href={'/components/about'} as={'/About Me'} className="hover:bg-red-400 p-1 rounded-lg font-bold  text-base sm:text-xl"> About Me</Link>  
      </div>
      </div>
      </div>
      <div className="sm:w-1/5 w-1/12 flex flex-row items-center justify-end">
      <div className=" mr-3">
        <button className="text-lg sm:text-xl md:text-2xl" onClick={()=>{mode==='light'?dispatch(darkMode()): dispatch(lightMode())}}>
        {mode==='light'? (<MdDarkMode/>):(<MdLightMode/>)}
        </button>
      </div>
      </div>
      </div>
    </div>
  );
};
export default Navbar;
