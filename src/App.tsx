import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';


function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="font-Inter min-h-screen bg-gray-100 dark:bg-zinc-950 text-black dark:text-white relative overflow-auto m-0 p-0 nocaret">
        <div className="max-w-3xl mx-auto min-h-screen bg-white dark:border-zinc-800 border-zinc-200 border-2 dark:bg-zinc-950">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
