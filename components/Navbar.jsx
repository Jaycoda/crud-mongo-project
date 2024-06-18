import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-600 flex justify-between items-center px-8 py-3">
      <Link className="font-bold text-white" href={"/"}>
        Jay Coding
      </Link>
      <Link className="bg-white p-2 rounded-md" href={"/addtopic"}>
        Add Topic
      </Link>
    </nav>
  );
};

export default Navbar;
