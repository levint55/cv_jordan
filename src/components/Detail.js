import React from "react";
import EducationItem from "./EducationItem";
import ExperienceItem from "./ExperienceItem";

class Detail extends React.Component {
  render() {
    const renderedDetail = (type, content) => {
      switch (type) {
        case "Profile":
          return <p>{content.description}</p>;

        case "Experience":
          const renderedExperience = this.props.content.experience.map(
            (experience) => {
              return (
                <ExperienceItem
                  key={experience.title}
                  experience={experience}
                />
              );
            }
          );

          return renderedExperience;

        case "Education":
          const renderedEducation = this.props.content.education.map(
            (education) => {
              return (
                <EducationItem key={education.study} education={education} />
              );
            }
          );
          return renderedEducation;

        case "Skills":
          const renderedSkills = this.props.content.skills.map((skill) => {
            return (
              <div className="item" key={skill}>
                {skill}
              </div>
            );
          });
          return <div className="ui bulleted list">{renderedSkills}</div>;

          case "Expertise in":
            const renderedExpertise = this.props.content.expertise.map((expertise) => {
              return (
                <div className="item" key={expertise}>
                  {expertise}
                </div>
              );
            });
            return <div className="ui bulleted list">{renderedExpertise}</div>;

            
        default:
          return "error";
      }
    };

    return renderedDetail(this.props.type, this.props.content);
  }
}

export default Detail;
