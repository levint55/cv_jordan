import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="four wide column">image</div>
        <div className="five wide column">
          <h1>Stephen Jordan</h1>
          <h2>27 November 1998</h2>
          <h2>Full-Stack Developer</h2>
        </div>
        <div className="four wide column">
          <i className="whatsapp icon" /> 0896-0886-4863
          <br />
          <i className="envelope outline icon" /> 98.stephenjordan@gmail.com
          <br />
          <i className="linkedin icon"/>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/stephen-jordan-007112187/">
            linkedin.com/in/stephen-jordan-007112187
          </a>
        </div>
      </div>
    );
  }
}

export default Profile;
