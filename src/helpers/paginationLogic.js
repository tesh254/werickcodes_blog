import React, { Fragment } from "react";

const PaginationLogic = (props, loadMore) => {
  const data = props.props.props;
  const funcs = props.props;
  if (data.pages > 1) {
    return (
      <Fragment>
        {data.pages !== data.current_page ? (
          data.pages - data.current_page > 1 ? (
            <Fragment>
              <button className="pg-btn left-btn" onClick={funcs.prevFunc}>
                Go back
              </button>
              <button className="pg-btn right-btn" onClick={funcs.nextFunc}>
                More
              </button>
            </Fragment>
          ) : (
            <button className="pg-btn right-btn" onClick={funcs.nextFunc}>
              More
            </button>
          )
        ) : (
          <p>Thats it</p>
        )}
      </Fragment>
    );
  }
};

export default PaginationLogic;
