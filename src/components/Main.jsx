import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './sub-components/Landing';
import Pitch from './sub-components/Pitch';
import Translate from './sub-components/Translate';
import TourAdvice from './sub-components/TourAdvice';
import Negotiation from './sub-components/Negotiation'
export default function Main() {
  return (
    <div className='mainContainer'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/pitch' element={<Pitch />} />
        <Route path='/translate' element={<Translate />} />
        <Route path='/tour-advice' element={<TourAdvice />} />
        <Route path='/negotiation' element={<Negotiation />} />
      </Routes>
    </div>
  );
}
