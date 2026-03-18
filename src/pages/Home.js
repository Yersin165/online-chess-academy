import React, { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import LessonForm from "../components/LessonForm";
import LessonList from "../components/LessonList";
import StatsBlock from "../components/StatsBlock";
import Footer from "../components/Footer";
import initialLessons from "../data/lessons";

function Home() {
  const [lessons, setLessons] = useState(initialLessons);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleAddLesson = (newLesson) => {
    const lessonWithId = {
      ...newLesson,
      id: Date.now(),
    };

    setLessons((prevLessons) => [...prevLessons, lessonWithId]);
  };

  const handleDeleteLesson = (id) => {
    setLessons((prevLessons) =>
      prevLessons.filter((lesson) => lesson.id !== id)
    );
  };

  const handleToggleCompleted = (id) => {
    setLessons((prevLessons) =>
      prevLessons.map((lesson) =>
        lesson.id === id
          ? { ...lesson, completed: !lesson.completed }
          : lesson
      )
    );
  };

  let displayedLessons = lessons.filter((lesson) =>
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (selectedLevel !== "All") {
    displayedLessons = displayedLessons.filter(
      (lesson) => lesson.level === selectedLevel
    );
  }

  if (sortOrder === "title") {
    displayedLessons = [...displayedLessons].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (sortOrder === "duration") {
    displayedLessons = [...displayedLessons].sort(
      (a, b) => a.duration - b.duration
    );
  }

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
        />

        <FilterPanel
          selectedLevel={selectedLevel}
          onLevelChange={handleLevelChange}
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
        />

        <StatsBlock lessons={lessons} />

        <LessonForm onAddLesson={handleAddLesson} />

        <LessonList
          lessons={displayedLessons}
          onDeleteLesson={handleDeleteLesson}
          onToggleCompleted={handleToggleCompleted}
        />
      </main>

      <Footer />
    </div>
  );
}

export default Home;