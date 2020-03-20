import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StyledComments = styled.div`
  width: 100%;
  padding: 35px 0 0;
  .comment-title {
    width: 100%;
    font-size: 18px;
    font-weight: 900;
    padding: 0 0 10px;
  }
  .comment-box {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;

    .textarea_comment {
      border: 1px solid gray;
      font: normal 500 15px/1.5 'Lato';
      padding: 10px 15px;
      width: calc(100% - 140px);
      height: 100%;
      border-radius: 0;
    }

    .button_comment {
      width: 134px;
      height: 100%;
      background: #1d1e21;
      font: normal 500 15px/2 'Lato';
      color: #fff;
    }
  }
  .feedComment {
    padding: 30px 0 20px;
    border-bottom: 1px solid #e3e3e2;
    dl {
      margin-bottom: 15px;
      font: 400 13px/1.5 'Lato';
      dt {
        margin-bottom: 10px;
        i.reply_icon {
          display: inline-block;
          font-size: 12px;
          margin-right: 8px;
          color: gray;
        }
        span {
          display: inline-block;
          font-size: 13px;
          min-width: 100px;
          padding-right: 20px;
        }
        em {
          font-size: 12px;
          color: #a6a7a9;
          font-style: normal;
          text-align: left;
        }
      }
      dd {
        line-height: 1.5;
      }
    }
    button {
      padding: 5px 8px;
      border: 1px solid lightGray;
      font-size: var(--tiny-font-size);
      letter-spacing: -0.3px;
      text-align: center;
      color: var(--charcoal-grey);
      i {
        color: lightGray;
        margin-right: 5px;
      }
    }
  }
  .reply-list {
    dl {
      margin-left: 30px;
    }
  }
`;

function Comments() {
  const params = useParams();
  const commentsId = useSelector(state => state.comments[params.id]);
  const comments = commentsId && commentsId.comments;

  return (
    <StyledComments>
      <h2 className='comment-title'>COMMENTS</h2>
      <div className='comment-box'>
        <textarea
          className='textarea_comment'
          placeholder='내용을 입력하세요.'
          rows='2'
          name=''
        ></textarea>
        <button className='button_comment'>댓글 등록</button>
      </div>

      {comments &&
        comments.map(comment => {
          return <Comment key={comment.id} {...comment} />;
        })}
    </StyledComments>
  );
}
export default Comments;
