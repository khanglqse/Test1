import { Component, OnInit , ViewChild} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response } from '@angular/http';

import { UserDetailService } from './user-details.service';

@Component({
    selector: 'user-details',
    templateUrl: 'user-details.component.html',
    styleUrls: ['./user-details.css'],
    providers: [UserDetailService]
})

export class UserDetailComponent {

    //@ViewChild('staticTabs') staticTabs: TabsetComponent;
    public userInfo = {};

    public tranList = {};
    

    constructor(private service: UserDetailService,
        protected activeRoute: ActivatedRoute) {
        //alert(this.activeRoute.snapshot.params['id']);

        let id = this.activeRoute.snapshot.params['userId'];
        this.service.getDetails(id)
            .then((ret: Response) => {
                this.userInfo = ret.json();
            });
        
        this.service.getTrans(id)
        .then( (ret: Response) => {
            this.tranList = ret.json();
        });
    }

    public updateList(list){
        
        list = this.tranList;
    }
    
}