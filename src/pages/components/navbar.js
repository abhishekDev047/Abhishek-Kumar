import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row flex-wrap items-center w-full navbar bg-slate-50 mt-0">
      <div>
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
      <div className="p-1 ml-4  hover:bg-red-400 rounded-xl cursor-pointer">
       <Link href={'/components/projects'}> Projects</Link>  
      </div> 
      <div className="p-1 mx-3 hover:bg-red-400 rounded-xl cursor-pointer">
      <Link href={'/components/about'}> About Me</Link>  
      </div>
    </div>
  );
};

export default Navbar;
