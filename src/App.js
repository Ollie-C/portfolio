import React from "react";
import "./styles/App.scss";
import { About, Header, Projects, Skills, Footer } from "./container";
import { Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
