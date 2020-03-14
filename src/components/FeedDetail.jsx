import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const StyledFeedDetailWrapper = styled.div`
  float: left;
  position: relative;

  .media-list-area {
    width: 38%;
    img {
      width: 100%;
    }
  }
  .board-area {
    top: 230px;
    left: 40%;
    position: fixed;
    width: 56%;
    .board {
      width: 100%;
      background-color: yellow;
    }
  }
`;

function FeedDetail() {
  const location = useLocation();
  const { id, tags, text, mediaList, mdName, createdAt } = location.state;
  // console.log(location);
  return (
    <div className='clearfix'>
      <StyledFeedDetailWrapper>
        <div className='media-list-area'>
          {mediaList.map((media, index) => {
            return <img key={index} src={media.url}></img>;
          })}
        </div>

        <div className='board-area'>
          <div className='board'>
            <span>{mdName}</span>
            <em>{createdAt}</em>
            <h1>title</h1>
            <p>{text}</p>
            {tags.map((tag, index) => {
              return <span key={index}>#{tag}</span>;
            })}
          </div>
        </div>
      </StyledFeedDetailWrapper>
    </div>
  );
}

export default FeedDetail;
