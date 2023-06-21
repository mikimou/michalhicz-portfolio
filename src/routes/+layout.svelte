<script>
	import { onMount } from 'svelte';
	import Header from './Header.svelte';
	import './styles.css';
	import 'dracula-ui/styles/dracula-ui.css'
	import Tthree from './Tthree.svelte';
  	import Scene from './scene.svelte';
	import { mousex, mousey, graphicsToggle, screenWidth, mouseReactivity, fov } from './stores'
  	import { fly, fade  } from 'svelte/transition';

	export let data;

	let teraz = new Date(), month, day, year;
	year = teraz.getFullYear();

	async function handleMousemove(event) {
		mousex.set(event.clientX);
		mousey.set(event.clientY);
	}

	$: if ($screenWidth < 1500) {
		fov.set(11);
	} 
	$: if ($screenWidth < 1100) {
		fov.set(12);
	}
	$: if ($screenWidth < 800) {
		fov.set(13);
	}
	$: if ($screenWidth < 500) {
		fov.set(14);
	}
	$: if ($screenWidth > 1500) {
		fov.set(9);
	}

	$: if ($screenWidth < 1000) {
		graphicsToggle.set(false);
	}
	$: if ($screenWidth > 1000) {
		graphicsToggle.set(true);
	}


</script>

<svelte:head>
	{#key $screenWidth}
	{#if $screenWidth < 600}
		<meta name="viewport" content="width=device-width initial-scale=0.6">
	{:else}
		<meta name="viewport" content="width=device-width initial-scale=1">
	{/if}
	{/key}
</svelte:head>

<svelte:window bind:outerWidth={$screenWidth} on:mousemove={handleMousemove}/>

{#if $graphicsToggle}
<Tthree />
{/if}

{#key data.url}
<div style={$graphicsToggle == false ? 'background-color: #111217!important;' : 'background-color: transparent!important;'} class="app">
	<Header />

	<main in:fade={{delay: 250, duration: 250,}} out:fade={{delay: 0, duration: 200,}}>
		<slot />
	</main>
	
	<footer>
		<p class="drac-text drac-text-grey-secondary">{year} developed by Michal Hicz</p>
	</footer>
</div>
{/key}

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
