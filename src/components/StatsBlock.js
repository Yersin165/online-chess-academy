import React from "react";

function StatsBlock({ lessons }) {
  const totalLessons = lessons.length;

  const completedLessons = lessons.filter((lesson) => lesson.completed).length;

  const totalDuration = lessons.reduce((sum, lesson) => sum + lesson.duration, 0);

  return (
    <div className="stats-block">
      <h2>Academy Statistics</h2>
      <p>Total lessons: {totalLessons}</p>
      <p>Completed lessons: {completedLessons}</p>
      <p>Total duration: {totalDuration} minutes</p>
    </div>
  );
}

export default StatsBlock;