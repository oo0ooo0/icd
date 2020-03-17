import React, { useEffect, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';

const StyledComments = styled.div``;

const MemoizeComments = React.memo(function Comments({}) {
  const dispatch = useDispatch();

  // const handleClick = () => {
  //   dispatch({ type: 'FEED_LIKE', payload: { id } });
  // };

  return (
    <StyledComments>
      <h2 className='comment-titlw'>COMMENTS</h2>
      <div className='comment_comment-box__2gj6A comment'>
        <textarea
          className='input.textarea_comment__3lhsE'
          placeholder='내용을 입력하세요.'
          rows='2'
          name=''
        ></textarea>
        <button className='button_comment'>댓글 등록</button>
      </div>
      <div className='reply-list feedComment '>
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
      </div>
      <div className='reply-list feedComment '>
        <dl>
          <dt>
            <span className='typo_subline__2kRvR userName name'>주재*</span>
            <em>2019. 12. 16</em>
          </dt>
          <dd>와 최애가수랑 hnm이..</dd>
        </dl>
        <div className='btn-group'>
          <button className='button.icon_btnIcon__3UgEM btnReply btn-sm'>
            <i className='button.icon_icon__3G3H0 icon-ico_recomment_s'></i>
            답글
          </button>
        </div>
      </div>
      <div className='reply-list feedComment m-l-10'>
        <i className='icon-ico_recomment_l pull-left m-r-4 c-cool-grey'></i>
        <dl>
          <dt>
            <span className='typo_subline__2kRvR userName name'>
              <i className='dcode'>d.code</i>
            </span>
            <em>2019. 12. 16</em>
          </dt>
          <dd>저번 달에 나온 곡도 좋더라구요 ?</dd>
        </dl>
        <div className='btn-group'>
          <button className='button.icon_btnIcon__3UgEM btnReply btn-sm'>
            <i className='button.icon_icon__3G3H0 icon-ico_recomment_s'></i>
            답글
          </button>
        </div>
      </div>
    </StyledComments>
  );
});

export default MemoizeComments;
