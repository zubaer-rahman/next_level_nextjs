import { getUserPosts } from "@/utils/features";
import React from "react";

const post = async ({ id }) => {
  const posts = await getUserPosts(id);
  return (
    <div>
      {posts?.map((i) => (
        <p key={i.id}>{i.title}</p>
      ))}
    </div>
  );
};

export default post;
