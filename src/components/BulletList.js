import React from "react";

const BulletList = ({items}) => {
  return (
    <ul className="ui list item">
      {items.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};

export default BulletList;
