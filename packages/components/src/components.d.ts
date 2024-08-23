import * as components from './index'
declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		ArButton: typeof components.Button
	}
}
export {}
