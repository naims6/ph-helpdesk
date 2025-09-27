import React from "react";

const Status = ({ loadedData }) => {
  // pending data
  const pendingData = loadedData.filter((item) => item.status === "Pending");
  // submitted data
  const submittedData = loadedData.filter(
    (item) => item.status === "Submitted"
  );
  // reviewed data
  const reviewedData = loadedData.filter((item) => item.status === "Reviewed");
  return (
    <div className="mt-5 flex justify-between gap-5 max-w-[1280px] mx-auto">
      <div className="bg-amber-500 p-5 text-center w-full h-[250px] text-4xl flex items-center justify-center">
        Pending <span className="ml-2.5"> {pendingData.length}</span>
      </div>
      <div className="bg-blue-500 p-5 text-center w-full h-[250px] text-4xl flex items-center justify-center">
        Submitted <span className="ml-2.5">{submittedData.length}</span>
      </div>
      <div className="bg-green-500 p-5 text-center w-full h-[250px] text-4xl flex items-center justify-center">
        Resolved <span className="ml-2.5">{reviewedData.length}</span>
      </div>
    </div>
  );
};

export default Status;
