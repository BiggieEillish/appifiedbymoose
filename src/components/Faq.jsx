import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: 'Faq first question goes here?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { question: 'About frequent question goes here?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { question: 'Why more question goes here?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { question: 'What question goes here?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { question: 'Faq second question goes here?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { question: 'Third faq question goes here?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { question: 'Why more question goes here?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { question: 'Seventh frequent question here?', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="questions_page" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h5 className="text-lg font-semibold">FAQ</h5>
          <h3 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h3>
          <div className="my-8"></div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full sm:w-1/2 px-4">
            <div className="space-y-4">
              {faqs.slice(0, 4).map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-md transition duration-300 hover:bg-gray-200 cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-xl font-medium text-gray-800 hover:text-blue-500">
                    {faq.question}
                  </h3>
                  <div
                    className={`mt-2 text-gray-600 overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-1/2 px-4 mt-8 sm:mt-0">
            <div className="space-y-4">
              {faqs.slice(4).map((faq, index) => (
                <div
                  key={index + 4}
                  className="bg-gray-100 p-4 rounded-lg shadow-md transition duration-300 hover:bg-gray-200 cursor-pointer"
                  onClick={() => toggleFaq(index + 4)}
                >
                  <h3 className="text-xl font-medium text-gray-800 hover:text-blue-500">
                    {faq.question}
                  </h3>
                  <div
                    className={`mt-2 text-gray-600 overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === index + 4 ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
