import React from 'react';
import ReactDOM from 'react-dom';
import Summary from './Summary';

describe('Summary Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(< Summary/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})