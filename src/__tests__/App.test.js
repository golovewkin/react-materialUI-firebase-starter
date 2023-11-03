import React from 'react';
import { createBrowserHistory } from 'history';
import { cleanup, customRender } from '../test-utils';
import App from '../App';

describe('App', () => {
  afterEach(cleanup);
  it('renders without crashing', () => {
    const { getByText } = customRender(
      <App history={createBrowserHistory()} />
    );
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
