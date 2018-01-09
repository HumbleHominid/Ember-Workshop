import { helper } from '@ember/component/helper';

export function isUrl([ arg0 ]) {
  // only checking if the url is to a mime-type
  return (/\.(jpg|png|gif)$/).test(arg0);
}

export default helper(isUrl);
