import React, { useEffect, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import Reply from './Reply';

const StyledComment = styled.div``;

const Comment = function comment({ userName, createdAt, comment, replies }) {
  return (
    <StyledComment>
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
      {/* A &&  = A 가존재할떄  */}

      {replies &&
        replies.list.map(comment => {
          return <Reply key={comment.id} {...comment} />;
        })}
    </StyledComment>
  );
};

export default Comment;
