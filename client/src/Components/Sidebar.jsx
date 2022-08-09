import React from "react";
import {
  BiBell,
  BiBookmarkAlt,
  BiDotsHorizontal,
  BiDotsVerticalRounded,
  BiHash,
  BiHome,
  BiListMinus,
  BiListOl,
  BiListUl,
  BiMenu,
  BiMessage,
  BiUser,
} from "react-icons/bi";
function Sidebar() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex flex-col text-2xl pt-4 ">
        <div className="px-4 rounded my-2">
          <span className="flex items-center">
            <img
              style={{ width: 35 }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/934px-Twitter-logo.svg.png"
              alt="Twitter"
            />
          </span>
        </div>
        <div className="flex items-center py-3 px-4 rounded-full my-2 hover:bg-slate-200 ">
          <BiHome />
          <span className="flex pl-3">Home</span>
        </div>
        <div className="flex items-center py-3 px-4 rounded-full my-2 hover:bg-slate-200 ">
          <BiHash />
          <span className="flex pl-3">Explore</span>
        </div>
        <div className="flex items-center py-3 px-4 rounded-full my-2 hover:bg-slate-200 ">
          <BiBell />
          <span className="flex pl-3">Notification</span>
        </div>
        <div className="flex items-center py-3 px-4 rounded-full my-2 hover:bg-slate-200 ">
          <BiMessage />
          <span className="flex pl-3">Message</span>
        </div>
        <div className="flex items-center py-3 px-4 rounded-full my-2 hover:bg-slate-200 ">
          <BiBookmarkAlt />
          <span className="flex pl-3">Bookmarks</span>
        </div>
        <div className="flex items-center py-3 px-4 rounded-full my-2 hover:bg-slate-200 ">
          <BiMenu />
          <span className="flex pl-3">Lists</span>
        </div>
        <div className="flex items-center py-3 px-4 rounded-full my-2 hover:bg-slate-200 ">
          <BiUser />
          <span className="flex pl-3">Profile</span>
        </div>
        <div className="flex items-center py-3 px-4 rounded-full my-2 hover:bg-slate-200 ">
          <BiDotsHorizontal />
          <span className="flex pl-3">More</span>
        </div>
        <div className="flex justify-center px-4 rounded-full py-3 my-2 text bg-blue-500 ">
          <span className=" text-white font-bold text-xl">Tweet</span>
        </div>
      </div>

      <div className="px-4 flex justify-start   ">
        <div className="py-8 w-full flex items-center ">
          <img
            style={{ width: 50, borderRadius: 100, marginInline: 10 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRio3TkUh6cLjGngN-p2LGoJZR0dGHWEpuabg&usqp=CAU"
            alt=""
          />
          <div className="flex items-center">
            <div className="flex flex-col">
              <span className="font-bold ">Dexter</span>
              <span className="font-thin ">@dexter</span>
            </div>
            <BiDotsVerticalRounded className="mx-4 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
