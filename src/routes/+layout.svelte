<script>
	import Header from './Header.svelte';
	import './styles.css';
	import 'dracula-ui/styles/dracula-ui.css'
	import Tthree from './Tthree.svelte';
	import { mousex, mousey, graphicsToggle, screenWidth, fov } from './stores'
  	import { fade  } from 'svelte/transition';

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

	$: if ($screenWidth < 900) {
		graphicsToggle.set(false);
	}
	$: if ($screenWidth > 900) {
		graphicsToggle.set(true);
	}

</script>

<svelte:head>
	{#key $screenWidth}
		{#if $screenWidth < 650 && $screenWidth >= 450}
			<meta name="viewport" content="width=device-width initial-scale=0.7">
		{:else if $screenWidth < 450  && $screenWidth >= 360}
			<meta name="viewport" content="width=device-width initial-scale=0.6">
		{:else if $screenWidth < 360}
			<meta name="viewport" content="width=device-width initial-scale=0.45">
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

		<main in:fade={{delay: 150, duration: 200,}} out:fade={{delay: 0, duration: 150,}}>
			<slot />
		</main>
		
		<footer>
			<p class="drac-text drac-text-grey-secondary oke">{year} developed by Michal Hicz</p>
		</footer>
	</div>
{/key}

<style>
	.bb {
		background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
	}
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
