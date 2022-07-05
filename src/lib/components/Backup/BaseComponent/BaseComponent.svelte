<script lang="ts">
	// TODO: on window or element resize update refBound if necessary
	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Imports│
	// ╰──────────────────────────────────────────────────────────╯
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import DefaultSpinner from '../Spinner/Spinner.svelte';
	import Box from '../Box/Box.svelte';
	import type { Sizes, Tags, Variant, ButtonEventHandler } from '../types';

	// ╭──────────────────────────────────────────────────────────╮
	// │ Exports                                                  │
	// ╰──────────────────────────────────────────────────────────╯
	// Values
	export let _t: Tags;
	export let _class: string = '';
	export let _hasSpinner: boolean = false;
	export let _hasTooltip: boolean = false;
	export let _hasLabel: boolean = false;
	export let _type: string = '';
	export let variant: Variant = 'secondary';
	export let size: Sizes = 'base';
	export let disabled: boolean = false;
	export let label: string = '';
	export let checked: boolean = false;

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
	// │ 	States                                                  │
	// ╰──────────────────────────────────────────────────────────╯
	let showTooltip = false;

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
		if (onHold) {
			const btns = ref.querySelectorAll('button');
			disableElements(btns);
		}

		if (_hasTooltip) {
			ref.onmouseenter = () => {
				showTooltip = true;
			};
			ref.onmouseleave = () => {
				showTooltip = false;
			};
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

		/* if (_t === 'input') result += 'absolute'; */

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

{#if _t === 'input'}
	{#if !_type}
		{#if _hasLabel}
			<slot name="label" />
		{:else if label}
			<span
				disabled={disabled || onHold}
				class:disabled={disabled || onHold}
				class="veniz-label cursor-default">{label}</span
			>
		{/if}
	{/if}
	<div name="input" class="relative max-w-min flex items-center">
		<svelte:element
			this={_t}
			type={_type}
			{checked}
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
		/>
		{#if _type === 'checkbox' || _type === 'radio'}
			{#if _hasLabel}
				<slot name="label" />
			{:else if label}
				<span
					disabled={disabled || onHold}
					class:disabled={disabled || onHold}
					on:click={() => !disabled && !onHold && (checked = !checked)}
					class="pl-2 veniz-label cursor-default">{label}</span
				>
			{/if}
		{/if}
		{#if onHold}
			{#if _hasSpinner}
				<slot name="spinner" />
			{:else}
				<div
					class="absolute top-0 bottom-0 left-0 right-0 items-center inline-flex place-content-end pr-3"
				>
					<DefaultSpinner addClass={spinnerClass()} />
				</div>
			{/if}
		{/if}
	</div>

	{#if _hasTooltip}
		<div
			class:invisible={!showTooltip}
			class={`
						border-1
						max-w-max
						pointer-events-none
						shadow-lg 
						rounded-lg
						transform
						transition
						duration-500
						ease-in
						absolute
						z-100
					`}
		>
			<slot name="tooltip" />
		</div>
	{/if}
{:else if _t}
	<svelte:element
		this={_t}
		bind:this={ref}
		class={_c}
		class:onHold
		type={_type}
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
		<slot />
	</svelte:element>
	<slot name="items" />
	{#if _hasTooltip}
		<div
			class:invisible={!showTooltip}
			class={`
						border-1
						max-w-max
						pointer-events-none
						shadow-lg 
						rounded-lg
						transform
						transition
						duration-500
						ease-in
						absolute
						z-100
					`}
		>
			<slot name="tooltip" />
		</div>
	{/if}
{:else}
	<slot />
{/if}
