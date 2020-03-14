import React from 'react';
import Item from './components/Item';
import './Feeds.scss';
import Masonry from 'react-masonry-css';

function Feeds() {
  return (
    <main id='Feeds' className='items'>
      <div className='container'>
        <h2 className='title'>Feed</h2>
        <h3>최신 패션 뉴스를 전해드립니다.</h3>
        <Masonry
          breakpointCols={3}
          className='my-masonry-grid'
          columnClassName='my-masonry-grid_column'
        >
          <div className='item'>
            11111111111 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1 item1 item1 item1 item1
            item1
          </div>
          <div className='item'>
            2222222222 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1
            item1 item1
          </div>
          <div className='item'>
            33333333 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1
            item1 item1
          </div>
          <div className='item'>
            44 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1
            item1
          </div>
          <div className='item'>
            55 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1
            item1
          </div>
          <div className='item'>
            66 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1
            item1
          </div>
          <div className='item'>77</div>
          <div className='item'>
            88 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1item1 item1 item1 item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1 item1 item1 item1
            item1 item1 item1 item1 item1 item1 item1 item1 item1 item1 item1item1 item1 item1 item1
            item1
          </div>
          <div className='item'>item4</div>
          <div className='item'>item5</div>
          <div className='item'>item1</div>
          <div className='item'>item2</div>
          <div className='item'>item3</div>
          <div className='item'>item4</div>
          <div className='item'>item5</div>
          {/* <Item /> */}
        </Masonry>
      </div>
    </main>
  );
}

export default Feeds;
