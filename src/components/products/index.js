import React, {Component, Fragment} from 'react';
import picturefill from '../../globals/js/picturefill';

import './css/index.scss';

class Products extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  render(){
    return(
       <section className="products-component grid-container">
          <div className="grid-row">
            <div className="list__header col-xs-12">
              <h2>NEW PRODUCTS</h2>
              <a className="prod-link">SEE ALL NEW ></a>
            </div>
            <div className="prodict-list">
              <div className="c-"></div>
              <div></div>
              <div></div>
            </div>
          </div>
       </section>
    )
  }
}

export default Products;