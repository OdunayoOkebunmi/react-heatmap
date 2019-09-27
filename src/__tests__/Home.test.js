import React from 'react';
import { shallow } from 'enzyme';
import Home from '@Components/Home';

describe('Home', () => {
  it('should render without crashing', () => {
    shallow(<Home />);
  });
});
