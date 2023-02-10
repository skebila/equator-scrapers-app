import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "name", headerName: "Name", width: 150 },
  { field: "githubUrl", headerName: "GitHub URL", width: 150 },
  { field: "downloadUrl", headerName: "Download URL", width: 150 },
];

function ScraperList() {
  const [scrapers, setScrapers] = useState([]);
  const [error, setError] = useState(null);

  const getScrapers = async () => {
    await axios.get("https://github.com/Equator-Studios/scrapers/tree/main/scrapers").then((res) => {
      setScrapers(res.data.data);
    })
  }

  useEffect(() => {
    getScrapers();
  }, []);

  console.log(scrapers);

  return (
    <>
      
    </>
  );
};

export default ScraperList;