<script lang="ts">
	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Imports│
	// ╰──────────────────────────────────────────────────────────╯
	import { onMount } from 'svelte';
	import DefaultSpinner from '../Spinner/Spinner.svelte';
	import type { Sizes, Tags, Variant, ButtonEventHandler } from '../types';

	// ╭──────────────────────────────────────────────────────────╮
	// │ Exports                                                  │
	// ╰──────────────────────────────────────────────────────────╯
	// Values
	export let _t: Tags;
	export let _class: string = '';
	export let _hasSpinner: boolean = false;
	export let variant: Variant = 'secondary';
	export let size: Sizes = 'base';
	export let disabled: boolean = false;

	// Events
	export let onHold: boolean = undefined;
	// // mouse
	export let onClick: ButtonEventHandler = undefined;
	export let onDBClick: ButtonEventHandler = undefined;
	export let onMouseOver: ButtonEventHandler = undefined;
	export let onMouseEnter: ButtonEventHandler = undefined;
	export let onMouseLeave: ButtonEventHandler = undefined;
	export let onMouseMove: ButtonEventHandler = undefined;
	export let onFocus: ButtonEventHandler = undefined;
	export let onContextMenu: ButtonEventHandler = undefined;

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Functions                                               │
	// ╰──────────────────────────────────────────────────────────╯
	$: _c = `
		${_class}
		${variant}
		text-${size}
	`;

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	REF                                                     │
	// ╰──────────────────────────────────────────────────────────╯
	// NOTE: this value is not used
	// on prevoius version it wased used on tooltip
	// TODO: check it out
	// NOTE: TEST
	let ref = undefined;

	const disableElements = (elements: HTMLElement[]) => {
		elements.forEach((el) => {
			console.log(el);
			el.setAttribute('disabled', '');
		});
	};

	const enableElements = (elements: HTMLElement[]) => {
		elements.forEach((el) => {
			console.log(el);
			el.removeAttribute('disabled');
		});
	};

	onMount(() => {
		ref.onmouseover = () => console.log('go hang yourself');

		if (onHold) {
			const btns = ref.querySelectorAll('button');
			disableElements(btns);
		}
	});

	$: {
		console.log({ ref });
		if (_t === 'div' && ref) {
			if (onHold) {
				const btns = ref.querySelectorAll('button');
				disableElements(btns);
			} else {
				const btns = ref.querySelectorAll('button');
				enableElements(btns);
			}
		}
	}

	// spinner class
	$: spinnerClass = (): string => {
		let result = '';

		if (size === 'sm') {
			result += `
				ml-1.5
				-my-6px
				h-4
				w-4
			`;
		} else if (size === 'base') {
			result += `
				ml-2
				-my-6px
				h-5
				w-5
			`;
		} else if (size === 'xl') {
			result += `
				ml-2
				-my-6px
				h-7
				w-7
			`;
		}

		return result;
	};
</script>

{#if _t}
	<svelte:element
		this={_t}
		bind:this={ref}
		class={_c}
		class:onHold
		disabled={disabled || onHold}
		on:click={onClick}
		on:dblclick={onDBClick}
		on:mouseover={onMouseOver}
		on:mouseenter={onMouseEnter}
		on:mouseleave={onMouseLeave}
		on:mousemove={onMouseMove}
		on:focus={onFocus}
		on:contextmenu={onContextMenu}
	>
		<slot />

		{#if onHold}
			{#if _hasSpinner}
				<slot name="spinner" />
			{:else if _t === 'div'}
				<div
					class="flex flex-wrap place-content-center bg-white absolute bottom-0 left-0 right-0 top-0 bg-opacity-40 backdrop-filter backdrop-grayscale"
				>
					<DefaultSpinner addClass={spinnerClass()} variant="primary" />
				</div>
			{:else}
				<DefaultSpinner addClass={spinnerClass()} />
			{/if}
		{/if}
	</svelte:element>
{:else}
	<slot />
{/if}
