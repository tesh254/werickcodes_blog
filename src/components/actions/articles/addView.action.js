import axios from "axios";

import { ADD_VIEW, VIEWED } from "../types";
import env from "../../../env";
import { findArticle, addArticleToSS } from "../../../helpers/file-checker";

const addView = slug => async dispatch => {
  const result = findArticle(slug);

  if (!result) {
    await axios.put(`${env.BASE_URL}/blog/${slug}/add-view`).then(response => {
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
