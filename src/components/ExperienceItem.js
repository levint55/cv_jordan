import React from "react";

const ExperienceItem = ({experience}) => {
  return (
    <div>
      <h3>{experience.title}</h3>
      <b>
        {experience.company} ({experience.time})
      </b>
      <div className="ui bulleted list">
        {experience.description.map((desc) => {
          return <div className="item" key={desc}>{desc}</div>;
        })}
      </div>
      <br/>
    </div>
  );
};

export default ExperienceItem;
