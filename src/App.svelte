<script>
	import Todos from "./components/Todos.svelte";
	import Alert from "./components/Alert.svelte";
	import { todos } from "./stores.js";

	export let name;

	function toggleName() {
		if (name === "Misty") {
			name = "Leo";
		} else if (name === "Leo") {
			name = "Crey";
		} else if (name === "Crey") {
			name = "Cyrus";
		} else if (name === "Cyrus") {
			name = "Misty";
		}
	}
</script>

<main>
	<div class="top">
		<h1>Hello {name}!</h1>
		<button class="btn_top" on:click={toggleName}>Switch user</button>
	</div>

	<div class="to-do">
		<Alert />
		<Todos bind:todos={$todos} />
	</div>
</main>
