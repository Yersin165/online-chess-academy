import React from "react";

function StatsBlock({ lessons }) {
  const total = lessons.length;
  const completed = lessons.filter((l) => l.completed).length;
  const totalDuration = lessons.reduce((sum, l) => sum + l.duration, 0);
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="stats-block">
      <h2>Your Progress</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">{total}</span>
          <span className="stat-label">Total Lessons</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{completed}</span>
          <span className="stat-label">Completed</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{totalDuration}m</span>
          <span className="stat-label">Total Duration</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{percent}%</span>
          <span className="stat-label">Progress</span>
        </div>
      </div>
      <div className="progress-bar-wrap">
        <div className="progress-bar" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

export default StatsBlock;