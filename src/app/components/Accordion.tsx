
import React, { useState } from "react";

interface Accordion {
  title: string;
  answer: string;
}
const Accordion = ({ title, answer }: Accordion) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 text-black text-lg">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="font-semibold ">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-[#F2851D] shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden py-3">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
