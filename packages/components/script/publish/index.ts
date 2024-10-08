import run from '../build/run';
import { componentPath } from '../build/paths';
import { series } from 'gulp';
export const publishComponent = async () => {
  run('release-it --npm.timeout=1000', `${componentPath}/dist/arim-ui`);
};
export default series(async () => publishComponent());
