import { asyncError, errorHandler } from "@/middlewares/error";
import { Task } from "@/models/task";
import { checkAuth, connectDB } from "@/utils/features";

const handler = asyncError(async (req, res) => {
  await connectDB();
  const user = await checkAuth(req);

  if (!user) return errorHandler(res, 400, "Login first");
  const taskId = req.query.id;

  const task = await Task.findById(taskId);
  if (!task) return errorHandler(res, 404, "Task not found");

  if (req.method === "PUT") {
    task.isCompleted = !task.isCompleted;
    await task.save();
    res.status(200).json({
      success: true,
      message: "Task updated successfully",
    });
  } else if (req.method === "DELETE") {
    await task.deleteOne();
    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } else return errorHandler(res, 400, "Requested method not available");
});
export default handler;
