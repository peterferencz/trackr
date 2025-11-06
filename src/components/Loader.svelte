<script>
	// export let message = "Loading...";
</script>

<div class="loader">
	<div class="spinner"></div>
	<!-- <p>{message}</p> -->
</div>

<style lang="scss">
	.loader {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
		background: #1b1b1b;
		color: #f2f2f2;
		font-family: system-ui, sans-serif;
		gap: 1rem;
	}

	.spinner {
		border-style: solid;
		border-color: #333;
		border-top-color: #f2f2f2;
		border-radius: 50%;
		animation: spin 1s linear infinite;

        width: 2rem;
        height: 2rem;
        border-width: 1px;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	p {
		font-size: 1.1rem;
		letter-spacing: 0.5px;
		color: #6d6d6d;
	}
</style>
