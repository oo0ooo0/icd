import React, { useEffect, useCallback, useRef, useState } from 'react';

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
    <div className='Item'>
      <figure className='item-image-wrap'>
        <img width={'100%'} src={mediaList[0].url} className='item-image' />
      </figure>
      <figure className='item-md'>
        <img src={mdThumb} className='item-md-image' />
        <figcaption className='item-md-name'>{mdName}</figcaption>
      </figure>
      <article className='item-info'>
        {tags.map((tag, index) => {
          return <h4 key={index}>#{tag}</h4>;
        })}
        {/* <h4 className='item-tags'>{itemTags}</h4> */}
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
            <i class='far fa-heart'></i>
            <span>{likedCount}</span>
          </li>
          <li>
            <i class='far fa-comment-alt'></i>
            <span>{replyCount}</span>
          </li>
          <li>
            <i class='fab fa-facebook-square'></i>
            <span>{sharedCount}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Item;
