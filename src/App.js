import React, { useState } from 'react';

import './styles/main.scss';
import Header from './components/Header';
import jobsData from './data/data.json';
import FilterBar from './components/FilterBar';
import { filterJobsData } from './utils';
import JobList from './components/JobList';

function App() {
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  const removeKeyword = (keyword) => {
    setSelectedKeywords(selectedKeywords.filter((k) => k !== keyword));
  };

  const clearKeywords = () => {
    setSelectedKeywords([]);
  };

  const selectKeyword = (keyword) => {
    if (selectedKeywords.includes(keyword)) return;
    setSelectedKeywords([...selectedKeywords, keyword]);
  };

  const filteredJobs = filterJobsData(jobsData, selectedKeywords);
  const isFilterBarVisible = selectedKeywords.length > 0;

  return (
    <div>
      <Header />

      <FilterBar
        selectedKeywords={selectedKeywords}
        removeKeyword={removeKeyword}
        clearKeywords={clearKeywords}
        isFilterBarVisible={isFilterBarVisible}
      />

      <JobList jobs={filteredJobs} handleSelectKeyword={selectKeyword} />
    </div>
  );
}

export default App;
