import React, { useEffect, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
  .item-image-wrap {
    .item-image {
      width: 100%;
    }
  }
  .item-wrap {
    width: 92%;
    margin: 0 auto;
    .item-md {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .item-md-image {
        margin-right: 10px;
        border-radius: 50%;
        height: 50px;
      }
      .item-md-name {
        font-size: 20px;
        line-height: 1;
      }
    }

    .item-info {
      .tags {
        margin: 10px 0;
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
    ul {
      display: flex;
      li {
        margin-left: 10px;
        i {
          margin-right: 5px;
        }
      }
    }
  }
`;

const Item = ({
  mediaList,
  text,
  mdInfo: { mdName, mdThumb },
  likedCount = 0,
  replyCount = 0,
  sharedCount = 0,
  tags,
  createdAt,
}) => {
  return (
    <StyledItem>
      <figure className='item-image-wrap'>
        <img src={mediaList[0].url} className='item-image' />
      </figure>

      <div className='item-wrap'>
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
          <p
            className='item-text'
            dangerouslySetInnerHTML={{
              __html: text.replace(/\n/g, '<br/>'),
            }}
          ></p>
        </article>
        <div className='item-footer'>
          <em className='item-date'>{createdAt}</em>
          <ul>
            <li>
              <i className='far fa-heart'></i>
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
      </div>
    </StyledItem>
  );
};

export default Item;
