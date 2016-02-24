import React, {Component} from 'react';

import Counter from 'modules/counter/Counter'
import {remove, modify} from './counterFancyActions';

export default class CounterWithRemoveButton extends Component {

  render() {
    const {model, dispatch} = this.props;

    return (
      <div>
        <div style={{float: 'left'}}>
          <Counter {...{
            model: model.data,
            dispatch: (action) => dispatch(modify(model.id, action)),
          }} />
        </div>
        <div style={{float: 'left'}}>
          <button
            style={{width: '150px'}}
            onClick={() => dispatch(remove(model.id))}
          >
            REMOVE
          </button>
        </div>
        <div style={{clear: 'both'}}></div>
      </div>
    );
  }

}
