import {configTests} from 'core/config/config-tests';
import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter} from 'react-router-dom';
import DefaultLayout from './DefaultLayout';

describe('DefaultLayout', () => {
  it('renders without crashing', () => {
    configTests()
      .then(() => {
        const div = document.createElement('div');
        ReactDOM.render(
          <MemoryRouter>
            <DefaultLayout/>
          </MemoryRouter>,
          div,
        );
        ReactDOM.unmountComponentAtNode(div);
      });
  });
});
