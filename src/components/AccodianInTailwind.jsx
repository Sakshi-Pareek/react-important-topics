import React, { useState } from "react";

const AccodianInTailwind = () => {
    const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const accordionData = [
    {
      title: "Accordion 1",
      content:
        "Content for Accordion 1 Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1Content for Accordion 1 ",
    },
    {
      title: "Accordion 2",
      content:
        "Content for Accordion 2 Content for Accordion 2 Content for Accordion 2 Content for Accordion 2 Content for Accordion 2 Content for Accordion 2 Content for Accordion 2 Content for Accordion 2 Content for Accordion 2 Content for Accordion 2 Content for Accordion 2Content for Accordion 2Content for Accordion 2Content for Accordion 2Content for Accordion 2 Content for Accordion 2Content for Accordion 2Content for Accordion 2Content for Accordion 2Content for Accordion 2Content for Accordion 2Content for Accordion 2Content for Accordion 2Content for Accordion 2Content for Accordion 2Content for Accordion 2Content for Accordion 2Content for Accordion 2Content for Accordion 2Content for Accordion 2Content for Accordion 2Content for Accordion 2Content for Accordion 2 Content for Accordion 2Content for Accordion 2Content for Accordion 2",
    },
    {
      title: "Accordion 3",
      content:
        "Content for Accordion 3 Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3 Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3Content for Accordion 3",
    },
  ];
    return (
        <div className="bg-black py-10 mt-5">
          <h1 className="text-5xl text-white text-center">
          Accordian In Tailwind
          </h1>
          <div className="pt-5 pb-5">
            <div className="accordion">
              {accordionData.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <div
                    onClick={() => toggleAccordion(index)}
                    className="flex justify-between items-center accordion-title"
                  >
                    <div className="font-bold text-xl">{item.title}</div>
                    <div className="font-bold text-3xl">
                      {openAccordion === index ? "-" : "+"}
                    </div>
                  </div>
                  <div
                    className={`accordion-content ${
                      openAccordion === index ? "open" : ""
                    }`}
                  >
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default AccodianInTailwind