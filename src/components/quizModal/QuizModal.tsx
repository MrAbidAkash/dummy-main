import React, { useState, useEffect } from 'react';

const QuizModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Listen for a message from the iframe to close the modal
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data === 'quizCompleted') {
        closeModal();
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <>
      <div className="cs_hero_btn_wrap">
        <div className="cs_round_btn_wrap">
          <a
            onClick={openModal}
            className="cs_hero_btn cs_round_btn btn-item m-3 transition"
          ><span></span>
            Take a Quiz
          </a>
        </div>
      </div>

      {isModalOpen && (
        <div className="quiz-modal-overlay">
          <div className="quiz-modal">
            <button
              onClick={closeModal}
              className="quiz-modal-close"
            >
              ×
            </button>
            <iframe
              src="https://api.leadconnectorhq.com/widget/survey/1oVdNNnntGfeRatbS6Cn"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Quiz"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default QuizModal;