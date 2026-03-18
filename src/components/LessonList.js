import React from "react";
import LessonCard from "./LessonCard";

function LessonList({ lessons, onDeleteLesson, onToggleCompleted }) {
  if (lessons.length === 0) {
    return <p className="no-items">No lessons found.</p>;
  }

  return (
    <div className="lesson-list">
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          lesson={lesson}
          onDeleteLesson={onDeleteLesson}
          onToggleCompleted={onToggleCompleted}
        />
      ))}
    </div>
  );
}

export default LessonList;