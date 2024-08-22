import delPath from "./delpaths";
import { series, parallel } from "gulp";
import { pkgPath } from "./paths";
//删除easyest

export const removeDist = () => {
  return delPath(`${pkgPath}/components/dist`);
};

export default series(async () => removeDist());
