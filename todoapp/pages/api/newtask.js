import { checkAuth, connectDB } from "@/utils/features";
import { Task } from "@/models/task";
import { asyncError, errorHandler } from "@/middlewares/error";
const handler = asyncError(async (req, res) => {
  await connectDB();
  if (req.method !== "POST")
    return errorHandler(res, 400, "Post method allowed only");
  const { title, description } = req.body;
  if (!title, !description) return errorHandler(res, 400, "Enter all fields");

  const user = await checkAuth(req);
  if (!user) return errorHandler(res, 400, "Login first");
 
  await Task.create({
    title,
    description,
    user: user._id,
  });
  res.json({
    success: true,
    message: "task created successfully",
  });
});
export default handler;
