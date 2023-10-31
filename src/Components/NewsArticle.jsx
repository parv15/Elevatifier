import "../Styles/NewsArticle.css";
import { Link } from "react-router-dom";

function NewsArticle({ article }) {
  return (
    <div className="news-article">
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
          pariatur.
        </p>
        <Link to={`/news/${article.id}`} target="_blank">Read More</Link>
        <p>Source:&nbsp;{article.attributes.newsSource}</p>
        <p>{article.attributes.hashtags}</p>

      </div>
    </div>
  );
}

export default NewsArticle;
