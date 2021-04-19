import React from "react";

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <input
      value={filterValue || ""}
      onChange={(e) => setFilter(e.target.value)}
      placeholder='Filter Column'
    />
  );
};

export default ColumnFilter;
