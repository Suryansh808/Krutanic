import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Resume = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    address: '',
    summary: '',
    education: [
      {
        degree: '',
        branch: '',
        cgpa: '',
        university: '',
        startDate: '',
        endDate: '',
        currentlyPursuing: false
      }
    ],
    experience: '',
    skills: '',
    achievement: '',
    coverLetter: ''
  });

  const handleChange = (e, index, field) => {
    if (field === 'education') {
      const updatedEducation = formData.education.map((edu, i) => {
        if (i === index) {
          return { ...edu, [e.target.name]: e.target.value };
        }
        return edu;
      });
      setFormData({ ...formData, education: updatedEducation });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleEducationChange = (e, index) => {
    const updatedEducation = formData.education.map((edu, i) => {
      if (i === index) {
        return { ...edu, [e.target.name]: e.target.value };
      }
      return edu;
    });
    setFormData({ ...formData, education: updatedEducation });
  };

  const handleCheckboxChange = (index) => {
    const updatedEducation = formData.education.map((edu, i) => {
      if (i === index) {
        return { ...edu, currentlyPursuing: !edu.currentlyPursuing };
      }
      return edu;
    });
    setFormData({ ...formData, education: updatedEducation });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          degree: '',
          branch: '',
          cgpa: '',
          university: '',
          startDate: '',
          endDate: '',
          currentlyPursuing: false
        }
      ]
    });
  };

  const navigate = useNavigate();

  const validateForm = () => {
    const requiredFields = ['fullName', 'email', 'mobile', 'address', 'summary', 'experience', 'skills', 'achievement', 'coverLetter'];
    for (let field of requiredFields) {
      if (!formData[field]) {
        return false;
      }
    }

    for (let edu of formData.education) {
      const requiredEduFields = ['degree', 'branch', 'cgpa', 'university', 'startDate'];
      for (let field of requiredEduFields) {
        if (!edu[field]) {
          return false;
        }
      }
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Please fill all the below fields.');
      return;
    }
    console.log('Resume Data:', formData);
    localStorage.setItem('resumeData', JSON.stringify(formData));
    navigate('/Profile', { state: formData });
  };

  return (
    <div className="flex flex-col items-center justify-center max-[600px]:w-full">
     <div className="w-full max-w-md m-3 bg-white rounded-lg shadow-lg p-6">
     <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Create Resume</h2>
      <form className="flex flex-col"  onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label>Full Name:</label>
          <input
           className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Email ID:</label>
          <input
           className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Mobile No:</label>
          <input
           className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Address:</label>
          <input
           className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="text"
            name="address"
            value={formData.address}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='flex flex-col'>
          <label>About Summary:</label>
          <textarea
           className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            name="summary"
            value={formData.summary}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Education:</label>
          {formData.education.map((edu, index) => (
            <div key={index}>
              <input
               className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                name="degree"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(e, index)}
              />
              <input
               className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                name="branch"
                placeholder="Branch"
                value={edu.branch}
                onChange={(e) => handleEducationChange(e, index)}
              />
              <input
               className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                name="cgpa"
                placeholder="CGPA"
                value={edu.cgpa}
                onChange={(e) => handleEducationChange(e, index)}
              />
              <input
               className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="text"
                name="university"
                placeholder="University"
                value={edu.university}
                onChange={(e) => handleEducationChange(e, index)}
              /> <br />
              <div className='flex flex-col'>
              <label>Start Date</label>
              <input
               className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="number"
                name="startDate"
                placeholder="Year"
                value={edu.startDate}
                onChange={(e) => handleEducationChange(e, index)}
              />
              </div>
             <div className='flex flex-col'>
             <label>End Date</label>
              <input
               className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                type="number"
                name="endDate"
                placeholder="Year"
                value={edu.endDate}
                onChange={(e) => handleEducationChange(e, index)}
                disabled={edu.currentlyPursuing}
              />
             </div>
              <label>
                <input
                 className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                  type="checkbox"
                  checked={edu.currentlyPursuing}
                  onChange={() => handleCheckboxChange(index)}
                />
                Currently Pursuing
              </label>
            </div>
          ))}
          <button type="button" className='text-lg font-semibold' onClick={addEducation}>
           + Add Education
          </button>
        </div>
        <div className='flex flex-col'>
          <label>Experience:</label>
          <textarea
           className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            name="experience"
            value={formData.experience}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Skills:</label>
          <select
           className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            name="skills"
            value={formData.skills}
            onChange={(e) => handleChange(e)}
          >
            <option value="">Select Skill</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
            <option value="CSS">CSS</option>
            <option value="HTML">HTML</option>
            <option value="Python">Python</option>
          </select>
        </div>
        <div className='flex flex-col'>
          <label>Achievement:</label>
          <textarea
           className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            name="achievement"
            value={formData.achievement}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Cover Letter:</label>
          <textarea
           className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button className="bg-blue-600  text-white active:scale-105 active:ease-linear active:bg-blue-400 active:duration-300 border-0 rounded-md p-2 mb-4 " type="submit">Create Resume</button>
      </form>
     </div>
    </div>
  );
};

export default Resume;
