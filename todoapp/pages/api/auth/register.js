import { asyncError, errorHandler } from "@/middlewares/error";
import { User } from "@/models/user";
import { connectDB, cookieSetter, generateToken } from "@/utils/features";
import bcrypt from "bcrypt";

const handler = asyncError(async (req, res) => {
  if (req.method !== "POST")
    return errorHandler(res, 400, "Post method allowed only");
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return errorHandler(res, 400, "Please enter all the fields");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  await connectDB();
  let user = await User.findOne({ email });
  console.log("user",user);
  if (user) {
    return errorHandler(res, 400, "User already registered with this email");
  }
  user = await User.create({
    name,
    email,
    password: hashPassword,
  });
  const token = generateToken(user._id);
  cookieSetter(res, token, true);
  res.status(201).json({
    success: true,
    message: "Registered successfully",
    user,
  });
});
export default handler;
