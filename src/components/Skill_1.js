import React from "react";

const Skill_1 = props => {
  const { icon, name, children } = props;
  return (
    <div className="skill_1">
      <div className="skill-icon">{icon}</div>
      <h2>{name}</h2>
      {children}
    </div>
  );
};
export default Skill_1;