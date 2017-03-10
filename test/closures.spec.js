import * as closures from '../src/closures';
import test from 'tape';

test('closures should preserve internal state', function (t) {
    t.plan(2);

    const aFixedAmount = 2;
    const basic = closures.basicClosure(aFixedAmount);
    const firstAddedAmount = 1;
    const secondAddedAmount = 3;

    t.equal(basic(firstAddedAmount), 3);
    t.equal(basic(secondAddedAmount), 5);
});