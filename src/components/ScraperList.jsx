import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "../style";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name", width: 150 },
  { field: "githubUrl", headerName: "GitHub URL", width: 500 },
  { field: "downloadUrl", headerName: "Download URL", width: 500 },
];

function ScraperList() {
  const [scrapers, setScrapers] = useState([]);
  const [error, setError] = useState(null);

  const getScrapers = () => {
    fetch('https://api.github.com/repos/Equator-Studios/scrapers/contents/scrapers')
      .then(response => response.json())
      .then(data => {
        const scraperData = data.map((scraper, i) => ({
          id: i+1,
          name: scraper.name,
          githubUrl: scraper.html_url,
          downloadUrl: scraper.download_url,
        }));
        setScrapers(scraperData);
      });
  }

  useEffect(() => {
    getScrapers();
  }, []);

  //console.log(scrapers);

  return (
    <div className={`h-[100vh] ${styles.paddingY}`}>
      <DataGrid
      rows={scrapers}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
    />
    </div>
  );
};

export default ScraperList;