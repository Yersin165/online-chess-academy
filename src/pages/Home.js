import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import LessonForm from "../components/LessonForm";
import LessonList from "../components/LessonList";
import StatsBlock from "../components/StatsBlock";
import Footer from "../components/Footer";
import initialLessons from "../data/lessons";

function Home() {
  const [lessons, setLessons] = useState(() => {
    const saved = localStorage.getItem("lessons");
    return saved ? JSON.parse(saved) : initialLessons;
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");
  const [editingLesson, setEditingLesson] = useState(null);

  useEffect(() => {
    localStorage.setItem("lessons", JSON.stringify(lessons));
  }, [lessons]);

  const handleAddLesson = (newLesson) => {
    if (editingLesson) {
      setLessons((prev) =>
        prev.map((l) => (l.id === editingLesson.id ? { ...newLesson, id: l.id } : l))
      );
      setEditingLesson(null);
    } else {
      setLessons((prev) => [...prev, { ...newLesson, id: Date.now() }]);
    }
  };

  const handleDeleteLesson = (id) => {
    setLessons((prev) => prev.filter((l) => l.id !== id));
  };

  const handleToggleCompleted = (id) => {
    setLessons((prev) =>
      prev.map((l) => (l.id === id ? { ...l, completed: !l.completed } : l))
    );
  };

  const handleEditLesson = (lesson) => {
    setEditingLesson(lesson);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => setEditingLesson(null);

  let displayedLessons = lessons.filter((l) =>
    l.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (selectedLevel !== "All") {
    displayedLessons = displayedLessons.filter((l) => l.level === selectedLevel);
  }
  if (sortOrder === "title") {
    displayedLessons = [...displayedLessons].sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOrder === "duration") {
    displayedLessons = [...displayedLessons].sort((a, b) => a.duration - b.duration);
  }

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <StatsBlock lessons={lessons} />
        <SearchBar searchTerm={searchTerm} onSearchChange={(e) => setSearchTerm(e.target.value)} />
        <FilterPanel
          selectedLevel={selectedLevel}
          onLevelChange={(e) => setSelectedLevel(e.target.value)}
          sortOrder={sortOrder}
          onSortChange={(e) => setSortOrder(e.target.value)}
        />
        <LessonForm
          onAddLesson={handleAddLesson}
          editingLesson={editingLesson}
          onCancelEdit={handleCancelEdit}
        />
        <LessonList
          lessons={displayedLessons}
          onDeleteLesson={handleDeleteLesson}
          onToggleCompleted={handleToggleCompleted}
          onEditLesson={handleEditLesson}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Home;