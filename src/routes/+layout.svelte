<script>
	import { onMount } from 'svelte';
	import Header from './Header.svelte';
	import './styles.css';
	import 'dracula-ui/styles/dracula-ui.css'
	import Tthree from './Tthree.svelte';
  	import Scene from './scene.svelte';
	import { mousex, mousey, graphicsToggle, screenWidth } from './stores'

	let teraz = new Date(), month, day, year;
	year = teraz.getFullYear();

	async function handleMousemove(event) {
		mousex.set(event.clientX);
		mousey.set(event.clientY);
	}

	let graphics = true;
	graphicsToggle.subscribe((value) => graphics = value);

</script>

<svelte:window bind:outerWidth={$screenWidth}/>

{#if graphics}
<Tthree />
{/if}

<div style={graphics == false ? 'background-color: #111217!important;' : 'background-color: transparent!important;'} class="app" on:mousemove={handleMousemove}>
	<Header />

	<main>
		<slot />
	</main>
	
	<footer>
		<p class="drac-text drac-text-grey-secondary">{year} developed by Michal Hicz</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	a { text-decoration: none; }

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
