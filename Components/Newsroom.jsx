import React from 'react';

const Newsroom = () => {
  const newsArticles = [
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, maxime!",
      date: "dd/mm/yy",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, maxime!",
      //link: "#"
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, maxime!",
      date: "dd/mm/yy",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, maxime!",
     // link: "#"
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, maxime!",
      date: "dd/mm/yy",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, maxime!",
     // link: "#"
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, maxime!",
      date: "dd/mm/yy",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, maxime!.",
      //link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-darkBg text-darkText p-4">
      <h1 className="text-3xl mb-4">Newsroom</h1>
      <div className="space-y-4">
        {newsArticles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

const NewsCard = ({ article }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-bold">{article.title}</h2>
      <p className="text-sm text-gray-400">{article.date}</p>
      <p className="mt-2">{article.description}</p>
      <a href={article.link} className="mt-4 inline-block text-blue-500">
        Read more
      </a>
    </div>
  );
};

export default Newsroom;

