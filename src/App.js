import React, { Fragment } from 'react';
import Header from './Header';
import Feeds from './Feeds';
import Footer from './Footer';
import GlobalStyle from './styles/GlobalStyle';
import { MainContainer } from './components/Containers';
import FeedDetail from './components/FeedDetail';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <MainContainer>
        <Route path={'/'} exact>
          <Feeds />
        </Route>
      </MainContainer>

      <Route path={'/feed/:id'}>
        <FeedDetail />
      </Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
