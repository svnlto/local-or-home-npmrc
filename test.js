import path from 'path';
import test from 'ava';
import m from './';

test(t => {
  t.true(path.isAbsolute(m));
});
