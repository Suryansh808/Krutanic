import React from 'react';

const JobCard = ({ job, onClick }) => {
  return (
    <div
      className="border p-4 rounded-lg shadow-md bg-white cursor-pointer"
      onClick={() => onClick(job)}
    >
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
    </div>
  );
};

export default JobCard;
