import React from 'react';
import JobCard from './JobCard';

const JobList = ({ jobs, onJobClick }) => {
  return (
    <div className="space-y-4">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} onClick={onJobClick} />
      ))}
    </div>
  );
};

export default JobList;
