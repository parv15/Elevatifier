import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/NewDetails.css';

function NewsDetail() {
  const {id} = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://linesnews.onrender.com/api/news-datas/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data.data));
  }, [id]);


  return (
    <div className="news-detail">
      {article ? (
         <div className="news-detail">
         <div className="image-container">
           <img src={article.attributes.newsIcon} alt="News Icon" />
         </div>
         <div className="article-info">
           <h2>{article.attributes.headline}</h2>
           <p className="articleContent">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
             aliquip ex ea commodo consequat. Duis aute irure dolor in
             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
             pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
             aliquip ex ea commodo consequat. Duis aute irure dolor in
             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
             pariatur.
           </p>
           <p>Source:&nbsp;{article.attributes.newsSource}</p>
           <p>{article.attributes.hashtags}</p>
   
         </div>
       </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default NewsDetail;
