import { fetchRfpQuestions } from '../services/excel_service.js';

export const getRfpBySection = async (req, res) => {
  //const { section } = req.params;
  const { category } = req.query;
  if (!category) {
    return res.status(400).json({ success: false, message: "Category query param is required." });
  }

  try {
    const questions = await fetchRfpQuestions(category);
    res.json({ success: true, category, questions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export default getRfpBySection