import React, {Component} from 'react';
import _ from 'lodash';

import CounterWithRemoveButton from './CounterWithRemoveButton'
import {add, modify} from './counterFancyActions';

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
        {
          _.map(model.counters, (counter) =>
            <CounterWithRemoveButton {...{
              key: counter.id,
              model: counter,
              dispatch,
            }} />
          )
        }
      </div>
    );
  }

}
