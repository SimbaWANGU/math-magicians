import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputValue from '../components/InputValue';

describe('Input component tests', () => {
  const content = '7';
  const backgroundColor = 'blue';
  const handleClick = () => {
    const random = Math.random();
    return random.toString();
  };

  it('Renders as expected', () => {
    const component = renderer.create(
      <InputValue content={content} backgroundColor={backgroundColor} handleClick={handleClick} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('The user should see a single value for a given input', () => {
    const { getByTestId } = render(
      <InputValue content={content} backgroundColor={backgroundColor} handleClick={handleClick} />,
    );
    expect(getByTestId('calcValue')).toHaveTextContent(content);
  });
});
