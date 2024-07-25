import React from 'react';

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-darkBg text-darkText p-4">
      <h1 className="text-3xl mb-4">Who We Are</h1>
      <div className="space-y-4">
        <Section title="About Us">
          <p>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quae excepturi, cupiditate atque aspernatur vero facere quia nobis ipsam praesentium nam soluta numquam quam perspiciatis debitis odio sed maiores. Dignissimos?
          </p>
        </Section>
        <Section title="Our Mission">
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quod atque alias aperiam quam placeat rerum accusantium repudiandae in autem, cupiditate non consequuntur, quo esse laudantium amet sit culpa sint?
          </p>
        </Section>
        <Section title="Our Vision">
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et maiores praesentium tempora deserunt blanditiis totam expedita architecto explicabo reiciendis molestiae excepturi nemo velit voluptatem, dolorem porro, non aperiam veritatis.
          </p>
        </Section>
        <Section title="Core Values">
          <ul className="list-disc list-inside">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
           
          </ul>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-2 bg-gray-800 rounded-lg"
      >
        {title}
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-gray-700 rounded-lg">
          {children}
        </div>
      )}
    </div>
  );
};

export default WhoWeAre;
