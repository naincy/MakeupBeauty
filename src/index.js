import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header/index';
import Footer from './components/footer/index';

export default class App  extends Component{
  render(){
    return (
      <Fragment>
        <Header />
        <Footer />
      </Fragment>

    );
  }
}


ReactDOM.render(<App />, document.getElementById('application'));