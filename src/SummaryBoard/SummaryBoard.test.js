import React from 'react';
import ReactDOM from 'react-dom';
import SummaryBoard from './SummaryBoard';
import {MemoryRouter} from 'react-router-dom'

describe('Summary Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <MemoryRouter>
    < SummaryBoard/>
    </MemoryRouter>
     ,div);
    ReactDOM.unmountComponentAtNode(div);
  });
})