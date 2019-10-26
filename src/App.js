import React from "react";

import "./App.css";
import Header from "./components/Header";
import About from "./components/main/About";
import Features from "./components/main/Features";
import Tours from "./components/main/Tours";
import Stories from "./components/main/Stories";
import Book from "./components/main/Book";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="body">
        <Header />
        <div className="main">
          <About />
          <Features />
          <Tours />
          <Stories />
          <Book />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
