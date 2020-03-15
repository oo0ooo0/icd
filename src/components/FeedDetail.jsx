import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FeedText from './FeedText';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import { createTitle } from '../utils/common';
import { useSelector } from 'react-redux';

const FOOTER_HEIGHT = 318;

const StyledFeedDetailWrapper = styled.div`
  position: relative;
  display: flex;

  .media-list-area {
    flex: none;
    margin-left: 4%;
    width: 34%;
    img {
      width: 100%;
    }
  }
`;

const BoardArea = styled.div`
  padding: 38px 0;
  border-top: 2px solid #1d1e21;
  border-bottom: 1px solid #e3e3e2;
  width: 56%;
  max-width: 990px;
  flex: none;
  position: ${props => (props.isScrolled ? `absolute` : 'fixed')};
  top: ${props => (props.isScrolled ? 'inherit' : '230px')};
  bottom: ${props => (props.isScrolled ? '0' : 'inherit')};
  left: 40%;
  .board {
    width: 100%;
    background-color: yellow;
  }
`;

function FeedDetail() {
  const history = useHistory();
  const params = useParams();
  const location = useLocation();
  const mediaListRef = useRef(null);
  const boardRef = useRef(null);
  const [isScrolled, setScrolled] = useState(false);

  const item = useSelector(state => state.feeds[params.id] || null);

  const handleScrollEvent = event => {
    if (mediaListRef.current && boardRef.current) {
      const boardRect = boardRef.current.getBoundingClientRect();

      if (document.body.clientHeight - (FOOTER_HEIGHT + boardRect.height) - 230 < window.scrollY) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };
  useEffect(() => {
    if (mediaListRef.current) {
      window.addEventListener('scroll', handleScrollEvent);
    }
    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);
  if (!item) {
    history.push('/');
    return null;
  }
  const { tags, text, mediaList, mdName, createdAt } = item;

  return (
    <StyledFeedDetailWrapper>
      <div className='media-list-area' ref={mediaListRef}>
        {mediaList.map((media, index) => {
          return <img key={index} src={media.url}></img>;
        })}
      </div>

      <BoardArea isScrolled={isScrolled} className='board-area' ref={boardRef}>
        <div className='board'>
          <span>{mdName}</span>
          <em>{createdAt}</em>
          <h1>{createTitle(text)}</h1>
          <FeedText>{text}</FeedText>
          {tags.map((tag, index) => {
            return <span key={index}>#{tag}</span>;
          })}
        </div>
      </BoardArea>
    </StyledFeedDetailWrapper>
  );
}

export default FeedDetail;
