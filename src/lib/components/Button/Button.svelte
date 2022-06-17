<script lang="ts">
	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Imports                                                 │
	// ╰──────────────────────────────────────────────────────────╯
	import { BaseComponent } from '../BaseComponent/index';
	// types
	import type { Events, El } from '../types';

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Types                                                   │
	// ╰──────────────────────────────────────────────────────────╯
	type Props = Events & El;

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Exports                                                 │
	// ╰──────────────────────────────────────────────────────────╯
	export let props: Props = {} as const;

	// values
	export let value: Props['value'] = props.value;
	export let addClass: Props['addClass'] = '';
	export let variant: Props['variant'] = props.variant;

	// Events
	export let onClick: Props['onClick'] = props.onClick;
	export let onDBClick: Props['onDBClick'] = props.onDBClick;
	export let onMouseOver: Props['onMouseOver'] = props.onMouseOver;
	export let onMouseEnter: Props['onMouseEnter'] = props.onMouseEnter;
	export let onMouseLeave: Props['onMouseLeave'] = props.onMouseLeave;
	export let onMouseMove: Props['onMouseMove'] = props.onMouseMove;
	export let onFocus: Props['onFocus'] = props.onMouseMove;
	export let onContextMenu: Props['onContextMenu'] = props.onContextMenu;

	// ╭──────────────────────────────────────────────────────────╮
	// │ 	Functions                                               │
	// ╰──────────────────────────────────────────────────────────╯
	$: _class = `${addClass ?? ''} ${props.addClass ?? ''}`.trim();
</script>

<BaseComponent
	_t="button"
	{value}
	{_class}
	{variant}
	{onClick}
	{onDBClick}
	{onMouseOver}
	{onMouseEnter}
	{onMouseLeave}
	{onMouseMove}
	{onFocus}
	{onContextMenu}
/>
