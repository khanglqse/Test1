import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response } from '@angular/http';

import { UserDetailService } from './user-details.service';

@Component({
    selector: 'user-details',
    templateUrl: 'user-details.component.html',
    providers: [UserDetailService]
})

export class UserDetailComponent implements OnInit {
    public userInfo = {};

    constructor(private service: UserDetailService,
        protected activeRoute: ActivatedRoute) {
        //alert(this.activeRoute.snapshot.params['id']);

        let id = this.activeRoute.snapshot.params['userId'];
        this.service.getDetails(id)
            .then((ret: Response) => {
                this.userInfo = ret.json();
            });

    }



    ngOnInit() { }


}