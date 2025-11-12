<script>
    import { resolve } from "$app/paths";
	import { login } from "$lib/LoginManager";
    import { fade } from 'svelte/transition';
    import Loader from "../../components/Loader.svelte";

	let username = "";
	let password = "";
    let waitingForValidation = false;
    
	async function tryLogin() {
        waitingForValidation = true;
		await login(username, password);
	    await new Promise((r) => setTimeout(r, 120));
        waitingForValidation = false;
	}
</script>

<svelte:head>
	<title>Log in</title>
</svelte:head>


<div>
    {#if waitingForValidation}
        <div in:fade={{ duration: 150 }} out:fade={{ duration: 120 }}>
            <Loader/>
        </div>
    {:else}
        <div in:fade={{ duration: 150 }} out:fade={{ duration: 120 }}>
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
    
                <a href={resolve("/register")}>register</a>
            </form>
        </div>
    {/if}
</div>

<style lang="scss">
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
        width: 100vw;
        position: relative;

        >div{
            position: absolute;
            inset: 0;
        }

        >div, >form {
            position: absolute;
        }

		form {
			display: flex;
			flex-direction: column;
            align-items: center;
            justify-content: center;
			gap: 0.75rem;
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
                width: 100%;
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
