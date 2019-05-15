const _ss = sessionStorage;

export const findArticle = _id => {
  const viewedBlogs = JSON.parse(_ss.getItem("viewed-blogs"));

  if (viewedBlogs) {
    if (viewedBlogs.includes(_id)) {
      return true;
    } else {
      return false;
    }
  }
  else {
    _ss.setItem("viewed-blogs", JSON.stringify([]));
  }
};

export const addArticleToSS = _id => {
  const viewedBlogs = JSON.parse(_ss.getItem("viewed-blogs"));

  viewedBlogs.push(_id);

  _ss.setItem("viewed-blogs", JSON.stringify(viewedBlogs));
}
