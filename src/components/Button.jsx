import React from "react";

const Button = ({ toggleStatus, setToggleStatus }) => {
  const buttons = ["All", "Pending", "Submitted", "Reviewed"];
  return (
    <div className="mt-7 flex gap-3.5 text-right max-w-[1280px] mx-auto">
      {buttons.map((btn, index) => (
        <button
          key={index}
          onClick={() => setToggleStatus(btn)}
          className={`btn ${
            toggleStatus === btn ? "btn-secondary" : "btn-outline"
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Button;
