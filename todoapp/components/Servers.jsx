import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { TodoBtn } from "./Clients";

export const TodoItem = ({ title, description, id, completed }) => {
  return (
    <div className="todo">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div>
        <TodoBtn id={id} completed={completed} />
      </div>
    </div>
  );
};
const fetchTodo = async (token) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/mytask`, {
      cache: "no-cache",
      headers: {
        cookie: `token=${token}`,
      },
    });
    console.log("res", res);
    const data = await res.json();
    if (!data.success) return [];
    return data.tasks;
  } catch (error) {
    return [];
  }
};

export const Todos = async () => {
  const token = cookies().get("token")?.value;
  console.log(token);
  if (!token) return redirect("/login");
  const tasks = await fetchTodo(token);
  return (
    <section className="todosContainer">
      {tasks?.map((task, i) => (
        <TodoItem
          title={task?.title}
          description={task?.description}
          id={task?._id}
          key={task?._id}
          completed={task?.isCompleted}
        />
      ))}
    </section>
  );
};
