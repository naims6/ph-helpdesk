const Card = ({ filteredData, loadedData, setLoadedData, toggleStatus }) => {
  const handleProblem = (pblm) => {
    const expectedData = loadedData.find((elem) => elem.id === pblm.id);
    const remainingData = loadedData.filter((elem) => elem.id !== pblm.id);

    if (expectedData.status === "Pending") {
      expectedData.status = "Submitted";
    } else if (expectedData.status === "Submitted") {
      expectedData.status = "Reviewed";
    } else {
      return;
    }

    const sortingData = [...remainingData, expectedData].sort((a, b) => {
      return a.id - b.id;
    });

    setLoadedData(sortingData);
    localStorage.setItem("Data", JSON.stringify(loadedData));
  };

  const handleBackProblem = (pblm) => {
    if (pblm.status === "Submitted") pblm.status = "Pending";
    if (pblm.status === "Reviewed") pblm.status = "Submitted";

    const expectedData2 = loadedData.find((elem) => elem.id === pblm.id);
    const remainingData2 = loadedData.filter((elem) => elem.id !== pblm.id);

    const sortingData2 = [...remainingData2, expectedData2].sort((a, b) => {
      return a.id - b.id;
    });

    setLoadedData(sortingData2);
    localStorage.setItem("Data", JSON.stringify(loadedData));
  };

  return (
    <div className="max-w-[1280px] gap-5 mx-auto mt-5 grid grid-cols-3">
      <div className="col-span-full">
        <h1 className="mt-5 text-3xl text-center">
          {filteredData.length === 0 ? `No data in ${toggleStatus}` : ""}
        </h1>
      </div>
      {filteredData.map((pblm, index) => (
        <div
          key={index}
          className="card p-5 border border-gray-500 flex justify-between"
        >
          <h1 className="text-2xl">{pblm.customer} </h1>
          <h2 className="text-xl mt-3">{pblm.title}</h2>
          <p className="text-sm mt-2.5">{pblm.description}</p>

          <div className="flex gap-5 mt-5">
            <h1 className="cursor-pointer bg-red-400 text-green-800 px-4  py-2 font-bold rounded-md">
              High
            </h1>
            <button
              onClick={() => handleProblem(pblm)}
              className={`${
                pblm.status === "Pending"
                  ? "text-white bg-red-500"
                  : pblm.status === "Submitted"
                  ? "text-black bg-yellow-300"
                  : "text-white bg-green-500"
              } cursor-pointer px-4  py-2 font-bold rounded-md`}
            >
              {pblm.status === "Pending"
                ? "Pending"
                : pblm.status === "Submitted"
                ? "Submitted"
                : "Reviewed"}
            </button>
            {pblm.status === "Reviewed" || pblm.status === "Submitted" ? (
              <button
                onClick={() => handleBackProblem(pblm)}
                className="btn btn-outline cursor-pointer px-4  py-2 font-bold rounded-md"
              >
                Back to{" "}
                {` ${pblm.status === "Reviewed" ? "Submitted" : "Pending"}`}
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
