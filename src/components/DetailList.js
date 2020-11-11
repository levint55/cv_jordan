import React from "react";
import Detail from "./Detail";

class DetailList extends React.Component {
  render() {
    const renderedDetail = this.props.data.map((data) => {
      return (
        <div key={data.head} className="row">
          <div className="three wide column">{data.head}</div>
          <div className="ten wide column">
            <hr />
            <br />
            <Detail type={data.head} content={data.content} />
          </div>
        </div>
      );
    });

    return renderedDetail;
  }
}

export default DetailList;
