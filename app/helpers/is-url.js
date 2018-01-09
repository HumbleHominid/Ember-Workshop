import { helper } from '@ember/component/helper';

export function isUrl([ arg0 ]) {
  // only checking if the url is to a mime-type
  return arg0.match(/\.(jpg|png|gif)/);
}

export default helper(isUrl);
