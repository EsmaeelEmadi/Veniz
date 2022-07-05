<script lang="ts">
	/* import { Dropdown, Radio, Input, Checkbox, OnHold, Box, Button, Spinner } from '$lib'; */
	import { Spinner, Radio, Button, Checkbox, Input, Dropdown } from '$lib';
	/* import Icon from '@iconify/svelte'; */
	/* let value: string = 'asdf'; */
	let onHold: boolean = true;
	let v = 'what is this';
	let checked: boolean = false;

	/* <Box> */
	/* 	<Button onClick={() => (onHold = !onHold)} */
	/* 		>hello */
	/* 		<div class="bg-primary-200" slot="tooltip">hello</div></Button */
	/* 	> */
	/* 	<Input bind:value={v} {onHold} variant="primary"> */
	/* 		<p slot="label">username</p> */
	/* 	</Input> */
	/* </Box> */
	/* <Box> */
	/* 	<Checkbox variant="primary" label="hello" bind:checked disabled={onHold} /> */
	/* 	<Radio variant="primary" label="hello" bind:checked disabled={onHold} /> */
	/* 	<Dropdown {onHold} items={[{ label: 'sth', key: 1 }]} value="sth" /> */
	/* </Box> */
</script>

<Button value="hello" variant="primary">what</Button>
<Button value="hello" on:click={() => console.log('hello')}>what</Button>
<Checkbox label="some label" {checked} addClass="default" />
<Input label="hello" bind:value={v} />
<Radio {checked} variant="primary" label="wtf" />
<Spinner variant="primary" />

<Dropdown />
