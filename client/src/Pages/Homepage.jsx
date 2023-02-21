import React from "react";
import Content from "../Components/Content";
import Sidebar from "../Components/Sidebar";
import SidebarRight from "../Components/SidebarRight";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function Homepage() {
  const [token, setToken] = useState("");
  const [posts, setPosts] = useState([]);
  const url = "http://127.0.0.1:8000/api/posts/";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log(token);
      // window.location.href = "/signIn";
      axios
        .get(url, { headers: { Authorization: "Bearer " + token.toString() } })
        .then((res) => {
          console.log(res.data);
          setPosts(res.data);
        });
    } else {
      // window.location.href = "/signIn";
    }
  }, []);

  return (
    <div className="flex  mx-10">
      <div className="flex w-3/12">
        <Sidebar />
      </div>
      <div className="flex flex-grow px-3">
        <Content posts={posts} />
      </div>
      <div className="flex w-3/12">
        <SidebarRight />
      </div>
    </div>
  );
}

export default Homepage;
