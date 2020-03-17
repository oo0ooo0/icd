import React, { useEffect, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';

const StyledComment = styled.div``;

const Comment = props => {
  console.log(props);
  return (
    <StyledComment>
      <div className='feedComment'>
        <dl>
          <dt>
            <span className='typo_subline__2kRvR userName name'>{props.userName} </span>
            <em>{props.createdAt}</em>
          </dt>
          <dd>{props.comment}</dd>
        </dl>
        <div className='btn-group'>
          <button className='button.icon_btnIcon__3UgEM btnReply btn-sm'>
            <i> ㄴ </i>
            답글
          </button>
        </div>
      </div>
    </StyledComment>
  );
};

export default Comment;
