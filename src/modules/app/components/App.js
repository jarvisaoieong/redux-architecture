import React, {Component} from 'react';

import CounterContainer from './CounterContainer';
import CounterPairContainer from './CounterPairContainer';
import CounterListContainer from './CounterListContainer';
import CounterFancyContainer from './CounterFancyContainer';
import RandomGifContainer from './RandomGifContainer';
import RandomGifPairContainer from './RandomGifPairContainer';
import RandomGifListContainer from './RandomGifListContainer';

export default () =>
  <div>
    <h2>1. Counter</h2>
    <CounterContainer />
    <hr/>
    <h2>2. CounterPair</h2>
    <CounterPairContainer />
    <hr/>
    <h2>3. CounterList</h2>
    <CounterListContainer />
    <hr/>
    <h2>4. CounterFancy</h2>
    <CounterFancyContainer />
    <hr/>
    <h2>5. RandomGif</h2>
    <RandomGifContainer />
    <hr/>
    <h2>6. RandomGifPair</h2>
    <RandomGifPairContainer />
    <hr/>
    <h2>7. RandomGifList</h2>
    <RandomGifListContainer />
  </div>
