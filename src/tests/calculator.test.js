import Calculator from '../../__mocks__/Calculator';
// import '@testing-library/jest-dom/extend-expect';
// import {
//   getByLabelText,
//   getByText,
//   getByTestId,
//   queryByTestId,
//   waitFor,
// } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';

test('renders dropValue', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/dropValue/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders title', () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/Let do some maths/i);
  expect(linkElement).toBeInTheDocument();
});
