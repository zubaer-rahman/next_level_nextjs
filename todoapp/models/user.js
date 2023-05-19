import mongoose  from "mongoose";
const schema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true, 
    },
    password: {
        type: String,
        required: true,
        select: false,
        minLength: [6, "password too short"]
    }
});
mongoose.models = {};
export const User = mongoose.model("User", schema);

 