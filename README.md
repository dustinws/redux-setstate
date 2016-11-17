# redux-setstate
A `setState` api for purely functional components.

### Installation
`$ npm i -S redux-setstate`

Example usage

``` Javascript
// In reducer.js

import { reducer as localState } from 'redux-setstate';

export default combineReducers({
  localState,
});


// In MyComponent.js
import React from 'react';
import { configureState } from 'redux-setstate';

const configureState = configureState('counter-app', {}, { count: 0 });

export const App = ({ localState, setState }) => (
  <div>
    <h3>Count: {localState.count}</h3>
    <button onClick={() => setState({ count: localState.count + 1 })}>+</button>
    <button onClick={() => localState.count > 0 && setState({ count: localState.count - 1 })}>-</button>
  <div>
);

export default configureState(App);

```


#### Api

`configureState(namespace: string, actions: Object, initialState: any)`
