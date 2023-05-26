import React, { useState } from 'react';
import Spinner from '../Spinner';

export default function Translate() {
  const [loading, setLoading] = useState(false);
  const [turkishText, setTurkishText] = useState('');
  const [translatedText, setTranslatedText] = useState(
    'sonuc burada gozukecektir'
  );
  const [postRoute, setPostRoute] = useState('translate');

  const handleRouteChange = (e) => {
    setPostRoute(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(
      `${process.env.REACT_APP_ENDPOINT}/openai/${postRoute}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: turkishText }),
      }
    );

    const data = await response.json();
    setTranslatedText(data.data);
    setLoading(false);
  };

  const handleCopy = async (e) => {
    await navigator.clipboard.writeText(translatedText);
  };

  const handleDelete = () => {
    setTurkishText('');
  };

  const handleOutputDelete = () => {
    setTranslatedText('');
  };

  return (
    <section>
      <h1>
        Çeviri{' '}
        {postRoute === 'translate-to-turkish'
          ? '🇬🇧 \u2192 🇹🇷'
          : postRoute === 'grammer-check'
          ? '🇬🇧 \u2192 🇬🇧'
          : '🇹🇷 \u2192 🇬🇧'}
      </h1>
      <select
        className='routeChanger'
        defaultValue='translate'
        onChange={handleRouteChange}
      >
        <option value='translate'>Türkçeden İngilizceye</option>
        <option value='translate-to-turkish'>İngilizceden Türkçeye</option>
        <option value='grammer-check'>İngilizceyi Düzenle</option>
      </select>
      <div className='contextWrapper'>
        <form onSubmit={handleSubmit}>
          <label>
            Turkce Yazi
            <textarea
              rows='10'
              value={turkishText}
              onChange={(e) => setTurkishText(e.target.value)}
            ></textarea>
          </label>
          <div className='buttonContainer'>
            <button type='submit'>{loading ? <Spinner /> : 'Çevir'}</button>
            <button type='button' className='deleteBtn' onClick={handleDelete}>
              Sil
            </button>
          </div>
        </form>
        <div className='outputContainer'>
          <textarea
            name='output'
            rows='10'
            value={translatedText}
            placeholder='Sonuç burada gözükecektir'
            readOnly
          ></textarea>
          <div className='buttonContainer'>
            <button onClick={handleCopy} className='copyBtn'>
              Kopyala
            </button>
            <button className='deleteBtn' onClick={handleOutputDelete}>
              Sil
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
