import React, { Fragment } from 'react';
import Header from './Header';
import Feeds from './Feeds';
import Footer from './Footer';
import GlobalStyle from './styles/GlobalStyle';
function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Feeds />
      <Footer />
    </Fragment>
  );
}

export default App;
