import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccorByFamerMotion = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    const accordionData = [
      {
        title: "Section 1",
        content:
          "Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.",
      },
      {
        title: "Section 2",
        content:
          "Content for section 2 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.",
      },
      {
        title: "Section 3",
        content:
          "Content for section 3 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.Content for section 1 goes here.",
      },
    ];
  
    return (
      <div className="bg-black mt-5 pb-10 mb-4">
        <h1 className="text-center text-white pt-10 text-4xl font-bold">
        Accordian By Framer Motion
        </h1>
        {accordionData.map((item, index) => (
          <motion.div
            layout
            className="p-2 mb-2 cursor-pointer mt-5 w_700 mx-auto bg-[#5f9ea0]"
            key={index}
          >
            <motion.div
              layout
              className="flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              <motion.div layout className="font-bold text-black text-2xl">
                {item.title}
              </motion.div>
              <motion.div layout className="text-black text-3xl font-bold">
                {openIndex === index ? "-" : "+"}
              </motion.div>
            </motion.div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-white"
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    );
}

export default AccorByFamerMotion