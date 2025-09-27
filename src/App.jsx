import { use, useEffect, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Status from "./components/Status";

const fetcher = (async () => {
  const res = await fetch("/public/problem.json");
  return res.json();
})();

function App() {
  const data = use(fetcher);
  const [loadedData, setLoadedData] = useState([]);
  const [toggleStatus, setToggleStatus] = useState("All");

  const filteredData =
    toggleStatus === "All"
      ? loadedData
      : loadedData.filter((d) => d.status === toggleStatus);

  useEffect(() => {
    const showData = JSON.parse(localStorage.getItem("Data")) || data;
    setLoadedData(showData);
  }, [data]);

  return (
    <>
      <Status loadedData={loadedData}></Status>
      <Button setToggleStatus={setToggleStatus} toggleStatus={toggleStatus} />
      <Card
        filteredData={filteredData}
        loadedData={loadedData}
        setLoadedData={setLoadedData}
        toggleStatus={toggleStatus}
      />
    </>
  );
}

export default App;
