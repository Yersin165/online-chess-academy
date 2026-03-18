import React from "react";

function FilterPanel({ selectedLevel, onLevelChange, sortOrder, onSortChange }) {
  return (
    <div className="filter-panel">
      <select value={selectedLevel} onChange={onLevelChange}>
        <option value="All">All Levels</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      <select value={sortOrder} onChange={onSortChange}>
        <option value="default">Sort by</option>
        <option value="title">Title</option>
        <option value="duration">Duration</option>
      </select>
    </div>
  );
}

export default FilterPanel;