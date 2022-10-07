import React from "react";

const ButtonApp = ({ title, actionSet }) => {
  const backFunction = () => {
    setTimeout(() => {
      actionSet();
    }, 300);
  };

  return (
    <div onClick={() => backFunction()} className="btn-App">
      {title}
    </div>
  );
};

export default ButtonApp;
