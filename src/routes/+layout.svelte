<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	import '$lib/assets/style.scss'
	import LoginPage from '../components/LoginPage.svelte';
	
	let { children } = $props();
	import { isLoggedIn, loggedInUser } from '$lib/LoginManager';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
	<meta name="mobile-web-app-capable" content="yes" />
</svelte:head>

{#if $isLoggedIn}
{$loggedInUser?.name}
<div id="navbar">
	<a href="/dashboard" class:active={page.url.pathname == "/dashboard"}><span class="material-symbols-sharp">dashboard</span></a>
	<a href="/journal" class:active={page.url.pathname == "/journal"}><span class="material-symbols-sharp">edit_note</span></a>
	<a href="/search" class:active={page.url.pathname == "/search"}><span class="material-symbols-sharp">search</span></a>
</div>
<div id="content">
	{#key page.url.pathname}
		<div in:fade={{ duration: 150 }} out:fade={{ duration: 120 }}>
			{@render children?.()}
		</div>
	{/key}
</div>
{:else}
	<LoginPage/>
{/if}
