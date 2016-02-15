# redux-architecture

> elm architecture in redux

In classical [Redux](https://github.com/reactjs/redux), which side effect is handled by thunk middleware, is not [fractal](http://staltz.com/unidirectional-user-interface-architectures.html) (a term that is nicely explained by @stalz)

![](http://i.imgur.com/gRH1uvq.png)

Even with some new Redux additions, like redux-saga, are also not composable in a fractal way with the rest of architecture.

I think [elm architecture](https://github.com/evancz/elm-architecture-tutorial/)
has found the proper way to do it right. Beside composing Views, State and Reducers (which are already composed in classical Redux), **Actions** and **Effects** should be composed too. All that leads to composition of application pieces at the higher level.

![](http://i.imgur.com/NJWLXHz.png)

Redux is awesome. In order to make redux architecture fractal. We only need two adjustment in our application.

1. Use [redux-loop](https://github.com/raisemarketplace/redux-loop) as side effect solution. 

  It will make the effects composable and the reducers more domain centric. It give you elm architecture side effect like solutions.

2. Don't use `bindActionCreators`, just pass `dispatch` as the parameter to the components.

  What the component needed is model (the data) and dispatch (a way to communicate with the rest architecture). It doesnt need the action callback as the parameters. It is an implementation detail that encapsulated by the reducer. IMO, a truly reusable component module was made by View, action, reducer, effect, init. Not just the component view.

This repo is port of the elm architecture examples in redux with redux-loop to show the benefits of hierarchical composition everywhere. In this example, In this example, I used my fork of [redux-loop](https://github.com/jarvisaoieong/redux-loop) and [redux-logger](https://github.com/jarvisaoieong/redux-logger) to demonstrate how to log the high order action and async action. (Please open the console in the [live demo](http://jarvisaoieong.github.io/redux-architecture/).)

![](http://i.imgur.com/33MQJvu.png)

I hope we can make elm architecture to the mainstream to create a truly reusable and well encapsulated application.
