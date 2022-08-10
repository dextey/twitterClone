import React from "react";
import { useState } from "react";
import axios from "axios";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://127.0.0.1:8000/api/users/login";
  const signIn = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          window.location.href = "/";
        }
      })
      .catch((err) => {
        // console.log(err.response.data);
        console.log(err.response.data);
      });
  };
  return (
    <div className="flex justify-center h-screen items-center ">
      <div>
        <div className="my-4">
          <img
            style={{ width: 50 }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/934px-Twitter-logo.svg.png"
            alt="Twitter"
          />
        </div>
        <h1 className="font-bold text-3xl py-3">What's happening now</h1>
        <h3 className="font-bold text-2xl py-3 ">Join twitter today.</h3>

        <div className="flex p-4 m-2 rounded-full bg-slate-100">
          <input
            className="bg-transparent focus:outline-none"
            type="mail"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex p-4 m-2 rounded-full bg-slate-100">
          <input
            className="bg-transparent focus:outline-none"
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div
          className="p-4 px-5 m-3 bg-blue-400 text-white rounded-full text-center"
          onClick={(e) => {
            signIn(e);
          }}
        >
          sign in
        </div>
      </div>
    </div>
  );
}
export default SignIn;
