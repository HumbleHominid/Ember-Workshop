import { helper } from '@ember/component/helper';

export function isAboveZero([ arg0 ]) {
  return arg0 > 0;
}

export default helper(isAboveZero);
