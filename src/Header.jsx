import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  .header-cont {
    width: 92%;
    margin: auto;
  }
  .top-menu-wrap {
    margin-top: 10px;
    .top-menu {
      display: flex;
      justify-content: flex-end;

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
    .header-cont {
      display: flex;

      .logo {
        display: flex;
        align-items: center;
        h1 {
          a {
          }
        }
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
  }
`;

function Header() {
  return (
    <StyledHeader>
      <div className='top-menu-wrap'>
        <div className='header-cont'>
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
      </div>
      {/* //topMenu */}

      <div className='main-menu-wrap'>
        <div className='header-cont'>
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
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
