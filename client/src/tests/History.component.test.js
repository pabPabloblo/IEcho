import React from 'react';
import { render } from '@testing-library/react';
import { History } from '../components/history';
import { Provider } from 'react-redux';
import store from '../app/store';
import { addResult } from '../slices/reverseStringSlice';
1
describe('In History Component' ,() => {
it('Should be Empty', () => {
  const { getByText } = render(
    <Provider store={store}>
      <History />
      </Provider>
  );
  expect(getByText(/Empty/i)).toBeInTheDocument();
});

it('Should Have A Single Result', () => {
  store.dispatch(addResult({text: 'testString'}))
  const { getByText } = render(
    <Provider store={store}>
      <History />
      </Provider>
  );
  expect(getByText(/testString/i)).toBeInTheDocument();
});

it('Should The First Page', () => {
  store.dispatch(addResult({text: 'testStringA'}))
  store.dispatch(addResult({text: 'testStringB'}))
  store.dispatch(addResult({text: 'testStringC'}))
  store.dispatch(addResult({text: 'testStringD'}))
  store.dispatch(addResult({text: 'testStringE'}))
  store.dispatch(addResult({text: 'testStringF'}))
  const { getByText } = render(
    <Provider store={store}>
      <History />
      </Provider>
  );
  expect(getByText(/1/i)).toBeInTheDocument();
  expect(getByText(/testStringF/i)).toBeInTheDocument();
});

});

