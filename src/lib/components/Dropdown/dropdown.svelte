<script lang="ts">
	type Invisible = boolean;

	type Props = { invisible?: Invisible };

	/* id="dropdownDefault" */
	/* data-dropdown-toggle="dropdown" */
	/* class="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" */
	export let props: Props = { invisible: false };

	export let invisible: boolean = props.invisible;

	/* <button type="button" on: on:click={() => (invisible = true)}>Dropdown button</button> */
	/* <!-- Dropdown menu --> */
	/* <div */
	/* 	class:invisible={!invisible} */
	/* 	id="dropdown" */
	/* 	class="z-10 bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700" */
	/* > */
	/* 	<ul class="py-1 text-sm text-gray-700 dark:text-gray-200"> */
	/* 		<li> */
	/* 			<a */
	/* 				href="#" */
	/* 				class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" */
	/* 				>Dashboard</a */
	/* 			> */
	/* 		</li> */
	/* 	</ul> */
	/* </div> */
</script>

<button
	id="dropdownDefault"
	data-dropdown-toggle="dropdown"
	class="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
	type="button"
	>Dropdown button <svg
		class="w-4 h-4 ml-2"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M19 9l-7 7-7-7"
		/></svg
	></button
>
<!-- Dropdown menu -->
<div
	id="dropdown"
	class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700"
>
	<ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
		<li>
			<a
				href="#"
				class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
				>Dashboard</a
			>
		</li>
	</ul>
</div>
