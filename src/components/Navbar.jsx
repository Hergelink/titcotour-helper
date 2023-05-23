import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

export default function Navbar() {
  return (
    <div className='navbarContainer'>
      <div className='logoContainer'>
        <img src={logo} alt='logo' />
      </div>
      <div className='navbarLinks'>
        <ul>
        <li>
            <Link to='/'>Ana Panel</Link>
          </li>
          <li>
            <Link to='/pitch'>Teklif Olusturucu</Link>
          </li>
          <li>
            <Link to='/translate'>Ceviri</Link>
          </li>
          <li>
            <Link to='/tour-advice'>Tur Onerileri</Link>
          </li>
          <li>
            <Link to='/email-writer'>Email Hazirlayici</Link>
          </li>
          <li>
            <Link to='/tahsilat-yazisi'>Tahsilat Yazisi</Link>
          </li>
          <li>
            <Link to='/negotiation'>Pazarlık Yapıcı</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
