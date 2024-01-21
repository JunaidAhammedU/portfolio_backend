import mongoose from "mongoose";


export const dbConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://ahammedjabir23:efhmp7dKKOvLTVKD@cluster0.qxklbfg.mongodb.net/?retryWrites=true&w=majority');
        console.log("database conneted");
    } catch (error) {
        console.log("database connetion failed", error);
    }
}


