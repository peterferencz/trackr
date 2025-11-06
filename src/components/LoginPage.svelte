<script>
	import { login } from "$lib/LoginManager";

	let username = "";
	let password = "";

	function tryLogin() {
		login(username, password);
	}
</script>

<div>
	<form on:submit|preventDefault={tryLogin}>
		<h2>Login</h2>

		<input
			type="text"
			placeholder="Username"
			bind:value={username}
			autocomplete="username"
		/>

		<input
			type="password"
			placeholder="Password"
			bind:value={password}
			autocomplete="current-password"
		/>

		<button type="submit">Sign in</button>

        <a href="/register">register</a>
	</form>
</div>

<style lang="scss">
	:global(body) {
		margin: 0;
		font-family: system-ui, sans-serif;
		background: #1b1b1b;
		color: #f2f2f2;
	}

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
        width: 100vw;

		form {
			display: flex;
			flex-direction: column;
			gap: 0.75rem;
			width: 100%;
			max-width: 280px;

			h2 {
				text-align: center;
				font-weight: 400;
				margin-bottom: 0.5rem;
				color: #ddd;
			}

			input {
				padding: 0.5rem 0.75rem;
				border: 1px solid #444;
				border-radius: 0.25rem;
				background: transparent;
				color: inherit;
				font-size: 0.95rem;
				transition: border-color 0.2s;

				&:focus {
					outline: none;
					border-color: #888;
				}
			}

			button {
				margin-top: 0.5rem;
				padding: 0.5rem;
				border: 1px solid #555;
				background: transparent;
				color: inherit;
				font-size: 0.95rem;
				cursor: pointer;
				border-radius: 0.25rem;
				transition: background 0.2s, border-color 0.2s;

				&:hover {
					background: #2a2a2a;
					border-color: #666;
				}
				&:active {
					background: #333;
				}
			}

            a{
                text-decoration: underline;
                width: 100%;
                text-align: center;
                color: #5e5e5e;
            }
		}
	}
</style>
