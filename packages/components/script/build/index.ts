import delPath from './delpaths'
import { series, parallel, src, dest } from 'gulp'
import { componentPath, pkgPath } from './paths'
import less from 'gulp-less'
import autoprefixer from 'gulp-autoprefixer'
import run from './run'
//删除easyest

export const removeDist = () => {
	return delPath(`${pkgPath}/components/dist`)
}

//打包样式
export const buildStyle = () => {
	return src(`${componentPath}/src/**/style/**.less`)
		.pipe(less())
		.pipe(autoprefixer())
		.pipe(dest(`${componentPath}/dist/arim-ui/lib/src`))
		.pipe(dest(`${componentPath}/dist/arim-ui/es/src`))
}
//打包组件
export const buildComponent = async () => {
	run('pnpm run build', componentPath)
}

export default series(
	async () => removeDist(),
	parallel(
		async () => buildStyle(),
		async () => buildComponent(),
	),
)
