import { asyncError, errorHandler } from "@/middlewares/error";
import { User } from "@/models/user";
import { connectDB, cookieSetter, generateToken } from "@/utils/features";
import bcrypt from "bcrypt";

const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
    return errorHandler(res, 400, "Post method allowed only");
  const { email, password } = req.body;
  if (!email || !password) {
    return errorHandler(res, 400, "please enter proper credential");
  }
  await connectDB();
  let user = await User.findOne({ email }).select("+password");
  if (!user) {
    return  errorHandler(res, 400, "Invalid email or password");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch) {
    return  errorHandler(res, 400, "Invalid email or password");
  }
  const token = generateToken(user._id);
  cookieSetter(res, token, true);
  res.status(200).json({
    success: true,
    message: `Welcome back ${user.name}`,
    user,
  });
});
export default handler;
