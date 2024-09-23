import React from 'react';
import './index.css';
import './transitions.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
import TransitionWrapper from './TransitionWrapper';

function App() {
  return (
    <BrowserRouter>
      <div className="App overflow-x-hidden">
        <TransitionWrapper>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/explore" element={<Services />} />
            <Route path="/support" element={<Contact />} />
            <Route path="/blog1" element={<Blog1 />} />
            <Route path="/blog2" element={<Blog2 />} />
            <Route path="/blog3" element={<Blog3 />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </TransitionWrapper>
      </div>
    </BrowserRouter>
  );
}

export default App;
