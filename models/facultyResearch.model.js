import mongoose from "mongoose";

const facultyResearchSchema = new mongoose.Schema(
   {
      icon: {
         type: String, // URL or path to the icon
         required: true,
      },
      title: {
         type: String,
         required: true,
      },
      author: {
         type: String,
         required: true,
      },
      publicationYear: {
         type: Number,
         required: true,
      },
      pdfUrl: {
         type: String, // URL to the PDF file
         required: true,
      },
   },
   { timestamps: true }
);

const FacultyResearch = mongoose.model("FacultyResearch", facultyResearchSchema);
export default FacultyResearch;
