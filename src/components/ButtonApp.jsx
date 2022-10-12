import React from "react";

const ButtonApp = ({ title, actionSet }) => {
  const backFunction = () => {
    setTimeout(() => {
      actionSet();
    }, 250);
  };

  return (
    <div onClick={() => backFunction()} className="btn-App">
      {title}
    </div>
  );
};

export default ButtonApp;
