import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {CircularProgress} from "@mui/joy";
import { Box } from "@mui/material";
import styles from "../style";
import { link } from '../assets';

const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name", width: 200 },
  {field: "githubUrl", headerName: "GitHub URL", width: 200,
    renderCell: ({ value }) => (
      
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.link} underline flex self-start items-center my-4 font-poppins font-semibold text-[0.85em`}
        >
          GitHub  <img src={link} className='pl-2 w-[20px] h-[20px]'/>
        </a>
      
    )
  },
  { field: "downloadUrl", headerName: "Download URL", width: 200,
    renderCell: ({ value }) => (
      <a
        href={value}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.link} underline flex self-start items-center my-4 font-poppins font-semibold text-[0.85em`}
      >
      Download <img src={link} className='pl-2 w-[20px] h-[20px]'/>
      </a>     
    )
  },
];

function ScraperList() {
  const [scrapers, setScrapers] = useState([]);
  const [error, setError] = useState(null);

  const getScrapers = () => {
    fetch('https://api.github.com/repos/Equator-Studios/scrapers/contents/scrapers')
      .then(response => {
        if(!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json()
      })
      .then(data => {
        const scraperData = data.map((scraper, i) => ({
          id: i+1,
          name: scraper.name,
          githubUrl: scraper.html_url,
          downloadUrl: scraper.download_url,
        }));
        setScrapers(scraperData);
      })
      .catch(error => {
      console.error(error);
      setError(error);
      });
  }

  useEffect(() => {
    getScrapers();
  }, []);

  //console.log(scrapers);

  return (
    <Box className={`h-[100vh] mx-[5px] ${styles.paddingY}`}>
      {
        !scrapers 
        
          ? 
          
          <CircularProgress
            color="primary"
            determinate={false}
            size="md"
            value={28}
            variant="plain"
          />
          
          :
        
        <DataGrid
          rows={scrapers}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[10, 20, 40, 60, 80]}
          checkboxSelection={true}
          disableSelectionOnClick
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />
      }
    </Box>
  );
};

export default ScraperList;