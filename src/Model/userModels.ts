import { Document, Schema, model } from "mongoose";



export interface IUser extends Document {
    Fname: string,
    Lname: string,
    email: string,
    message: string
}

const userSchema = new Schema<IUser>({
    Fname: {
        type: String,
        trim: true,
        required: true
    },
    Lname: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    message: {
        type: String,
        trim: true,
        required: true
    }
})

export default model<IUser>("user", userSchema);