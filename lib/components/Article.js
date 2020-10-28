import React from "react";
import PropTypes from "prop-types";
import storeProvider from "./storeProvider";
const dateDisplay = (dateString) => new Date(dateString).toDateString();

const Article = (props) => {
  const { article, author } = props;
  return (
    <ul>
      <li>{article.title}</li>
      <div>{dateDisplay(article.date)}</div>
      <div>{article.body}</div>
      <div>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
    </ul>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId),
  };
}

export default storeProvider(extraProps)(Article);
