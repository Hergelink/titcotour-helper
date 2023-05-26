import React from 'react';
import { Link } from 'react-router-dom';
export default function Landing() {
  return (
    <section>
      <h1 id='dashboardTitle'>Ana Panel</h1>
      <div className='contextWrapper'>
        <div className='contextGrid'>
          <Link to='/translate' className='contextCard'>
            <h3>Çeviri</h3>
          </Link>
          <Link to='/pitch' className='contextCard'>
            <h3>Teklif Oluşturucu</h3>
          </Link>
          <Link to='/tour-advice' className='contextCard'>
            <h3>Tur Onerileri</h3>
          </Link>
          <Link to='/email-writer' className='contextCard'>
            <h3>Email Hazırlayıcı</h3>
          </Link>
          <Link to='/tahsilat-yazisi' className='contextCard'>
            <h3>Tahsilat Yazısı</h3>
          </Link>
          <Link to='/negotiation' className='contextCard'>
            <h3>Pazarlık Yapıcı</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}
