import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import Home from '@Components/Home';

const initialState = {
  transactions: {
    error: null,
    data: [],
    status: 'status',
  },
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);

describe('<Home/>', () => {
  it('should render without crashing', () => {
    mount(
      <Router>
        <Home store={store} />
      </Router>,
    );
  });
});
