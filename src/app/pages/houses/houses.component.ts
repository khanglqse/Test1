import { Component, OnInit } from '@angular/core';

import { HousesService } from './houses.service';

@Component({
    selector: 'houses',
    templateUrl: './houses.component.html',
    providers: [HousesService]
})

export class HousesComponent {

    query: string = '';


    data = [];

    constructor(protected service: HousesService) {

        this.service.getData().then((data) => {
            this.data = data;
        });
    }

}