import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Privacy from './components/Privacy';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white overflow-x-hidden flex flex-col">
        <Routes>
          {/* Landing page - full screen, no header */}
          <Route path="/" element={<Hero />} />
          {/* Other pages with header */}
          <Route path="/privacy" element={
            <>
              <Header />
              <main className="flex-grow flex flex-col">
                <Privacy />
              </main>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;