import React, { useEffect, useCallback, useRef, useState } from 'react';

const Item = ({ itemImage, mdImage, mdName, itemTags, itemText, itemDate }) => {
  return (
    <div className='Item'>
      <figure className='item-image-wrap'>
        <img src={itemImage} className='item-image' />
      </figure>
      <figure className='item-md'>
        <img src={mdImage} className='item-md-image' />
        <figcaption className='item-md-name'>{mdName}</figcaption>
      </figure>
      <article className='item-info'>
        <h4 className='item-tags'>{itemTags}</h4>
        <p className='item-text'>{itemText}</p>
      </article>
      <div className='item-footer'>
        <em className='item-date'>{itemDate}</em>
        <ul>
          <li>
            <i class='far fa-heart'></i>
            <span>1</span>
          </li>
          <li>
            <i class='far fa-comment-alt'></i>
            <span>2</span>
          </li>
          <li>
            <i class='fab fa-facebook-square'></i>
            <span>3</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

Item.defaultProps = {
  itemImage:
    'https://s3.ap-northeast-2.amazonaws.com/dcode-prod-bucket/feeds/boss20aw/1582624455-c2c753e478bd4ff7.jpg',
  mdImage:
    'https://s3.ap-northeast-2.amazonaws.com/dcode-prod-bucket//mdInfo/thumb/1542106760-3e82774178a54270.JPG',
  mdName: 'md 이름',
  itemTags: '#태그입니당 #태그',
  itemText:
    '아이템 설명아이템 설명아이템 설명아이템 설명아이템 설명아이템 설명아이템 설명아이템 설명아이템 설명아이템 설명아이템 설명아이템 설명아이템아이템 설명아이템 설명아이템 설명아이템 설명아이템 설명아이템 설명아이템 설명아이템 설명 설명아이템 설명',
  itemDate: '0000. 00. 00',
};

export default Item;
