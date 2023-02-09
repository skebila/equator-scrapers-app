import React, { useState, useEffect } from 'react';

const ScraperList = () => {
  const [scrapers, setScrapers] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/repos/Equator-Studios/scrapers/contents/scrapers')
      .then(response => response.json())
      .then(data => {
        const scraperData = data.map(scraper => ({
          name: scraper.name,
          githubUrl: scraper.html_url,
          downloadUrl: scraper.download_url,
        }));
        setScrapers(scraperData);
      });
  }, []);

  return (
    <ul>
      {scrapers.map(scraper => (
        <li key={scraper.name}>
          <p>Name: {scraper.name}</p>
          <p>GitHub URL: {scraper.githubUrl}</p>
          <p>Download URL: {scraper.downloadUrl}</p>
        </li>
      ))}
    </ul>
  );
};

export default ScraperList;
