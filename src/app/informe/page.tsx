"use client";

import React from "react";
import Accordion from "../components/Accordion";
import data from "../data/accordion-data.json";

export default function page() {
  return (
    <div className="max-w-[800px] mx-auto mt-12">
      {data.map((el) => (
        <Accordion title={el.question} answer={el.answer} />
      ))}
    </div>
  );
}
