import React from 'react';
import styled from 'styled-components';
import LayoutContainer from './components/LayoutContainer';

const StyledHeader = styled.header`
  .top-menu-wrap {
    background-color: rgba(0, 0, 0, 0.1);

    .top-menu {
      display: flex;
      justify-content: flex-end;

      li {
        background-color: rgba(0, 0, 0, 0.1);
        margin-left: 10px;

        a {
        }
      }
    }
  }

  .main-menu-wrap {
    display: flex;
  }

  .logo {
    h1 {
      a {
      }
    }
  }

  .gnb {
    width: 100%;
    display: flex;
    // background-color: rgba(255, 0, 0, 0.1);

    ul {
      width: 100%;
      // background-color: rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: space-around;
      align-items: center;

      li {
        a {
        }
      }
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <LayoutContainer>
        <div className='top-menu-wrap'>
          <ul className='top-menu'>
            <li>
              <a href='#'>로그인</a>
            </li>
            <li>
              <a href='#'>회원가입</a>
            </li>
            <li>
              <a href='#'>고객센터</a>
            </li>
          </ul>
        </div>
        {/* //topMenu */}

        <div className='main-menu-wrap'>
          <div className='logo'>
            <h1>
              <a href='#'>d.code</a>
            </h1>
          </div>
          {/* //logo */}

          <div className='gnb'>
            <ul>
              <li>
                <a href='#'>PRE-ORDER</a>
              </li>
              <li>
                <a href='#'>PROMOTION</a>
              </li>
              <li>
                <a href='#'>BRAND</a>
              </li>
              <li>
                <a href='#'>MEN</a>
              </li>
              <li>
                <a href='#'>WOMEN</a>
              </li>
              <li>
                <a href='#'>FEED</a>
              </li>
            </ul>
          </div>
          {/* //gnb */}

          {/* <div className='search-wrap'>
            <div className='search'>
              <input type='text' className='input-search' placeholder='검색'></input>
              <button type='button' className='btn-search'>
                <i className='fas fa-search' />
              </button>
              <button type='button' className='btn-cart'>
                <i className='fas fa-shopping-cart' />
              </button>
            </div>
          </div> */}
          {/* //search */}
        </div>
      </LayoutContainer>
    </StyledHeader>
  );
}

export default Header;
