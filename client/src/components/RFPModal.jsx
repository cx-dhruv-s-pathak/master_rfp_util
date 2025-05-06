import React, { useState, useMemo } from 'react';
import './rfpModal.css';

const ITEMS_PER_PAGE = 10;

const RfpModal = ({ visible, onClose, title, content }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!visible) return null;

  const parsedData = useMemo(() => {
    try {
      if (!content || typeof content !== "string") return null;
      return JSON.parse(content);
    } catch (err) {
      console.error("Failed to parse JSON:", err);
      return null;
    }
  }, [content]);

  // SAFELY group data
  const groupedData = useMemo(() => {
    if (!parsedData?.success || !Array.isArray(parsedData.questions)) return {};
    const grouped = {};
    parsedData.questions.forEach((q) => {
      const questionText = q?.["Requirement/Question"];
      if (!questionText) return;
      const section = q?.["Sub-Section"] || "Uncategorized";
      if (!grouped[section]) grouped[section] = [];
      grouped[section].push(q);
    });
    return grouped;
  }, [parsedData]);

  // SAFELY flatten questions
  const allQuestions = useMemo(() => {
    if (!groupedData || typeof groupedData !== "object") return [];
    return Object.entries(groupedData).flatMap(([section, questions]) =>
      questions.map((q) => ({ ...q, section }))
    );
  }, [groupedData]);

  const totalPages = Math.ceil(allQuestions.length / ITEMS_PER_PAGE);
  const paginatedQuestions = allQuestions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="rfp-modal-backdrop">
      <div className="rfp-modal">
        <h2>{title}</h2>

        {!parsedData ? (
          <div>
            <p style={{ color: "red" }}>Invalid or missing JSON content.</p>
            <textarea value={content} readOnly rows={10} style={{ width: "100%" }} />
          </div>
        ) : (
          <>
            <table className="rfp-table">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Sub-Section</th>
                  <th>Requirement / Question</th>
                </tr>
              </thead>
              <tbody>
                {paginatedQuestions.map((q, idx) => (
                  <tr key={idx}>
                    <td>{q?.["No."] || "-"}</td>
                    <td>{q?.section || "-"}</td>
                    <td>{q?.["Requirement/Question"] || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination">
              <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} disabled={currentPage === 1}>
                Prev
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>
                Next
              </button>
            </div>
          </>
        )}

        <div className="modal-buttons">
          <button onClick={() => navigator.clipboard.writeText(content)}>Copy</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default RfpModal;
