import React from 'react';
import ReactDOM from 'react-dom';
import FirstPage from './FirstPage';
import {MemoryRouter} from 'react-router-dom'

describe('FirstPage Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <MemoryRouter>
    < FirstPage/>
    </MemoryRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
})