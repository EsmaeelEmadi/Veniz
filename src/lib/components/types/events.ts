export type ButtonEventHandler = (this: HTMLButtonElement, event: MouseEvent) => void;

export type Events = {
	onClick?: ButtonEventHandler;
	onDBClick?: ButtonEventHandler;
	onMouseOver?: ButtonEventHandler;
	onMouseEnter?: ButtonEventHandler;
	onMouseLeave?: ButtonEventHandler;
	onContextMenu?: ButtonEventHandler;
	onFocus?: ButtonEventHandler;
	onMouseMove?: ButtonEventHandler;
};
