import FacultyResearch from "../models/facultyResearch.model.js";

export const addResearchPaper = async (req, res) => {
   const { icon, title, author, publicationYear, pdfUrl } = req.body;

   if (!icon || !title || !author || !publicationYear || !pdfUrl) {
      return res.status(400).json({
         success: false,
         message: "All fields are required",
      });
   }

   try {
      const newResearchPaper = new FacultyResearch({
         icon,
         title,
         author,
         publicationYear,
         pdfUrl,
      });

      await newResearchPaper.save();
      res.json({
         success: true,
         message: "Research paper added successfully",
         researchPaper: newResearchPaper,
      });
   } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
         success: false,
         message: "Server error",
      });
   }
};

export const getResearchPapers = async (req, res) => {
   try {
      const researchPapers = await FacultyResearch.find();
      res.json({
         success: true,
         researchPapers,
      });
   } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
         success: false,
         message: "Server error",
      });
   }
};

export const deleteResearchPaper = async (req, res) => {
   const { id } = req.params;
   try {
      const deletedPaper = await FacultyResearch.findByIdAndDelete(id);
      if (!deletedPaper) {
         return res.status(404).json({
            success: false,
            message: "Research paper not found",
         });
      }
      res.json({
         success: true,
         message: "Research paper deleted successfully",
      });
   } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
         success: false,
         message: "Server error",
      });
   }
};
