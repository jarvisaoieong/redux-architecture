# redux-architecture

> elm architecture in redux

In classical Redux, which side effect is handled by thunk middleware, is not [fractal](http://staltz.com/unidirectional-user-interface-architectures.html) (a term that is nicely explained by @stalz)

Even with some new Redux additions, like redux-saga, are also not composable in a fractal way with the rest of architecture.

In order to make redux architecture fractal. I think [elm architecture](https://github.com/evancz/elm-architecture-tutorial/)
has found the proper way. Beside composing Views, State and Reducers (which are already composed in classical Redux), **Actions** and **Effects** should be composed too. All that leads to composition of application pieces at the higher level.

This repo is port of the elm architecture examples in redux with [redux-loop](https://github.com/raisemarketplace/redux-loop) to show the benefits of hierarchical composition everywhere. In this example, I used my fork of redux-logger to show how to trace async action logging with the help of redux-loop. (Please open the console in the [live demo](http://jarvisaoieong.github.io/redux-architecture/).)

With the help of redux-loop, we can make elm architecture to the mainstream.
