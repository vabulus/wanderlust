import React, { lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";




import MapOverview from "./pages/MapOverview";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<MapOverview />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
