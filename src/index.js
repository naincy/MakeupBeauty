import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import './globals/css/breakpoints.scss';
import './globals/css/common.scss';

import Header from './components/header/index';
import Footer from './components/footer/index';
import Herobanner from './components/herobanner/index';
import TrendingNow from './components/trendingnow';

export default class App  extends Component{
  render(){
    return (
      <Fragment>
        <Header />
        <Herobanner />
        <TrendingNow />
        <Footer />
      </Fragment>

    );
  }
}


ReactDOM.render(<App />, document.getElementById('application'));