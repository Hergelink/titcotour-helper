import React, { useState } from 'react';
import Spinner from '../Spinner';

export default function Translate() {
  const [loading, setLoading] = useState(false);
  const [turkishText, setTurkishText] = useState('');
  const [translatedText, setTranslatedText] = useState(
    'sonuc burada gozukecektir'
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT}/openai/translate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: turkishText }),
    });

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
      <h1>Çeviri 🇹🇷 &rarr; 🇬🇧
 </h1>
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
            placeholder='Sonuc burada gözükecektir'
            readOnly
          ></textarea>
          <div className='buttonContainer'>
            <button onClick={handleCopy} className='copyBtn'>
              Kopyala
            </button>
            <button className='deleteBtn' onClick={handleOutputDelete}>Sil</button>
          </div>
        </div>
      </div>
    </section>
  );
}
