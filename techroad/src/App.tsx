import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Header from "./pages/main/Header";
import MainContent from "./pages/main/MainContent";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <MainContent />
      </div>
    </Router>
  );
};

export default App;
