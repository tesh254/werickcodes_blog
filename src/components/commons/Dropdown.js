import React from "react";

const Dropdown = (results, title) => {
  console.log(results);
  return (
    <div className="dd-wrapper">
      <div className="dd-header">
        <div className="dd-header-title">{title}</div>
      </div>
      <ul className="dd-list">
        {results.forEach(result => (
          <li className="dd-list-item">{result.title}</li>
        ))}
      </ul>
    </div>
  );
};


export default Dropdown;
