import React, { useEffect, useState } from "react";
import Tweets from "./Tweets";
import axios from "axios";

function Feeds() {
  const [feeds, setFeeds] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:4000/tweets")
      .then((res) => {
        setFeeds(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col mx-2 p-4 bg-blue-300 w-full">
      {Object.keys(feeds).map((feed) => {
        console.log(feed);
        return <Tweets feed={feeds[feed]} />;
      })}
    </div>
  );
}

export default Feeds;
