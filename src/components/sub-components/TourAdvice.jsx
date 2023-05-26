import React, { useState } from 'react';
import Spinner from '../Spinner';

export default function TourAdvice() {
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [season, setSeason] = useState('ilkbahar');
  const [dayCount, setDayCount] = useState(1);

  const [tourInformation, setTourInformation] = useState('zero info');
  const [advisedTour, setAdvisedTour] = useState(
    'Tur Önerisi Burada Gözükecektir'
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTourInformation(`You are a great Travel Helper which gives detailed travel tips based on some info provided by a user. Please give great travel tips and tour guide advices for these info in turkish only:      
    Ülke: ${country}, Şehir: ${city}, Yetişkin Sayısı: ${adultCount}, Çocuk Sayısı: ${childCount}, Mevsim: ${season}, Toplam Gün Sayısı: ${dayCount}.`);

    const response = await fetch(
      `${process.env.REACT_APP_ENDPOINT}/openai/tour-advisor`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: tourInformation }),
      }
    );

    const data = await response.json();
    setAdvisedTour(data.data);
    setLoading(false);
  };

  return (
    <section>
      <h1>Tur Önerileri</h1>
      <div className='contextWrapper'>
        <form onSubmit={handleSubmit}>
          <label>
            Ülke:
            <input
              type='text'
              required
              onChange={(e) => setCountry(e.target.value)}
            />
          </label>
          <label>
            Şehir:
            <input type='text' onChange={(e) => setCity(e.target.value)} />
          </label>
          <div className='peopleCount'>
            <label>
              Yetişkin
              <select
                name='adult'
                id=''
                defaultValue={0}
                onChange={(e) => setAdultCount(e.target.value)}
              >
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
              </select>
            </label>
            <label>
              Çocuk
              <select
                name='child'
                defaultValue={0}
                onChange={(e) => setChildCount(e.target.value)}
              >
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
              </select>
            </label>
          </div>
          <label>
            Mevsim
            <select
              name='adult'
              id=''
              className='seasons'
              defaultValue={'ilkbahar'}
              onChange={(e) => setSeason(e.target.value)}
            >
              <option value='İlkbahar'>İlkbahar</option>
              <option value='Yaz'>Yaz</option>
              <option value='Sonbahar'>Sonbahar</option>
              <option value='Kış'>Kış</option>
            </select>
          </label>
          <label>
            Gün Sayısı
            <select
              defaultValue={1}
              onChange={(e) => setDayCount(e.target.value)}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
          </label>

          <button type='submit'>{loading ? <Spinner /> : 'Oluştur'}</button>
        </form>
        <textarea
          name='output'
          rows='10'
          value={advisedTour}
          placeholder='Tur önerisi burada gözükecektir'
        ></textarea>
      </div>
    </section>
  );
}
