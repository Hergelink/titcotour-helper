import React from 'react';

export default function TourAdvice() {
  return (
    <section>
      <h1>Tur Önerileri</h1>
      <div className='contextWrapper'>
        <form>
          <label>
            Ülke
            <input type='text' />
          </label>
          <label>
            Şehir
            <input type='text' />
          </label>
          <div className='peopleCount'>
            <label>
              Yetişkin
              <select name='adult' id=''>
                <option value='zero'>0</option>
                <option value='one'>1</option>
                <option value='two'>2</option>
                <option value='three'>3</option>
                <option value='four'>4</option>
                <option value='five'>5</option>
                <option value='six'>6</option>
                <option value='seven'>7</option>
                <option value='eight'>8</option>
                <option value='nine'>9</option>
                <option value='ten'>10</option>
                <option value='eleven'>11</option>
                <option value='twelve'>12</option>
                <option value='thirteen'>13</option>
                <option value='fourteen'>14</option>
                <option value='fifteen'>15</option>
              </select>
            </label>
            <label>
              Çocuk
              <select name='child' id=''>
                <option value='zero'>0</option>
                <option value='one'>1</option>
                <option value='two'>2</option>
                <option value='three'>3</option>
                <option value='four'>4</option>
                <option value='five'>5</option>
                <option value='six'>6</option>
                <option value='seven'>7</option>
                <option value='eight'>8</option>
                <option value='nine'>9</option>
                <option value='ten'>10</option>
                <option value='eleven'>11</option>
                <option value='twelve'>12</option>
                <option value='thirteen'>13</option>
                <option value='fourteen'>14</option>
                <option value='fifteen'>15</option>
              </select>
            </label>
          </div>
          <label>
              Mevsim
              <select name='adult' id='' className='seasons'>
                <option value='spring'>İlkbahar</option>
                <option value='summer'>Yaz</option>
                <option value='autumn'>Sonbahar</option>
                <option value='winter'>Kış</option>
                
              </select>
            </label>
          <button type='submit'>Oluştur</button>
        </form>
        <textarea
          name='output'
          rows='10'
          placeholder='Tur önerisi burada gözükecektir'
        ></textarea>
      </div>
    </section>
  );
}
