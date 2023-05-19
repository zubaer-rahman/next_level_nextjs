import { asyncError, errorHandler } from "@/middlewares/error";
import { Task } from "@/models/task";
import { checkAuth, connectDB } from "@/utils/features";
 
const handler = asyncError(async (req, res) => {
  if (req.method !== "GET")
    return errorHandler(res, 400, "GET method allowed only");
 
  await connectDB();
  const user = await checkAuth(req);
  if (!user) 
    return  errorHandler(res, 400, "Login first");
  const tasks = await Task.find({user: user._id});
  res.status(200).json({
    success: true,
    tasks
  });
});
export default handler;
