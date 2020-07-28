import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {simpleCalculation} from '../src/utils/utils';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Изучаем реакт/i);
  expect(linkElement).toBeInTheDocument();
});


it('calculation works', () => {
    expect(simpleCalculation(4,10)).toEqual(14);
}); 