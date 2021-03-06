import React from "react";
import foto from './image/foto.jpg';

class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="three wide column"><img className="ui small image center" src={foto} /></div>
        <div className="five wide column">
          <h1>Stephen Jordan</h1>
          <h2>27 November 1998</h2>
          <h2>Full-Stack Developer</h2>
        </div>
        <div className="eight wide column">
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

export default Header;
