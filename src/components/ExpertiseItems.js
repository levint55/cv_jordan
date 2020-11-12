import React from "react";
import { connect } from "react-redux";
import BulletList from "./BulletList";

const ExpertiseItems = ({ expertises }) => {
  return <BulletList items={expertises} />;
};

const mapStateToProps = (state) => {
  return { expertises: state.expertises };
};

export default connect(mapStateToProps)(ExpertiseItems);
