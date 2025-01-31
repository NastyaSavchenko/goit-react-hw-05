import { useState } from "react";

import s from "./ReadMore.module.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className={s.text}>
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className={s.readOrHide}>
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

export default ReadMore;
