import { Document, Schema, model } from "mongoose";



export interface IPortfolio extends Document {
    name: string,
    about: string,
    email: string,
    intro: string,
    profile_pic:string,
    about_pic:string
}

const portfolio_Schema = new Schema<IPortfolio>({
    name: {
        type: String,
        trim: true,
        required: true
    },
    about: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    intro: {
        type: String,
        trim: true,
        required: true
    },
    profile_pic: {
        type: String,
        required: true
    },
    about_pic: {
        type: String,
        required: true
    }
})

export default model<IPortfolio>("portfolio_Data", portfolio_Schema);