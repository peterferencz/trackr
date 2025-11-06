import { writable, derived, type Writable } from 'svelte/store';


const loggedInUser:Writable<null|{name:string}> = writable(null);

const isLoggedIn = derived(loggedInUser, usr => usr != null);

function login(email:string, password:string): boolean{
    loggedInUser.set({
        name: email
    })

    return true;
}

export { login, isLoggedIn, loggedInUser }
