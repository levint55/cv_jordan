import React from "react";
import { connect } from "react-redux";
import BulletList from "./BulletList";

const ExperienceItem = ({experiences}) => {
  const renderedExperience = experiences.map((experience) => {
    return (
      <div className="item" key={experience.title}>
        <h3>{experience.title}</h3>
        <b>
          {experience.company} ({experience.time})
        </b>
        <BulletList items={experience.descriptions} />
      </div>
    );
  });

  return renderedExperience;
};

const mapStateToProps = (state) => {
  return { experiences: state.experiences };
};

export default connect(mapStateToProps)(ExperienceItem);
