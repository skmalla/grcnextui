import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className='search'>
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder='Search'
        style={{
          width: "228px",
          padding: "8px",
          borderLeft: "0",
          border: "1px solid #E5E5E5",
          fontSize: "14px",
          boxShadow:
            "inset 2px 3px 10px rgba(255, 255, 255, 0.75), inset 2px 2px 4px rgba(166, 180, 200, 0.75)",
          borderRadius: "22px",
        }}
        className='ml-3'
      />
      <span>
        <i class='fa fa-search'></i>
      </span>
    </span>
  );
};

export default GlobalFilter;
