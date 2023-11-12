import { useState } from "react";

export default function FAQ({ content }) {
  const [showAnswers, setShowAnswers] = useState({});

  const toggleAnswer = (id) => {
    setShowAnswers((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div>
      {content.map((item) => (
        <div key={item.sys.id} className="my-5 sm:my-10">
          <div
            className=" flex items-center text-gray-900 text-sm sm:text-xl font-semibold font-epilogue hover:text-primary"
            onClick={() => toggleAnswer(item.sys.id)}
          >
            {showAnswers[item.sys.id] ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="#F35162"
                class="w-6 h-6 mr-2 sm:mx-5 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="#F35162"
                className="w-6 h-6 mr-2 sm:mx-5 cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
            {item.fields.question}
          </div>
          {showAnswers[item.sys.id] && (
            <div className="text-gray font-kumbh my-5 ml-8 text-sm sm:text-base sm:mx-16">
              {item.fields.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
