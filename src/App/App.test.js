import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryRouter, Switch } from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  div.setAttribute('id', 'root');
  ReactDOM.render(
    <MemoryRouter>
      <Switch>
        <App />
      </Switch>      
      </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
