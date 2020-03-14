import React from 'react';
import Item from './components/Item';
import './Feeds.css';

function Feeds() {
  return (
    <main id='Feeds' className='items'>
      <div className='container'>
        <h2>Feed</h2>
        <h3>최신 패션 뉴스를 전해드립니다.</h3>
        <div className='item'>item</div>
        <div className='item'>item</div>
        <div className='item'>item</div>
        {/* <Item /> */}
      </div>
    </main>
  );
}

export default Feeds;
