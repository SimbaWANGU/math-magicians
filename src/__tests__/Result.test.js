import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Result from '../components/Result';

describe('Result display tests', () => {
  const result = 0.1839870354127373;
  it('display properly the correct result', () => {
    const component = renderer.create(
      <Result result={result} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('the display should be a disabled input', () => {
    const { getByTestId } = render(<Result result={result} />);
    expect(getByTestId('resultDisplay')).toBeDisabled();
  });
});
