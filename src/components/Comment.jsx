import React from 'react';
import Reply from './Reply';

const Comment = function comment({ userName, createdAt, comment, replies }) {
  return (
    <div>
      <div className='feedComment'>
        <dl>
          <dt>
            <span className='userName'>{userName} </span>
            <em>{createdAt}</em>
          </dt>
          <dd>{comment}</dd>
        </dl>
        <div className='btn-group'>
          <button className='button.icon'>
            <i className='fas fa-arrow-right'></i>
            답글
          </button>
        </div>
      </div>

      {replies &&
        replies.list.map(comment => {
          return <Reply key={comment.id} {...comment} />;
        })}
    </div>
  );
};

export default Comment;
