import axios from "axios";

import { ADD_VIEW, VIEWED } from "../types";
import env from "../../../env";
import { findArticle, addArticleToSS } from "../../../utils/viewsChecker";

const addView = slug => async dispatch => {
  const result = findArticle(slug);

  if (!result) {
    await axios.put(`${env.base_url}/blog/${slug}/add-view`).then(response => {
      addArticleToSS(slug);
      dispatch({
        type: ADD_VIEW
      });
    });
  } else {
    dispatch({
      type: VIEWED
    });
  }
};

export default addView;