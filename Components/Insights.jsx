import React from 'react';

const Insights = () => {
  const articles = [
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, voluptate..",
    //date: "July 10, 2024",
    // link: "#"
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, voluptate..",
      //date: "June 25, 2024",
      //link: "#"
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, voluptate.",
      //date: "June 15, 2024",
     // link: "#"
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, voluptate.",
      //date: "June 1, 2024",
     // link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-darkBg text-darkText p-4">
      <h1 className="text-3xl mb-4">Insights</h1>
      <div className="space-y-4">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

const ArticleCard = ({ article }) => {
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

export default Insights;
