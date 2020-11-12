import React from "react";
import { connect } from "react-redux";
import BulletList from "./BulletList";

const SkillItems = ({ skills }) => {
  return <BulletList items={skills} />;
};

const mapStateToProps = (state) => {
  return { skills: state.skills };
};

export default connect(mapStateToProps)(SkillItems);
