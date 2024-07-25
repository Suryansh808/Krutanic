import React from 'react';

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-darkBg text-darkText p-4">
      <h1 className="text-3xl mb-4">What We Do</h1>
      <div className="space-y-4">
        <Dropdown label="Overview">
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nobis delectus. Facilis natus nulla earum consequuntur odit sed quasi possimus officia, distinctio, dicta odio, ad consequatur tenetur libero debitis quidem.
          </p>
        </Dropdown>
        <Dropdown label="Industries">
          <ul className="list-disc list-inside">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            
          </ul>
        </Dropdown>
        <Dropdown label="Services">
          <ul className="list-disc list-inside">
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </Dropdown>
        <Dropdown label="Product and Platform">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iste corrupti explicabo nulla illum perferendis. Id necessitatibus molestias inventore fugiat ex dolor nesciunt, cupiditate asperiores. Expedita saepe excepturi nihil cum!
          </p>
        </Dropdown>
      </div>
    </div>
  );
};

const Dropdown = ({ label, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-2 bg-gray-800 rounded-lg"
      >
        {label}
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-gray-700 rounded-lg">
          {children}
        </div>
      )}
    </div>
  );
};

export default WhatWeDo;
