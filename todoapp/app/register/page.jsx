"use client";
import { Context } from "@/components/Clients";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";

const Page = () => {
  const { user, setUser } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const data = await res.json();
      if (!data.success) return toast.error(data.message);
      setUser(data.user);
      toast.success(data.message);
    } catch (error) {
      return toast.error(data.message);
    }
  };
  if(user._id) return redirect("/");
  return (
    <div className="login">
      <section>
        <form onSubmit={registerHandler}>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
          />

          <button type="submit">Sign Up</button>
          <p>OR</p>
          <Link href={"/register"}>Log In</Link>
        </form>
      </section>
    </div>
  );
};
export const metadata = {
  title: "Register",
  description:
    "This is the register page of todo app made for next level nextjs series",
};

export default Page;
