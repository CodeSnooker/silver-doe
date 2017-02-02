import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    Renderer,
    forwardRef
} from '@angular/core';

import {
    NG_VALUE_ACCESSOR,
    ControlValueAccessor
} from '@angular/forms';

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SDChip),
    multi: true
};

export interface SDChipEvent {
    chip: SDChip;
}

/** Coerces a data-bound value (typically a string) to a boolean. */
export function coerceBooleanProperty(value: any): boolean {
    return value != null && `${value}` !== 'false';
}

@Component({
    moduleId: module.id,
    selector: 'sd-chip',
    templateUrl: 'sd.chip.template.html',
    styleUrls: ['chips.css'],
    host: {
        'tabindex': '-1',
        'role': 'option',
        '[attr.disabled]': 'disabled',
        '[attr.readonly]': 'readonly',
        '[attr.icon]': 'icon',
        '[attr.aria-disabled]': '_isAriaDisabled',
        '[attr.aria-readonly]': '_isAriaReadonly',
        '[attr.aria-icon]': '_getAriaIcon',


        '(click)': '_handleClick($event)'
    },
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]

})

export class SDChip implements OnInit, OnDestroy, ControlValueAccessor {


    /** Whether or not the chip is disabled. Disabled chips cannot be focused. */
    protected _disabled: boolean = null;

    /** Whether or not the chip is selected. */
    protected _selected: boolean = false;

    /** The palette color of selected chips. */
    protected _color: string = 'primary';

    protected _readonly: boolean = null;

    protected _icon: string = null;

    //The internal data model
    private innerValue: any = '';

    //Placeholders for the callbacks which are later providesd
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;


    //get accessor
    get value(): any {
        return this.innerValue;
    };

    //set accessor including call the onchange callback
    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }

    //Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }

    //From ControlValueAccessor interface
    writeValue(value: any) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }


    /** Emitted when the chip is destroyed. */
    @Output() destroy = new EventEmitter<SDChipEvent>();

    @Output() close = new EventEmitter<SDChipEvent>();

    constructor(protected _renderer: Renderer, protected _elementRef: ElementRef) { }




    ngOnInit(): void {
        this._addDefaultCSSClass();
        this._updateColor(this._color);
    }

    ngOnDestroy(): void {
        this.destroy.emit({ chip: this });
    }

    /** Whether or not the chip is disabled. */
    @Input() get disabled(): boolean {
        return this._disabled;
    }

    @Input() get readonly(): boolean {
        return this._readonly;
    }

    @Input() get icon(): string {
        return this._icon;
    }

    /** Sets the disabled state of the chip. */
    set disabled(value: boolean) {
        this._disabled = coerceBooleanProperty(value) ? true : null;
    }

    set readonly(value: boolean) {
        this._readonly = coerceBooleanProperty(value) ? true : null;
    }

    set icon(value: string) {
        this._icon = value;
    }

    /** A String representation of the current disabled state. */
    get _isAriaDisabled(): string {
        return String(coerceBooleanProperty(this.disabled));
    }

    get _isAriaReadonly(): string {
        return String(coerceBooleanProperty(this.readonly));
    }

    get _getAriaIcon(): string {
        return String(this.icon == null ? "" : this.icon);
    }

    /** The color of the chip. Can be `primary`, `accent`, or `warn`. */
    @Input() get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._updateColor(value);
    }

    /** Ensures events fire properly upon click. */
    _handleClick(event: Event) {
        // Check disabled
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    onHover(event: Event, toAdd: boolean) {
        console.log('On Hover');
        this._renderer.setElementClass(this._elementRef.nativeElement, 'on-hover', toAdd);
        this._renderer.setElementClass(event.target, 'on-hover', toAdd);
    }

    closeMe(event: Event) {
        console.log('#closeMe');
        this.close.emit({ chip: this });

        //this._elementRef.nativeElement.remove();
    }

    /** Initializes the appropriate CSS classes based on the chip type (basic or standard). */
    private _addDefaultCSSClass() {
        let el: HTMLElement = this._elementRef.nativeElement;

        // Always add the `sd-chip` class
        el.classList.add('sd-chip');


    }

    /** Updates the private _color variable and the native element. */
    private _updateColor(newColor: string) {
        console.log('#_updateColor');
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    }

    /** Sets the md-color on the native element. */
    private _setElementColor(color: string, isAdd: boolean) {
        if (color != null && color != '') {
            this._renderer.setElementClass(this._elementRef.nativeElement, `md-${color}`, isAdd);
        }
    }
}