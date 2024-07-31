import Faqs from "./Faqs";

import { faqs } from "./details";
export default function FaqsPart() {
  return (
    <div>
      {faqs.map((element, i) => (
        <Faqs
          id={element.id}
          key={element.id}
          question={element.question}
          answer={element.answer}
        />
      ))}
    </div>
  );
}
