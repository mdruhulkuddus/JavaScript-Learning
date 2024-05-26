import React, { useState } from "react";
import { faqsData } from "./data";
import FAQ from "./FAQ";
import style from "./faqs.module.css";

const FAQs = () => {
  // console.log(faqsData);
  const [faqs, setFaqs] = useState(faqsData);
  return (
    <main className={style.container}>
      <div className={style.faqs}>
      <h1>FAQs</h1>
        {/* <FAQ key={faq.id} id={faq.id} title={faq.title} desc={faq.desc} /> */}
        {faqs.map((faq) => (
          <FAQ key={faq.id} {...faq} />
        ))}
      </div>
    </main>
  );
};

export default FAQs;
