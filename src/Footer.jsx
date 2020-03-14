import React from 'react';
import styled from 'styled-components';
import LayoutContainer from './components/LayoutContainer';

const StyledFooter = styled.footer`
  .service-area {
    display: flex;
    > ul {
      width: 20%;
      background-color: rgba(255, 0, 0, 0.1);
      li {
        margin: 5px;
      }
    }
    .join-list {
      li a {
        font: normal 500 14px/42px 'Lato';
      }
    }
    .social {
      .social-icon {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .footer {
    > div {
      margin-top: 10px;
      text-align: center;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <LayoutContainer>
        <div className='service-area'>
          <ul className='join-list'>
            <li>
              <a href='#none'>엔코드</a>
            </li>
            <li>
              <a>로그인</a>
            </li>
            <li>
              <a>회원가입</a>
            </li>
          </ul>
          <ul className='Service-center'>
            <li>
              <h3>고객센터</h3>
              <ul>
                <li>
                  <a href='#none'>02-6204-0617‬</a>
                </li>
                <li>
                  <a>1:1 채팅문의</a>
                </li>
                <li>
                  <a>이용약관</a>
                </li>
                <li>
                  <a>개인정보처리방침</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className='dcode-info'>
            <li>
              <h3>ABOUT D.CODE</h3>
              <ul>
                <li>
                  <a href='http://home.itsdcode.com/' target='_blank'>
                    디코드 소개
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className='social'>
            <li>
              <h3>SOCIAL</h3>
              <ul className='social-icon'>
                <li>
                  <a
                    href='https://business.facebook.com/itsdcode/?business_id=1642748722674826'
                    target='_blank'
                  >
                    🎱
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/d.code_official/?hl=ko' target='_blank'>
                    🎱
                  </a>
                </li>
                <li>
                  <a href='https://itsdcode.blog.me/' target='_blank'>
                    🎱
                  </a>
                </li>
                <li>
                  <a href='https://brunch.co.kr/@zskeem' target='_blank'>
                    🎱
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className='application'>
            <li>
              <h3>APPLICATION</h3>
              <ul className='app-icon'>
                <li>
                  <a href='http://bit.ly/2swoxj8' target='_blank'>
                    <span className='icon-text'>
                      <i className='icon-ico apple'>🍏</i>
                    </span>
                    앱스토어
                  </a>
                </li>
                <li>
                  <a href='http://bit.ly/2tY1l1P' target='_blank'>
                    <span className='icon-text'>
                      <i className='icon-ico playstore'>🥥</i>
                    </span>
                    플레이스토어
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className='footer'>
          <div className='copyw'>ⓒ 2019 N.CODE, Inc. All Rights Reserved</div>
          <div className='address'>
            <p>(주)엔코드 대표 정준영 | 서울시 강남구 삼성로 81길 31</p>
            <p>
              통신판매업신고번호 2016-서울강남-03628 | 등록번호 260-86-00101{' '}
              <a href='http://www.ftc.go.kr/bizCommPop.do?wrkr_no=2608600101' target='_blank'>
                사업자정보확인
              </a>
            </p>
            <p>개인정보보호책임자 조용석 | 고객센터 전화문의 02-6204-0617</p>
            <p>FAX 02-6499-0617 | E-mail contact@itsdcode.com</p>
          </div>
        </div>
      </LayoutContainer>
    </StyledFooter>
  );
}

export default Footer;
