import EBook from "../models/ebook.model.js";

export const addEBook = async (req, res) => {
   const { title, authors, category, pdfUrl } = req.body;

   if (!title || !authors || !category || !pdfUrl) {
      return res.status(400).json({
         success: false,
         message: "All fields are required",
      });
   }

   try {
      const newEBook = new EBook({ title, authors, category, pdfUrl });
      await newEBook.save();
      res.json({ success: true, message: "E-Book added successfully" });
   } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ success: false, message: "Server error" });
   }
};

export const deleteEBook = async (req, res) => {
   const { id } = req.params;
   try {
      await EBook.findByIdAndDelete(id);
      res.json({ success: true, message: "E-Book deleted successfully" });
   } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ success: false, message: "Server error" });
   }
};

export const getAllEBooks = async (req, res) => {
   try {
      const ebooks = await EBook.find();
      res.json({ success: true, ebooks });
   } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ success: false, message: "Server error" });
   }
};
