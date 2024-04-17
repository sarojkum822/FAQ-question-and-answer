import React, { useState } from "react";
import "../styles.css";

const FAQans = ({ item, index }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="container">
        <div>
          <button onClick={handleClick}>{!show ? ">" : "^"}</button>
        </div>
        <div className="ques">{item.question}</div>
      </div>
      <div className="container2">
        {show && <div>Answer: {item.answer}</div>}
      </div>
    </>
  );
};

export default FAQans;
