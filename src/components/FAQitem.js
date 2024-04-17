import React from "react";
import FAQANS from "./FAQanswers.js";

const FAQitem = () => {
  const FAQ = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live?",
      answer:
        "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
    },
    {
      question: "What do cats eat?",
      answer:
        "Cats are obligate carnivores, meaning they primarily eat meat. Commercial cat food is formulated to meet their nutritional needs.",
    },
    {
      question: "Do cats need grooming?",
      answer:
        "Yes, cats need grooming to maintain healthy fur and skin. Some cats may require more grooming than others depending on their breed and coat length.",
    },
    {
      question: "Are cats social animals?",
      answer:
        "Cats can be social animals, but they also enjoy solitary time. The level of sociability varies between individual cats.",
    },
  ];

  return (
    <>
      <h1>FAQ</h1>
      <div>
        {FAQ.map((item, index) => {
          return <FAQANS item={item} index={index} />;
        })}
      </div>
    </>
  );
};

export default FAQitem;
