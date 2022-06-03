import assert from 'assert';
import operate from '../logic/operate';

describe('test operate', () => {
  it('sum', () => {
    assert(operate('45', '35', '+') === '80');
  });

  it('substraction', () => {
    assert(operate('45', '35', '-') === '10');
  });

  it('multiplication', () => {
    assert(operate('15', '5', 'x') === '75');
  });
  it('substraction', () => {
    assert(operate('45', '5', '÷') === '9');
  });

  it('multiplication', () => {
    assert(operate('22', '5', '%') === '2');
  });
});
