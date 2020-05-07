// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  act,
  getAllByText,
} from '@testing-library/react';
import { fetchShow as mockFetchShow } from './api/fetchShow';

import App from './App';

jest.mock('./api/fetchShow');

test('App fetches show data and renders it', async () => {
  const mockData = {
    id: '123',
    image: { medium: 'medium_image' },
    name: 'name',
    season: 1,
    number: 1,
    summary: '<p>Summary</p>',
    runtime: 60,
  };
  mockFetchShow.mockResolvedValueOnce(mockData);
  const { queryAllByText } = render(<App />);
  await waitFor(() => expect(queryAllByText(/name/i)).toHaveLength(1));
});
