import React from "react";
import { BiSearch } from "react-icons/bi";

function SidebarRight() {
  return (
    <div className="flex flex-col m-2 py-4">
      <Search />
      <News />
    </div>
  );
}

export default SidebarRight;

const Search = () => {
  return (
    <div className=" mx-3 flex items-center bg-slate-200  rounded-full">
      <BiSearch className="ml-3 text-2xl text-slate-400" />
      <input
        className="bg-transparent p-2 focus:outline-none m-2"
        type="text"
        placeholder="search"
      />
    </div>
  );
};

const News = () => {
  return (
    <div className="flex rounded-lg bg-slate-100 p-4 my-3">
      <div className="font-bold text-xl ">What's happening</div>
    </div>
  );
};
