import React from 'react';

const JobDetails = ({ job }) => {
  if (!job) {
    return <div className="p-4">Select a job to see the details</div>;
  }

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
      <p className="text-lg mb-2">{job.company}</p>
      <p className="text-md mb-2">{job.location}</p>
      <div className="mb-4">{job.description}</div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">Skills</h3>
        <ul className="list-disc ml-5">
          {job.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <button className="bg-blue-500 text-white p-2 rounded-lg">
        Apply
      </button>
    </div>
  );
};

export default JobDetails;
