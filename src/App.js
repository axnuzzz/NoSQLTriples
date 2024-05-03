import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QueryForm from './QueryForm';
import UpdateForm from './UpdateForm';
import MergeControls from './MergeControls';
import Navbar from './Navbar';
import TripleStorePage from './TripleStorePage';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Render the Navbar component */}
          <TripleStorePage />
        <Routes>
          <Route path="/query" element={<QueryForm />} />
          <Route path="/update" element={<UpdateForm />} />
          <Route path="/merge" element={<MergeControls />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
