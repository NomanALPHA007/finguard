// D:/Lets Do It/fin-guard/finguard/components/quiz.tsx
import { FC, useState } from "react";
import Link from "next/link";

const Quiz: FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const questions = [
    {
      scenario:
        "You have $5,000 in savings. Which investment option is the most secure?",
      options: ["Stocks", "Bonds", "Real Estate", "High-Yield Savings Account"],
      correctAnswer: "High-Yield Savings Account",
    },
    {
      scenario:
        "You want to start a small business. Which of the following is a legal structure?",
      options: [
        "Sole Proprietorship",
        "Personal Loan",
        "Investment Fund",
        "Cryptocurrency",
      ],
      correctAnswer: "Sole Proprietorship",
    },
    {
      scenario:
        "You receive a letter saying you're being sued for unpaid debt. What is your first legal step?",
      options: [
        "Ignore the letter",
        "Consult a lawyer",
        "Pay the debt immediately",
        "Declare bankruptcy",
      ],
      correctAnswer: "Consult a lawyer",
    },
    // Add more questions as needed
  ];

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-6">
      <header className="text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Scenario-Based Quiz
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Test your knowledge on finance and legal topics through real-world
          scenarios!
        </p>
      </header>

      {/* Quiz Content */}
      {!isQuizFinished ? (
        <section className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <p className="text-lg text-gray-800">
              {questions[currentQuestion].scenario}
            </p>
          </div>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full text-left bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700"
              >
                {option}
              </button>
            ))}
          </div>
        </section>
      ) : (
        <section className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Quiz Finished!
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            You scored {score} out of {questions.length}
          </p>
          <p className="text-gray-600 mb-6">
            Thank you for taking the quiz! Test your knowledge again to improve
            your score.
          </p>
          <Link href="/learn">
            <button className="text-blue-500 hover:text-blue-700">
              Back to Learning
            </button>
          </Link>
        </section>
      )}
    </div>
  );
};

export default Quiz;
