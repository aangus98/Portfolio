import React from "react";
import "./index.css";
import Map from "./components/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
