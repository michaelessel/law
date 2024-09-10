import React from 'react';
import { Footer, Navbar, FooterBanner } from './components';
import { Home, OurStaff, PracticeArea, Contact, NotFoundPage } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='bg-gray-50'>
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route exact={true} path='/' element={<Home />} />
        <Route path='/our-staff' element={<OurStaff />} />
        <Route path='/practice-area' element={<PracticeArea />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      {/* Footer */}
      <FooterBanner />
      <Footer />
    </div>
  );
}

export default App;
