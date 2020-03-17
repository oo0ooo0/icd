import React, { useEffect, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';

const StyledComment = styled.div``;

const Comment = React.memo(function Comments({ id, userName, comment, createdAt }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'COMMENT_ADD', payload: { id, 댓글내용 } });
  };

  return (
    <StyledComments>
      <dl>
        <dt>
          <span className='typo_subline__2kRvR userName name'>설지*</span>
          <em>2019. 12. 29</em>
        </dt>
        <dd>한국에서도 출시 되나요..?</dd>
      </dl>
      <div className='btn-group'>
        <button className='button.icon_btnIcon__3UgEM btnReply btn-sm'>
          <i className='button.icon_icon__3G3H0 icon-ico_recomment_s'></i>
          답글
        </button>
      </div>
    </StyledComments>
  );
});

export default MemoizeComment;
