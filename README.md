# redux-setstate
A `setState` api for purely functional components.

Example usage

``` Javascript
// In reducer.js

import { reducer as localState } from 'redux-setstate';

export default combineReducers({
  localState,
});


// In MyComponent.js
import React from 'react';
import { SetState } from 'redux-setstate';

const configureState = SetState('counter-app', {}, { count: 0 });

export const App = ({ localState, setState }) => (
  <div>
    <h3>Count: {localState.count}</h3>
    <button onClick={() => setState({ count: localState.count + 1 })}>+</button>
    <button onClick={() => localState > 0 && setState({ count: localState.count - 1 })}>+</button>
  <div>
);

export default configureState(App);

```
