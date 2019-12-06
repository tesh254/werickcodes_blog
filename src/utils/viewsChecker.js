export const findArticle = slug => {
  const viewedBlogs = JSON.parse(sessionStorage.getItem("viewed-blogs"));

  if (viewedBlogs) {
    if (viewedBlogs.includes(slug)) {
      return true;
    } else {
      return false;
    }
  } else {
    sessionStorage.setItem("viewed-blogs", JSON.stringify([]));
  }
};

export const addArticleToSS = slug => {
  const viewedBlogs = JSON.parse(sessionStorage.getItem("viewed-blogs"));

  viewedBlogs.push(slug);

  sessionStorage.setItem("viewed-blogs", JSON.stringify(viewedBlogs));
};
