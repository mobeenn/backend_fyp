import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    edition: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
}, 
{ timestamps: true }
);

const BookReserved = mongoose.model("BookReserved",userSchema);
export default BookReserved;