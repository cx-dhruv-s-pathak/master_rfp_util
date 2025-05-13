import { fetchRfpQuestions } from '../services/excel_service.js';

export const getRfpBySection = async (req, res) => {
  const { category } = req.query;
  if (!category) {
    return res.status(400).json({ success: false, message: "Category query param is required." })
  }

  try {
    const questions = await fetchRfpQuestions(category);
    res.setHeader("Strict-Transport-Security", "max-age=28800; includeSubDomains")
       .json({ success: true, category, questions });
  } catch (error) {
    res.status(500).json({ success: false, message: "An internal server error occurred" });
  }
};

export default getRfpBySection