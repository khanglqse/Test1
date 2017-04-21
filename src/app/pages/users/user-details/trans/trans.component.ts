import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'trans',
    templateUrl: 'trans.component.html'
})

export class TransComponent {

    @Input()
    public tranList = {};

    @Output() 
    updateList = new EventEmitter();


    constructor() { 

        this.updateList.emit(this.tranList);
    }

}