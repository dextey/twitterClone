import React from "react";
import { BiStar } from "react-icons/bi";
import Tweet from "./Tweet";

function Content({ posts }) {
  return (
    <div className="flex flex-col border-[1px] w-full h-screen ">
      <Navbar />
      <TweetHandler />

      <div className="  max-h-screen overflow-y-auto no-scrollbar">
        {posts.map((post) => {
          return <Tweet post={post} />;
        })}
      </div>
    </div>
  );
}

export default Content;

const Navbar = () => {
  return (
    <nav className="text-2xl py-3 px-2  flex justify-between  font-bold">
      <div>Home</div>
      <div>
        <BiStar />
      </div>
    </nav>
  );
};

const TweetHandler = () => {
  return (
    <div className="flex items-center mx-3 p-2">
      <div className="flex flex-col items-start">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRio3TkUh6cLjGngN-p2LGoJZR0dGHWEpuabg&usqp=CAU"
          style={{ width: 60, borderRadius: 100 }}
          alt=""
        />
      </div>
      <div className="flex flex-col w-full pr-4 mx-2">
        <div className="px-3 m-2">
          <input
            className="bg-transparent w-full focus:outline-none px-4 placeholder-slate-500 py-3 text-[1.2rem] "
            type="text"
            placeholder="What's Happening? "
          />
        </div>
        <div className="flex justify-between">
          <div></div>
          <div className="font-bold px-8 py-3 bg-blue-400 text-white rounded-full">
            tweet
          </div>
        </div>
      </div>
    </div>
  );
};
