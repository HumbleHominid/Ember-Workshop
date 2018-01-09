import { helper } from '@ember/component/helper';

export function isUrl([ arg0 ]) {
  return arg0.match(/\.(jpg|png|gif)/);
}

export default helper(isUrl);
