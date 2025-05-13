import XLSX from 'xlsx';
import path from 'path';
import fs from 'fs';

export const fetchRfpQuestions = (sectionName) => {
  const filePath = path.resolve('data', 'First_order_RFP.xlsx');
  if (!fs.existsSync(filePath)) throw new Error('Excel file not found');

  const workbook = XLSX.readFile(filePath, { type: 'file' });
  const sheet = workbook.Sheets[sectionName];

  if (!sheet) throw new Error(`Sheet "${sectionName}" not found in workbook`);

  const data = XLSX.utils.sheet_to_json(sheet);
  return data;
};

export default fetchRfpQuestions