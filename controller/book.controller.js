import BookReserved from "../models/book.model.js";

export const bookReserved = async (req,res)=>{
    try {
        const { title, edition, isbn, quantity } = req.body;
        
        const existingBook = await BookReserved.findOne({ isbn });
        if (existingBook) {
            return res.status(400).json({ message: 'Book with this ISBN already exists' });
        }

        const newBook = new BookReserved({ title, edition, isbn, quantity });
        await newBook.save();

        res.status(201).json({ message: 'Book added successfully', book: newBook });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

export const getBook = async (req,res)=>{
    
}