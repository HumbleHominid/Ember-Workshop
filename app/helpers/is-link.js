import { helper } from '@ember/component/helper';

export function isLink([ arg0 ]) {
  return arg0 === "link";
}

export default helper(isLink);
