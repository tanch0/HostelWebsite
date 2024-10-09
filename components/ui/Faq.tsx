"use client";
import React, { useState } from "react";
import { faqs } from "@/const/faq";

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 pt-10">
      <div className="mx-auto max-w-6xl">
        <div className="p-2 bg-gray-100 rounded">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-4 text-sm">
              <div className="text-3xl">
                Frequently asked <span className="font-medium">Questions</span>
              </div>
              <div className="my-2">Wondering how our service works?</div>
              <div className="mb-2">
                Confused about how we can improve your business?
              </div>
              <div className="text-xs text-gray-600">
                Dive into our FAQ for more details
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="p-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="mb-2">
                    {/* Question Section */}
                    <div
                      className="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white"
                      onClick={() => toggleAnswer(index)}
                    >
                      <div className="flex-auto">{faq.question}</div>
                      <div className="px-2 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`w-5 h-5 transition-transform ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>

                    {/* Answer Section */}
                    {openIndex === index && (
                      <div className="p-2 text-justify text-left text-gray-800 mb-5 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
