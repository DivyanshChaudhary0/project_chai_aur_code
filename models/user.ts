
import mongoose, {model, models, Schema} from "mongoose";
import bcrypt from "bcryptjs";

interface IUser{
    name: string;
    email: string;
    password: string;
    _id: mongoose.Types.ObjectId;
    createdAt: Date,
    updatedAt: Date
}

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true})

userSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
})


const userModel = models.User || model<IUser>("User", userSchema);

export default userModel