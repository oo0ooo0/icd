import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 10;

  .header-cont {
    width: 92%;
    margin: auto;
    display: flex;
  }

  .top-menu-wrap {
    margin-top: 10px;
    .top-menu {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      li {
        margin-left: 50px;

        a {
          font: normal 400 12px/1 'Lato';
          color: #707070;
        }
      }
    }
  }

  .main-menu-wrap {
    margin-top: 10px;
    border-top: 1px solid lightGray;
    border-bottom: 1px solid lightGray;
    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .gnb {
      width: 100%;
      display: flex;

      ul {
        margin-left: 200px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
          padding: 30px 0px;
          a {
            margin-top: 10px;
            display: inline-block;
            font: normal 900 17px/1 'Lato';
            color: #1d1e21;
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    /* header  */
    .main-menu-wrap {
      .header-cont {
        display: block;
        width: 100%;
        .gnb ul {
          justify-content: space-between;
          margin-left: 0px;
          padding: 0px 4%;
        }
      }
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className='top-menu-wrap'>
        <div className='header-cont'>
          <ul className='top-menu'>
            <li>
              <a href='#none'>로그인</a>
            </li>
            <li>
              <a href='#none'>회원가입</a>
            </li>
            <li>
              <a href='#none'>고객센터</a>
            </li>
          </ul>
        </div>
      </div>
      {/* //topMenu */}

      <div className='main-menu-wrap'>
        <div className='header-cont'>
          <div className='logo'>
            <h1>
              <a href='/'>d.code</a>
            </h1>
          </div>
          {/* //logo */}

          <div className='gnb'>
            <ul>
              <li>
                <a href='#none'>PRE-ORDER</a>
              </li>
              <li>
                <a href='#none'>PROMOTION</a>
              </li>
              <li>
                <a href='#none'>BRAND</a>
              </li>
              <li>
                <a href='#none'>MEN</a>
              </li>
              <li>
                <a href='#none'>WOMEN</a>
              </li>
              <li>
                <Link to={{ pathname: `/` }}>FEED</Link>
              </li>
            </ul>
          </div>
          {/* //gnb */}
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
