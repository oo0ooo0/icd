import React from 'react';
import styled from 'styled-components';
import Item from './components/Item';
import Masonry from 'react-masonry-css';
import dummyData from './dummy/feeds.json';

const StyledFeeds = styled.main`
  margin-top: 230px;
  .my-masonry-grid {
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: none;
    margin-bottom: 200px;
  }
`;

function Feeds() {
  const {
    data: { list: feeds },
  } = dummyData;
  console.log(feeds);
  return (
    <StyledFeeds>
      <h2 className='title'>Feed</h2>
      <h3>최신 패션 뉴스를 전해드립니다.</h3>
      <Masonry
        breakpointCols={3}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {feeds.map((feed, index) => {
          return <Item key={index} {...feed} />;
        })}
      </Masonry>
    </StyledFeeds>
  );
}

export default Feeds;
