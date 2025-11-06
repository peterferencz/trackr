import { writable, derived, type Writable } from 'svelte/store';


const loggedInUser:Writable<null|{name:string}> = writable(null);
const isLoggedIn = derived(loggedInUser, usr => usr != null);

async function login(email:string, password:string): Promise<boolean> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            loggedInUser.set({
                name: email
            })
            resolve(true);
        }, 2000);
    })
}

export { login, isLoggedIn, loggedInUser }
