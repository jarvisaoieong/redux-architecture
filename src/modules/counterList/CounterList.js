import React, {Component} from 'react';
import _ from 'lodash';

import Counter from 'modules/counter/Counter'
import {add, modify, remove} from './counterListActions';

export default class CounterList extends Component {

  render() {
    const {model, dispatch} = this.props;

    return (
      <div>
        <button
          style={{width: '100px'}}
          onClick={() => dispatch(add())}
        >
          ADD
        </button>
        <button
          style={{width: '100px'}}
          onClick={() => dispatch(remove())}
        >
          REMOVE
        </button>
        {
          _.map(model.counters, (counter) =>
            <Counter {...{
              key: counter.id,
              model: counter.data,
              dispatch: (action) => dispatch(modify(counter.id, action)),
            }} />
          )
        }
      </div>
    );
  }

}
