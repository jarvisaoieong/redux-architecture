import React, {Component} from 'react';

import Counter from 'components/counter/Counter'
import {modifyFirst, modifySecond} from './counterPairActions';

export default class CounterPair extends Component {

  render() {
    const {model, dispatch} = this.props;

    return (
      <div>
        <Counter {...{
          model: model.first,
          dispatch: (action) => dispatch(modifyFirst(action)),
        }} />
        <Counter {...{
          model: model.second,
          dispatch: (action) => dispatch(modifySecond(action)),
        }} />
      </div>
    );
  }

}
