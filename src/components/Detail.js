import React from "react";
import EducationItem from "./EducationItem";
import ExperienceItem from "./ExperienceItem";
import ExpertiseItems from "./ExpertiseItems";
import ProfileItem from "./ProfileItem";
import SkillItems from "./SkillItems";

class Detail extends React.Component {
  render() {
    const renderedDetail = (type) => {
      switch (type) {
        case "Profile":
          return (
            <div className="row">
              <div className="three wide column title"><h3>Profile</h3></div>
              <div className="ten wide column">
                <hr />
                <ProfileItem/>
              </div>
            </div>
          );

        case "Experience":
          return (
            <div className="row">
              <div className="three wide column title"><h3>Experience</h3></div>
              <div className="ten wide column">
                <hr />
                <ExperienceItem />
              </div>
            </div>
          );

        case "Education":
          return (
            <div className="row">
              <div className="three wide column title"><h3>Education</h3></div>
              <div className="ten wide column">
                <hr />
                <EducationItem />
              </div>
            </div>
          );

        case "Skills":
          return (
            <div className="row">
              <div className="three wide column title"><h3>Skills</h3></div>
              <div className="ten wide column">
                <hr />
                <SkillItems />
              </div>
            </div>
          );

        case "Expertise":
          return (
            <div className="row">
              <div className="three wide column title"><h3>Expertise In</h3></div>
              <div className="ten wide column">
                <hr />
                <ExpertiseItems />
              </div>
            </div>
          );

        default:
          return "error";
      }
    };

    return renderedDetail(this.props.type);
  }
}

export default Detail;
