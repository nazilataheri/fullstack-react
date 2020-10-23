import React from "react";
import ReactDOMServer from "react-dom/server";
import axios from "axios";
import DataApi from "state-api";

import App from "components/App";
import config from "config";

const serverRender = async () => {
  let initialData;
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApi(resp.data);
  initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  };
  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App initialData={initialData} />
    ),
    initialData,
  };
};

export default serverRender;