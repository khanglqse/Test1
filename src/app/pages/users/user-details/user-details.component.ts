import { Component, OnInit , ViewChild} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Router } from "@angular/router";

import { UserDetailService } from './user-details.service';

@Component({
    selector: 'user-details',
    templateUrl: 'user-details.component.html',
    styleUrls: ['./user-details.css'],
    providers: [UserDetailService]
})

export class UserDetailComponent {

    public userInfo = {};

    public tranList = [];
    public houseInfo = [];

    constructor(
        private router: Router,
        private service: UserDetailService,
        protected activeRoute: ActivatedRoute) {
        //alert(this.activeRoute.snapshot.params['id']);

        let id = this.activeRoute.snapshot.params['userId'];
        this.service.getDetails(id)
            .then((ret) => {
                this.userInfo = ret;
            });
        
        this.service.getTrans(id)
        .then( (ret) => {
            this.tranList = ret;
        });

        this.service.getHouseData()
        .then((ret)=>{
            this.houseInfo = ret;
        });
    }

    public viewDetails(id) {
        this.router.navigate(["/pages/houses", id]);
    }


    
}