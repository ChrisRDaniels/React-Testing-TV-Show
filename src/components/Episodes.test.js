import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  act,
  queryByText,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episodes from './Episodes';

test('Renders Episodes without props, then rerenders Episodes with props', () => {
  const mockData = {
    id: '123',
    image: { medium: 'medium_image' },
    name: 'name',
    season: 1,
    number: 1,
    summary: '<p>Summary</p>',
    runtime: 60,
  };
  const { getByText, queryAllByText, rerender, debug } = render(
    <Episodes episodes={[]} />
  );
  expect(queryAllByText(/season/i) === null);
  rerender(<Episodes episodes={[mockData]} />);
  expect(queryAllByText(/name/i)).toHaveLength(1);
});
