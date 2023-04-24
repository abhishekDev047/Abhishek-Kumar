import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row flex-wrap items-center w-full navbar fixed top-0 left-0 z-20 sm:h-16 h-12 bg-slate-50 mt-0">
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
  );
};

export default Navbar;
