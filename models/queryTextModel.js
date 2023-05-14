import mongoose from "mongoose";

const queryTextSchema = new mongoose.Schema({
    name: {
        type: String,
        requred: true,
        trime: true
    },
    email: {
        type: String,
        requred: true,
        unique:true
    },
    phone: {
        type: String,
        requred: true
    },
    queryText: {
        type: String,
        required: true
    },
}, {timestamps: true})

export default mongoose.model("QueryText", queryTextSchema);