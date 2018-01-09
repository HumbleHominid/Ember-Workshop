import { helper } from '@ember/component/helper';

export function isImage([ arg0 ]) {
  return arg0 === "image";
}

export default helper(isImage);
