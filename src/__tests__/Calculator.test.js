import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from '../components/Calculator';

describe('Calculator tests', () => {
  it('Calculator renders as expected', () => {
    const component = renderer.create(
      <Calculator />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Calculator is visible to the user', () => {
    const { getByTestId } = render(<Calculator />);
    expect(getByTestId('caculatorDisplay')).toBeInTheDocument();
  });
});
