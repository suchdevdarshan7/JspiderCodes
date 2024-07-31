import { useState } from "react";

export default function Faqs({ id, question, answer, handleClick }) {
  function handleClick() {
    Open? setOpen(false) : setOpen(true);
  }

  let [Open, setOpen] = useState(false);
  return (
    <div className="container">
      <h3>Question:{id}</h3>
      <p className="para" onClick={handleClick}>
        {Open ? "-" : "+"}
      </p>
      <p>{question}</p>
      {Open && <p>{answer}</p>}
    </div>
  );
}
