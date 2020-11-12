import React from "react";
import { connect } from "react-redux";

const EducationItem = ({ educations }) => {
  const renderedEducations = educations.map((education) => {
    return (
      <div className="item" key={education.study}>
        <h3>{education.study}</h3>
        <b>
          {education.school} ({education.time})
        </b>
      </div>
    );
  });
  return renderedEducations;
};

const mapStateToProps = (state) => {
  return { educations: state.educations };
};

export default connect(mapStateToProps)(EducationItem);
