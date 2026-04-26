import React from "react";
import LessonCard from "./LessonCard";

function LessonList({ lessons, onDeleteLesson, onToggleCompleted, onEditLesson }) {
  if (lessons.length === 0) {
    return <p className="no-items">No lessons found.</p>;
  }
  return (
    <div className="lesson-list">
      {lessons.map((lesson) => (
  <LessonCard
    key={lesson.id}  // make sure this is here
    lesson={lesson}
    onDeleteLesson={onDeleteLesson}
    onToggleCompleted={onToggleCompleted}
    onEditLesson={onEditLesson}
  />
))}
    </div>
  );
}

export default LessonList;