import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_STATE } from './actionTypes';

/**
 * An action creator 'factory' that creates an action for a given 'id'
 *
 * @param  {String} id
 * @return {Function}
 */
const makeCreateState = (id) => (changes = {}) => ({
  id,
  changes,
  type: SET_STATE,
});

/**
 * The main wrapper. This takes an id that represents some namespace
 * in the store. This namespace can only be updated by the Component
 * that registered it, but other components can read values, since
 * it's just a piece of the redux store.
 *
 * @param  {String} id
 * @param  {Object} [actions={}]
 * @param  {Object} [initialState={}]
 * @return {Function}
 */
export default (id, actions = {}, initialState = {}) => (ComposedComponent) =>
  connect((state) => ({
    localState: state.localState[id] || initialState,
  }), {
    ...actions,
    setState: makeCreateState(id),
  })(ComposedComponent);
