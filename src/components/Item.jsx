import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import LikedButton from './LikedButton';
import FeedText from './FeedText';

const StyledItem = styled.div`
  .item-image-wrap {
    .item-image {
      width: 100%;
    }
  }
  .item-md {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .item-md-image {
      padding-top: 10px;
      margin-right: 10px;
      height: 70px;
    }
    .item-md-name {
      font-size: 20px;
      line-height: 60px;
    }
  }
  .item-info {
    .tags {
      margin-bottom: 10px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      h4 {
        margin-right: 10px;
      }
    }
    ${FeedText} {
      max-height: 263px;
    }
  }

  .item-footer {
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #999;

    ul {
      display: flex;
      li {
        margin-left: 10px;
        i {
          margin-right: 5px;
        }
        a {
          color: #999;
        }
      }
    }
    .item-date {
      font-style: italic;
    }
  }
`;

const MemoizeItem = React.memo(function Item({
  id,
  mediaList,
  text,
  mdInfo: { mdName, mdThumb },
  likedCount = 0,
  replyCount = 0,
  sharedCount = 0,
  tags,
  createdAt,
  isLiked,
}) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'FEED_LIKE', payload: { id } });
  };

  const shareUrl = encodeURIComponent(`https://icd-lovat.now.sh/feed/${id}`);
  return (
    <StyledItem>
      <Link to={{ pathname: `/feed/${id}` }}>
        <figure className='item-image-wrap'>
          <img src={mediaList[0].url} className='item-image' alt='피드 대표이미지' />
        </figure>

        <figure className='item-md'>
          <img src={mdThumb} className='item-md-image' alt='엠디 이미지' />
          <figcaption className='item-md-name'>{mdName}</figcaption>
        </figure>
        <article className='item-info'>
          <div className='tags'>
            {tags.map((tag, index) => {
              return <h4 key={index}>#{tag}</h4>;
            })}
          </div>
          <FeedText className='item-text'>{text}</FeedText>
        </article>
      </Link>
      <div className='item-footer'>
        <em className='item-date'>{createdAt}</em>
        <ul>
          <li onClick={handleClick}>
            <LikedButton color={isLiked ? 'red' : 'lightGray'}>
              <i className='fas fa-heart'></i>
            </LikedButton>
            <span>{likedCount}</span>
          </li>
          <li>
            <i className='far fa-comment-alt'></i>
            <span>{replyCount}</span>
          </li>
          <li>
            <div
              data-href={`https://icd-lovat.now.sh/feed/${id}`}
              data-layout='button_count'
              data-size='small'
            >
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}%2F&amp;src=sdkpreparse`}
                className='fb-xfbml-parse-ignore'
              >
                <i className='fab fa-facebook-square'></i>
                <span>{sharedCount}</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </StyledItem>
  );
});

export default MemoizeItem;
