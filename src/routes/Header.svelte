<script>
	import github from '$lib/images/github.svg';
	import { graphicsToggle } from './stores'

	async function graphicsOff() {
		graphicsToggle.set(false);
	}
	async function graphicsOn() {
		graphicsToggle.set(true);
	}

</script>

<header>
	<div class="corner">
		{#if $graphicsToggle}
			<button on:click={graphicsOff} style="margin-top: 1em; margin-left:1em; width:10em; height:2.5em;" class="drac-btn drac-bg-purple-transparent drac-btn-ghost drac-text-purple drac-m-sm drac-btn-xs">
				GRAPHICS: on  </button>
		{:else}
			<button on:click={graphicsOn} style="margin-top: 1em; margin-left:1em; width:10em; height:2.5em;" class="drac-btn drac-bg-purple-transparent drac-btn-ghost drac-text-purple drac-m-sm drac-btn-xs">
				GRAPHICS: off</button>
		{/if}
	</div>
	<div class="corner">
		<a href="https://github.com/mikimou/">
			<img class="white" src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}
	.corner {
		width: 3em;
		height: 3em;
		display: inline-block;
	}
	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
	.white {
		filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
	}
	nav {
		display: flex;
		justify-content: center;
		--background: var(--color-theme-1);
	}
	svg {
		width: 2em;
		height: 3em;
		display: block;
		color: var(--color-theme-1);
	}
	path {
		fill: var(--background);
	}
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}
	li {
		position: relative;
		height: 100%;
	}
	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}
	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-bg);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
	a:hover {
		color: var(--color-text);
	}
	a { text-decoration: none; }
</style>
