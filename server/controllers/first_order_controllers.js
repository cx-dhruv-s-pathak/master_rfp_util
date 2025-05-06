import { fetchRfpQuestions } from '../services/excel_service.js';

export const getRfpBySection = async (req, res) => {
  const { section } = req.params;

  try {
    const questions = await fetchRfpQuestions(section);
    res.json({ success: true, section, questions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export default getRfpBySection