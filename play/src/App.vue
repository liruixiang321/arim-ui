<script setup lang="ts">
	import HelloWorld from './components/HelloWorld.vue'
	import { Button } from '@arim-ui/components'
	//   import { Button } from "../../packages/arim-ui/es/src/index";
	import { type } from '../../../jx-qms-front/src/layouts/default/tabs/types'
</script>

<template>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>

		<ar-button type="primary" />
		<ar-button />
		<ar-button />
		<Button type="primary"></Button>

		<a href="https://vuejs.org/" target="_blank">
			<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
		</a>
	</div>
	<HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
		transition: filter 300ms;
	}
	.logo:hover {
		filter: drop-shadow(0 0 2em #646cffaa);
	}
	.logo.vue:hover {
		filter: drop-shadow(0 0 2em #42b883aa);
	}
</style>
