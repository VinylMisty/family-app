import { writable } from "svelte/store";
import { localStore } from "./localStore.js";

export const alert = writable("You're in the shiny Gittings-Orpin app!");

const initialTodos = [
    { id: 1, name: "Halloween pumpkin", completed: true },
    { id: 2, name: "Fix Smug tether", completed: false },
];

export const todos = localStore("orpin-family-todo", initialTodos);

