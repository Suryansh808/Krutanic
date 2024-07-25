import React ,{useState} from 'react';
import SearchBar from './SearchBar';
import JobList from './JobList';
import JobDetails from './JobDetails';
// import SearchBar from './components/SearchBar';
// import JobList from './components/JobList';
// import JobDetails from './components/JobDetails';

const StudentProfile = () => {
  const [jobs, setJobs] = useState([
    {
      title: 'Frontend Developer',
      company: 'Tech Company',
      location: 'Remote',
      description: 'We are looking for a Frontend Developer with experience in React.',
      skills: ['React', 'JavaScript', 'CSS']
    },
    {
      title: 'Backend Developer',
      company: 'Tech Company',
      location: 'New York, NY',
      description: 'We are looking for a Backend Developer with experience in Node.js.',
      skills: ['Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'fackend Developer',
      company: 'Tech Company',
      location: 'New York, NY',
      description: 'We are looking for a Backend Developer with experience in Node.js.',
      skills: ['Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Gackend Developer',
      company: 'Tech Company',
      location: 'New York, NY',
      description: 'We are looking for a Backend Developer with experience in Node.js.',
      skills: ['Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Tackend Developer',
      company: 'Tech Company',
      location: 'New York, NY',
      description: 'We are looking for a Backend Developer with experience in Node.js.',
      skills: ['Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Uackend Developer',
      company: 'Tech Company',
      location: 'New York, NY',
      description: 'We are looking for a Backend Developer with experience in Node.js.',
      skills: ['Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Oackend Developer',
      company: 'Tech Company',
      location: 'New York, NY',
      description: 'We are looking for a Backend Developer with experience in Node.js.',
      skills: ['Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Packend Developer',
      company: 'Tech Company',
      location: 'New York, NY',
      description: 'We are looking for a Backend Developer with experience in Node.js.',
      skills: ['Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Mackend Developer',
      company: 'Tech Company',
      location: 'New York, NY',
      description: 'We are looking for a Backend Developer with experience in Node.js.',
      skills: ['Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Qackend Developer',
      company: 'Tech Company',
      location: 'New York, NY',
      description: 'We are looking for a Backend Developer with experience in Node.js.',
      skills: ['Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Tackend Developer',
      company: 'Tech Company',
      location: 'New York, NY',
      description: 'We are looking for a Backend Developer with experience in Node.js.',
      skills: ['Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Rackend Developer',
      company: 'Tech Company',
      location: 'New York, NY',
      description: 'We are looking for a Backend Developer with experience in Node.js.',
      skills: ['Node.js', 'Express', 'MongoDB']
    },
    // Add more job listings as needed
  ]);

  const [selectedJob, setSelectedJob] = useState(null);

  const handleSearch = (query) => {
    // Implement search functionality here
    const filteredJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );
    setJobs(filteredJobs);
  };

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };
  return (
    <div className="mt-10 min-h-screen bg-gray-100">
      <div className="p-4">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="flex p-4 space-x-4">
        <div className="w-1/3">
          <JobList jobs={jobs} onJobClick={handleJobClick} />
        </div>
        <div className="w-2/3">
          <JobDetails job={selectedJob} />
        </div>
      </div>
      </div>
  );
};
    

export default StudentProfile;
