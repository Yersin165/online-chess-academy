import React from "react";
import Button from "../components/Button";
import LessonCard from "../components/LessonCard";
import ChessTip from "../components/ChessTip";
import Counter from "../components/Counter";
import ContactForm from "../components/ContactForm";

function Home() {

  const startLearning = () => {
    alert("Welcome to your first lesson!");
  };

  return (
    <div>
      <h2>Welcome to Online Chess Academy</h2>

      <Button text="Start Learning" onClick={startLearning} />

      <LessonCard
        title="Opening Principles"
        description="Learn how to control the center and develop pieces."
      />

      <LessonCard
        title="Basic Tactics"
        description="Understand forks, pins, and skewers."
      />

      <ChessTip />

      <Counter />

      <ContactForm />
    </div>
  );
}

export default Home;