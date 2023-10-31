import React, { useState } from 'react';
import NewsArticle from './NewsArticle';
import '../Styles/NewsList.css';

function NewsList({ newsData, selectedCategory, searchQuery }) {
  const [articlePage, setArticlePage] = useState(2); 
  const filteredNews = newsData?.filter((article) => {
    return (
      (article.attributes.category.toLowerCase() === selectedCategory.toLowerCase() || selectedCategory === 'All') &&
      article.attributes.headline.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const slicedData = filteredNews.slice(0, articlePage);

  const loadMore = () => {
    setArticlePage(articlePage + 2); 
  }
  return (
    <div className="news-list">
      {slicedData?.map((article, index) => (
        <NewsArticle key={index} article={article} />
      ))}
      {articlePage < filteredNews.length && (
        <button className="load-more" onClick={loadMore}>Load More</button>
      )}
    </div>
  );
}

export default NewsList;
