import React from "react";

const EducationItem = ({ education }) => {
  return (
    <div>
      <h3>{education.study}</h3>
      <b>
        {education.school} ({education.time})
      </b>
    </div>
  );
};

export default EducationItem;
