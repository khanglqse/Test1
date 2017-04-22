import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { HousesService } from './houses.service';

@Component({
    selector: 'houses',
    templateUrl: './houses.component.html',
    providers: [HousesService]
})

export class HousesComponent {

    query: string = '';


    data = [];

    constructor(
        private router: Router,
        protected service: HousesService) {

        this.service.getData().then((data) => {
            this.data = data;
        });
    }

    public viewDetails(id) {
        this.router.navigate(["/pages/houses", id]);
    }

}