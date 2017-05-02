import { Component, OnInit } from '@angular/core';
import { RoomsService } from './rooms.service';

@Component({
    selector: 'rooms',
    templateUrl: 'rooms.component.html',
    providers: [RoomsService]
})

export class RoomsComponent {

    public data;

    constructor(
        private service: RoomsService
    ) { 

        this.service.getAll().then( (data) =>{
            this.data = data;
        });
        
    }

    public viewDetails(id){
        this.service.viewDetails(id);
    }

    
}