import React from "react";

function Tweets({ feed }) {
  return <div className="flex w-full m-1">{feed.content}</div>;
}

export default Tweets;
