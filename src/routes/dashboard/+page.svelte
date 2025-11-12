<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const now = writable(new Date());
	const daysRemaining = writable(0);
	const hoursRemaining = writable(0);

	// Update every second
	let interval: NodeJS.Timeout;

	function updateTime() {
		const current = new Date();
		now.set(current);

		// Days remaining
		const start = new Date(current.getFullYear(), 0, 0);
		const diff = current.getTime() - start.getTime();
		const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
		const totalDays = (new Date(current.getFullYear(), 11, 31).getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
		daysRemaining.set(Math.ceil(totalDays - dayOfYear));

		// Hours remaining
		hoursRemaining.set(24 - current.getHours() - current.getMinutes() / 60 - current.getSeconds() / 3600);
	}

	onMount(() => {
		updateTime();
		interval = setInterval(updateTime, 1000);
		return () => clearInterval(interval);
	});
</script>

<style>
    progress{
        background: transparent;
        border: 1px solid white;
        color: white;
    }

    progress::-webkit-progress-value {
        background-color: white;
    }
    progress::-moz-progress-bar {
        background-color: white;
    }
</style>

<progress value="{365 - $daysRemaining}" style:width="100px" max="365"></progress>
<progress value="{24 - $hoursRemaining}" style:width="100px" max="24"></progress>
