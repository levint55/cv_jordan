import React from "react";
import Detail from "./Detail";

class DetailList extends React.Component {
  render() {

    return (
      <div className="ui grid">
        <Detail type="Profile"/>
        <Detail type="Experience"/>
        <Detail type="Education"/>
        <Detail type="Skills"/>
        <Detail type="Expertise"/>
      </div>
    );
  }
}

export default DetailList;
