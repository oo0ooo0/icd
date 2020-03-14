import React, { Fragment } from 'react';
import './App.css';
import './Reset.css';
import Header from './Header';
import Feeds from './Feeds';
import Footer from './Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <Feeds />
      <Footer />
    </Fragment>
  );
}

export default App;
