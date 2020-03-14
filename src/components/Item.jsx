import React, { useEffect, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import LikedButton from './LikedButton';
import FeedText from './FeedText';

import { Link } from 'react-router-dom';

const StyledItem = styled.div`
  .item-image-wrap {
    .item-image {
      width: 100%;
    }
  }
  .item-md {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .item-md-image {
      padding-top: 10px;
      margin-right: 10px;
      height: 70px;
    }
    .item-md-name {
      font-size: 20px;
      line-height: 60px;
    }

    .item-info {
      .tags {
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        h4 {
          margin-right: 10px;
        }
      }
    }
  }

  .item-footer {
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #999;

    ul {
      display: flex;
      li {
        margin-left: 10px;
        i {
          margin-right: 5px;
        }
      }
    }
    .item-date {
      font-style: italic;
    }
  }
`;

const Item = ({
  id,
  mediaList,
  text,
  mdInfo: { mdName, mdThumb },
  likedCount = 0,
  replyCount = 0,
  sharedCount = 0,
  tags,
  createdAt,
}) => {
  const [isLiked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!isLiked);
  };

  return (
    <StyledItem>
      <Link
        to={{ pathname: `/feed/${id}`, state: { id, tags, text, mediaList, mdName, createdAt } }}
      >
        <figure className='item-image-wrap'>
          <img src={mediaList[0].url} className='item-image' />
        </figure>

        <figure className='item-md'>
          <img src={mdThumb} className='item-md-image' />
          <figcaption className='item-md-name'>{mdName}</figcaption>
        </figure>
        <article className='item-info'>
          <div className='tags'>
            {tags.map((tag, index) => {
              return <h4 key={index}>#{tag}</h4>;
            })}
          </div>
          <FeedText className='item-text'>{text}</FeedText>
        </article>
      </Link>
      <div className='item-footer'>
        <em className='item-date'>{createdAt}</em>
        <ul>
          <li onClick={handleClick}>
            <LikedButton color={isLiked ? 'red' : 'lightGray'}>
              <i className='fas fa-heart'></i>
            </LikedButton>
            <span>{likedCount}</span>
          </li>
          <li>
            <i className='far fa-comment-alt'></i>
            <span>{replyCount}</span>
          </li>
          <li>
            <i className='fab fa-facebook-square'></i>
            <span>{sharedCount}</span>
          </li>
        </ul>
      </div>
    </StyledItem>
  );
};

export default Item;
