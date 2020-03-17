import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import { useSelector } from 'react-redux';

const StyledComments = styled.div``;

function Comments() {
  const comments = useSelector(state => state.comments);
  // console.log(comments.data.list);
  // const roots = numbers.map(Math.sqrt);
  window.comments = comments.data.list;

  return (
    <StyledComments>
      <h2 className='comment-title'>COMMENTS</h2>
      <div className='comment_comment-box'>
        <textarea
          className='input.textarea_comment'
          placeholder='내용을 입력하세요.'
          rows='2'
          name=''
        ></textarea>
        <button className='button_comment'>댓글 등록</button>
      </div>
      {comments.data.list.map(comment => {
        console.log(comment);
        console.log(comment.id);
        return <Comment key={comment.id} {...comment} />;
      })}
    </StyledComments>
  );
}

export default Comments;
