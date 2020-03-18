import React from 'react';
import styled from 'styled-components';
const StyledReply = styled.div``;

const Reply = function comment({ userName, createdAt, comment }) {
  return (
    <StyledReply>
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
    </StyledReply>
  );
};

export default Reply;
