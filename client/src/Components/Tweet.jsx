import React from "react";
import { BiHeart, BiMessageRounded, BiSync } from "react-icons/bi";

function Tweet() {
  return (
    <div className="flex flex-col border-[1px]">
      <div className="flex m-3">
        <div>
          <img
            style={{ width: 50, borderRadius: 100, marginInline: 10 }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRio3TkUh6cLjGngN-p2LGoJZR0dGHWEpuabg&usqp=CAU"
            alt=""
          />
        </div>
        <div className="flex p-2 flex-col w-full">
          <div className="flex">
            <span className="font-bold">Dexter</span>
            <span className="font-light px-2">@dexter</span>
          </div>

          <div className="content py-3">What a wonderfull morning</div>
          <div className="flex   w-full text-slate-400 text-2xl">
            <BiMessageRounded className="mr-3" />
            <BiSync className="mx-3" />
            <BiHeart className="mx-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
