import Form from "./addTodoForm";
import { Suspense } from "react";
import { Todos } from "@/components/Servers";

const Page = () => {
  return (
    <div className="container">
      <Form />
      <Suspense fallback={<div>Loading...</div>}>
        <Todos />
      </Suspense>
    </div>
  );
};

export default Page;
