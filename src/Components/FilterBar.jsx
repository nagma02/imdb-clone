import React from "react";

const FilterBar = ({ filter, setFilter, filters }) => {
  return (
    <div className="flex justify-center gap-4 mb-4">
      {Object.values(filters).map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded ${
            filter === f ? "bg-blue-500" : "bg-gray-700 hover:bg-gray-600"
          } transition`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
