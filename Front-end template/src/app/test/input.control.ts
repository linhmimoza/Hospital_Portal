import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'input-control',
    templateUrl: './input.control.html'
})
export class InputControlComponent {
    @Input() label: string;
    @Input() type: string;
    @Input() model: string;
    @Output() modelChange= new EventEmitter<string>();

    ngOnInit(){
        this.type = this.type || "text";
        // neu chua tuyen gia tri thi gia tri mac dinh la text
    }
    change(){
        this.modelChange.emit(this.model);
    }
}