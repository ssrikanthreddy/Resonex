import { useState } from 'react';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'What is ResonexAI?',
      answer:
        'ResonexAI is an innovative initiative aimed at improving mental health and well-being on social media platforms. It provides accurate methods to autonomously detect and flag depression and suicide risk, allowing social media platforms to better support their users mental health.',
    },
    {
      id: 2,
      question: 'How does ResonexAI detect depression and suicide risk?',
      answer:
        'ResonexAI employs advanced algorithms that analyze data points from the app, user, and device. By examining social media posts and user behaviors, it can accurately flag individuals at risk.',
    },
    {
      id: 3,
      question: 'What about insurance concerns and data security?',
      answer:
        'Data is stored in an encrypted and hashed format. Learning models work effectively with discrete data, ensuring user information remains secure. Even in the event of a data breach, the data remains indecipherable.',
    },
    {
      id: 4,
      question: 'How does ResonexAI collaborate with social media platforms?',
      answer:
        'ResonexAI provides social media platforms with detection scripts that they can integrate into their systems. This allows them to identify and support users at risk of depression and suicide.',
    },
  ];

  const toggleAnswer = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-heading">FAQ&apos;s</h2>
      <ul className="faq-list">
        {questions.map((q) => (
          <li key={q.id}>
            <button
              onClick={() => toggleAnswer(q.id)}
              className={q.id === activeQuestion ? 'active' : ''}
            >
              {q.question}
            </button>
            {q.id === activeQuestion && <p className="answer">{q.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
