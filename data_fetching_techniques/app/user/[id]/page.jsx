import { getUserDetail } from "@/utils/features";
import React, { Suspense } from "react";
import Post from "../post";

export const generateMetadata = async ({params}) => {
    const user = await getUserDetail(params?.id);
    return {
        title: `${user?.name}'s Profile`
    }
}
const page = async ({ params }) => {
  const user = await getUserDetail(params?.id);
  return (
    <>
      <div>
        <h2>{user?.name}</h2>
        <h3>{user?.email}</h3>
      </div>
      <Suspense fallback={<p>loading ...</p>}>
        <Post id={params.id} />
      </Suspense>
    </>
  );
};

export default page;
