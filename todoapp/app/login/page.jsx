"use client";
import { Context } from "@/components/Clients";
import Link from "next/link";
import React, { useContext, useState } from "react";
import {redirect} from "next/navigation";
import {toast} from "react-hot-toast";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {user, setUser} = useContext(Context);
 
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      if(!data.success) return toast.error(data.message);
      
      setUser(data.user);
      toast.success(data.message);
      
      console.log(data);
    } catch (error) {return toast.error(data.message);}
    
  };
  if(user._id) return redirect("/");
  return (
    <div className="login">
      <section>
        <form onSubmit={loginHandler}>
          <input
            onChange={e => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email"
          />
          <input
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
          />

          <button type="submit">Login</button>
          <p>OR</p>
          <Link href={"/register"}>Register</Link>
        </form>
      </section>
    </div>
  );
};
export const metadata = {
  title: "Login",
  description:
    "This is the login page of  todo app made for next level nextjs series",
};

export default Page;
