import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'Does taking antibiotics during pregnancy harm an unborn child?',
    image: 'DAWN FM DANCEHALL PLAYLIST.png',
  },
  {
    title: 'How to administer quick and effective first aid',
    image: 'DAWN FM DANCEHALL PLAYLIST.png',
  },
  {
    title: 'Everything to know about your heart health, myths and facts.',
    image: 'DAWN FM DANCEHALL PLAYLIST.png',
  },
  {
    title: 'What is the best antiseptic used to treat open wounds?',
    image: 'DAWN FM DANCEHALL PLAYLIST.png',
  },
  {
    title: 'Did cancer exist before man-made chemicals were around?',
    image: 'DAWN FM DANCEHALL PLAYLIST.png',
  },
  {
    title: 'Can a man’s testosterone be boosted naturally?',
    image: 'DAWN FM DANCEHALL PLAYLIST.png',
  },
  {
    title: 'How can Lyme disease last for years?',
    image: 'DAWN FM DANCEHALL PLAYLIST.png',
  },
  {
    title: 'Want to know how antibiotics kill viruses?',
    image: 'DAWN FM DANCEHALL PLAYLIST.png',
  },
];

const ArticleGrid = ({ articles }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 bg-white">
      <h2 className="text-2xl font-bold mb-4">Top Article Reads</h2>
      <div className="block sm:hidden">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
          {articles.map((article, index) => (
            <div key={index} className="min-w-[250px] cursor-pointer bg-white rounded-b-lg shadow-md overflow-hidden flex-shrink-0 w-60">
              <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold">{article.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg cursor-pointer overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold hover:text-customOrange">{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-end">
        <button className="bg-orange-100 text-customOrange px-4 py-2 rounded">Read More</button>
      </div>
    </div>
  );
};

const TopArticles = () => {
  return (
    <div className="bg-white">
      <ArticleGrid articles={articles} />
    </div>
  );
};

// Custom CSS for hiding the scrollbar
const styles = `
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default TopArticles;
