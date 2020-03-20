import React from 'react';
const Reply = function comment({ userName, createdAt, comment }) {
  return (
    <div>
      <div className='reply-list feedComment'>
        <dl>
          <dt>
            <i className='fas fa-arrow-right reply_icon'></i>
            <span className='userName reply-userName'>{userName}</span>
            <em>{createdAt}</em>
          </dt>
          <dd>{comment}</dd>
        </dl>
      </div>
    </div>
  );
};

export default Reply;
